import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

import AuthReducer from './mtlist/auth';
import simulatedReq from './simulatedReq/reducers';

const persistConfig = {
  key: 'everything',
  storage: localStorage,
  blacklist: ['none'],
};

const rootReducer = combineReducers({
  simulatedReq: persistReducer({ ...persistConfig, key: 'simulated-req' }, simulatedReq),
  AuthReducer: persistReducer({ ...persistConfig, key: 'auth' }, AuthReducer),
});

export type RootReducerState = ReturnType<typeof rootReducer>;

export default rootReducer;
