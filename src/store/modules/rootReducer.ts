import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

import simulatedReq from './simulatedReq/reducers';

const persistConfig = {
  key: 'simulated-req',
  storage: localStorage,
  blacklist: ['none'],
};

const rootReducer = combineReducers({
  simulatedReq: persistReducer(persistConfig, simulatedReq),
});

export type RootReducerState = ReturnType<typeof rootReducer>;

export default rootReducer;
