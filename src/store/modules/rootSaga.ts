import * as Eff from 'redux-saga/effects';

import { AuthTypes, mtlistLogin } from './mtlist/auth';
import {
  mtlistCreateTask,
  mtlistDeleteTask,
  mtlistGetAllTasks,
  mtlistUpdateTask,
  TaskTypes,
} from './mtlist/task';
import { registerUser, UserTypes } from './mtlist/user';
import { load } from './simulatedReq/sagas';
import { ActionTypes } from './simulatedReq/types';

function* rootSaga(): any {
  return yield Eff.all([
    Eff.takeLatest(ActionTypes.LOAD_REQUEST, load),
    Eff.takeLatest(AuthTypes.LOGIN_REQUEST, mtlistLogin),
    Eff.takeLatest(UserTypes.REGISTER_REQUEST, registerUser),
    Eff.takeLatest(TaskTypes.REQUEST_ALL_TASKS, mtlistGetAllTasks),
    Eff.takeEvery(TaskTypes.CREATE_TASK, mtlistCreateTask),
    Eff.takeEvery(TaskTypes.UPDATE_TASK, mtlistUpdateTask),
    Eff.takeEvery(TaskTypes.DELETE_TASK, mtlistDeleteTask),
  ]);
}
export default rootSaga;
