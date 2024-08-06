import { Outlet } from 'react-router-dom';

import Aside from './components/Aside';

const App = () => {
  return (
    <main className="flex h-full">
      <Aside />
      <Outlet />
    </main>
  );
};

export default App;
