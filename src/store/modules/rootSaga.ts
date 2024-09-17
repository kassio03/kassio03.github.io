import * as Eff from 'redux-saga/effects';

import { load } from './simulatedReq/sagas';
import { ActionTypes } from './simulatedReq/types';

function* rootSaga(): any {
  return yield Eff.all([Eff.takeLatest(ActionTypes.LOAD_REQUEST, load)]);
}
export default rootSaga;
