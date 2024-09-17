import axios, { AxiosResponse } from 'axios';
import * as Eff from 'redux-saga/effects';

import * as actions from './actions';

export function* load() {
  try {
    const response: AxiosResponse = yield Eff.call(axios.get, './simulated-req.json');
    yield Eff.put(actions.loadSuccess(response.data));
  } catch (err) {
    yield Eff.put(actions.loadFailure());
  }
}
