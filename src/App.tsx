import { Outlet } from 'react-router-dom';

import Aside from './components/Aside';

const App = () => {
  return (
    <main className="flex h-full text-solidTextPrimary">
      <Aside />
      <Outlet />
    </main>
  );
};

export default App;
