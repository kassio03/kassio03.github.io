import axios, { AxiosResponse } from 'axios';
import * as Eff from 'redux-saga/effects';
import { action as taction, PayloadAction } from 'typesafe-actions';

export enum UserTypes {
  REGISTER_REQUEST = '@MTLIST/REGISTER_REQUEST',
  REGISTER_SUCCESS = '@MTLIST/REGISTER_SUCCESS',
  REGISTER_FAILURE = '@MTLIST/REGISTER_FAILURE',
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserState {
  readonly user: User | null;
  readonly loading: boolean;
  readonly error: boolean;
}

const INITIAL_STATE: UserState = {
  user: null,
  loading: false,
  error: false,
};

const reducer = (
  state = INITIAL_STATE,
  action: PayloadAction<UserTypes, { user: User }>,
): typeof INITIAL_STATE => {
  switch (action.type) {
    case UserTypes.REGISTER_REQUEST:
      return {
        ...state,
        user: null,
        loading: true,
        error: false,
      };
    case UserTypes.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        error: false,
      };
    case UserTypes.REGISTER_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export const registerRequest = (user: { name: string; email: string; password: string }) => {
  return taction(UserTypes.REGISTER_REQUEST, { user });
};

export const registerSuccess = ({ user }: { user: User }) => {
  return taction(UserTypes.REGISTER_SUCCESS, { user });
};

export const registerFailure = () => {
  return taction(UserTypes.REGISTER_FAILURE);
};

const BASE_URL =
  import.meta.env.VITE_ENVIRONMENT === 'production' ? 'production_url' : 'http://localhost:3000';

export function* registerUser(
  action: PayloadAction<UserTypes, { user: { name: string; email: string; password: string } }>,
) {
  const { name, email, password } = action.payload.user;
  try {
    const response: AxiosResponse = yield Eff.call(axios.post, `${BASE_URL}/user`, {
      name,
      email,
      password,
    });
    const data = {
      user: response.data.body,
    };
    yield Eff.put(registerSuccess(data));
  } catch (err) {
    yield Eff.put(registerFailure());
  }
}

export default reducer;
