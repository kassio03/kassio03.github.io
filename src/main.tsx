import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeContextProvider } from './context/ThemeContext';
import routesConfig from './routes';
import { persistor, store } from './store/configureStore';
import i18nConfig from './translations/config';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeContextProvider>
          <I18nextProvider i18n={i18nConfig}>
            <RouterProvider router={routesConfig} />
          </I18nextProvider>
        </ThemeContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
