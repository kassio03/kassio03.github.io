import * as Eff from 'redux-saga/effects';

import { AuthTypes, mtlistLogin } from './mtlist/auth';
import { registerUser, UserTypes } from './mtlist/user';
import { load } from './simulatedReq/sagas';
import { ActionTypes } from './simulatedReq/types';

function* rootSaga(): any {
  return yield Eff.all([
    Eff.takeLatest(ActionTypes.LOAD_REQUEST, load),
    Eff.takeLatest(AuthTypes.LOGIN_REQUEST, mtlistLogin),
    Eff.takeLatest(UserTypes.REGISTER_REQUEST, registerUser),
  ]);
}
export default rootSaga;
