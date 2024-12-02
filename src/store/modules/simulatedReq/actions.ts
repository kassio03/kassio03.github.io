import { action } from 'typesafe-actions';

import { ActionTypes, SaleRecord } from './types';

export const loadRequest = () => {
  return action(ActionTypes.LOAD_REQUEST);
};

export const loadSuccess = (data: SaleRecord[]) => {
  return action(ActionTypes.LOAD_SUCCESS, { data });
};

export const loadFailure = () => {
  return action(ActionTypes.LOAD_FAILURE);
};

export const setLoading = (loading: boolean) => {
  return action(ActionTypes.FAKE_LOADING, loading);
};
