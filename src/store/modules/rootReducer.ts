import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

import AuthReducer from './mtlist/auth';
import TaskReducer from './mtlist/task';
import UserReducer from './mtlist/user';
import simulatedReq from './simulatedReq/reducers';

const persistConfig = {
  key: 'everything',
  storage: localStorage,
  blacklist: ['none'],
};

const rootReducer = combineReducers({
  simulatedReq: persistReducer({ ...persistConfig, key: 'simulated-req' }, simulatedReq),
  AuthReducer: persistReducer({ ...persistConfig, key: 'auth' }, AuthReducer),
  UserReducer: UserReducer,
  TaskReducer: persistReducer({ ...persistConfig, key: 'task' }, TaskReducer),
});

export type RootReducerState = ReturnType<typeof rootReducer>;

export default rootReducer;
