import { PayloadAction } from 'typesafe-actions';

import { ActionTypes, ReqState, SaleRecord } from './types';

const INITIAL_STATE: ReqState = {
  loading: false,
  error: false,
  data: [],
};

const reducer = (
  state = INITIAL_STATE,
  action: PayloadAction<ActionTypes, { data: SaleRecord[] }>,
): ReqState => {
  switch (action.type) {
    case ActionTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case ActionTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case ActionTypes.FAKE_LOADING:
      return {
        ...state,
        loading: !!action.payload,
        error: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
