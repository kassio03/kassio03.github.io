import { configureStore, Tuple } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(sagaMiddleware),
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
