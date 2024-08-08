import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';

import HamburgerMenu from './assets/svg/hamburger-menu.svg?react';
import Aside from './components/Aside';
import Icon from './components/Icon';

const App = () => {
  const [asideMustAppear, setAsideMustAppear] = useState(true);

  const toggleAside = useCallback(() => {
    setAsideMustAppear(previousState => !previousState);
  }, []);

  return (
    <main className="font-inter flex h-full text-solidTextPrimary">
      <Aside asideMustAppear={asideMustAppear} toggleAside={toggleAside} />
      {asideMustAppear && (
        <Icon Svg={HamburgerMenu} onClick={toggleAside} className="fixed m-5 h-11 w-11 lg:hidden" />
      )}
      <Outlet />
    </main>
  );
};

export default App;
