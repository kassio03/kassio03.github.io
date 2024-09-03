import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';

import routesConfig from './routes';
import i18nConfig from './translations/config';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18nConfig}>
      <RouterProvider router={routesConfig} />
    </I18nextProvider>
  </React.StrictMode>,
);
