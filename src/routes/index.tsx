import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Functionalities from '../pages/Functionalities';
import Home from '../pages/Home';

const routes = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <Home />,
      },
      {
        path: '/functionalities',
        element: <Functionalities />,
      },
    ],
  },
]);

export default routes;
