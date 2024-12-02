import axios, { AxiosResponse } from 'axios';
import * as Eff from 'redux-saga/effects';
import { action as taction, PayloadAction } from 'typesafe-actions';

export enum AuthTypes {
  LOGIN_REQUEST = '@MTLIST/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@MTLIST/LOGIN_SUCCESS',
  LOGIN_FAILURE = '@MTLIST/LOGIN_FAILURE',
  LOGOUT_REQUEST = '@MTLIST/LOGOUT_REQUEST',
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  readonly isLogged: boolean;
  readonly token: string | null;
  readonly user: User | null;
  readonly loading: boolean;
  readonly error: boolean;
}

const INITIAL_STATE: AuthState = {
  isLogged: false,
  token: null,
  user: null,
  loading: false,
  error: false,
};

const reducer = (
  state = INITIAL_STATE,
  action: PayloadAction<AuthTypes, { token: string; user: User }>,
): typeof INITIAL_STATE => {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLogged: false,
        token: null,
        user: null,
        loading: true,
        error: false,
      };
    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        token: action.payload.token,
        user: action.payload.user,
        loading: false,
        error: false,
      };
    case AuthTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLogged: false,
        token: null,
        user: null,
        loading: false,
        error: true,
      };
    case AuthTypes.LOGOUT_REQUEST:
      return {
        ...state,
        isLogged: false,
        token: null,
        user: null,
        loading: false,
        error: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export const loginRequest = ({ email, password }: { email: string; password: string }) => {
  return taction(AuthTypes.LOGIN_REQUEST, { email, password });
};

export const loginSuccess = ({ token, user }: { token: string; user: User }) => {
  return taction(AuthTypes.LOGIN_SUCCESS, { token, user });
};

export const loginFailure = () => {
  return taction(AuthTypes.LOGIN_FAILURE);
};

export const logout = () => {
  return taction(AuthTypes.LOGOUT_REQUEST);
};

const BASE_URL =
  import.meta.env.VITE_ENVIRONMENT === 'production' ? 'production_url' : 'http://localhost:3000';

export function* mtlistLogin(
  action: PayloadAction<AuthTypes, { email: string; password: string }>,
) {
  const { email, password } = action.payload;
  try {
    const response: AxiosResponse = yield Eff.call(axios.post, `${BASE_URL}/auth`, {
      email,
      password,
    });
    const data = {
      token: response.data.body.token,
      user: JSON.parse(window.atob(response.data.body.token.split('.')[1])),
    };
    yield Eff.put(loginSuccess(data));
  } catch (err) {
    /* yield Eff.put(logout()); */
  }
}

export default reducer;
