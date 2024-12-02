import * as Eff from 'redux-saga/effects';

import { AuthTypes, mtlistLogin } from './mtlist/auth';
import { load } from './simulatedReq/sagas';
import { ActionTypes } from './simulatedReq/types';

function* rootSaga(): any {
  return yield Eff.all([
    Eff.takeLatest(ActionTypes.LOAD_REQUEST, load),
    Eff.takeLatest(AuthTypes.LOGIN_REQUEST, mtlistLogin),
  ]);
}
export default rootSaga;
