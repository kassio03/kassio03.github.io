import { configureStore, Tuple } from '@reduxjs/toolkit';
import axios from 'axios';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

axios.interceptors.request.use(config => {
  if (!config.url?.includes('/task')) return config;

  const state = store.getState();
  const token = state.AuthReducer.token;
  config.headers['Content-Type'] = 'application/json';
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(sagaMiddleware),
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
