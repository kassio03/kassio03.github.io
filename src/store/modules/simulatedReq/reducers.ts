import { ActionTypes, ReqState } from './types';

const INITIAL_STATE: ReqState = {
  loading: false,
  error: false,
  data: [],
};

const reducer = (state = INITIAL_STATE, action: any): ReqState => {
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
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
