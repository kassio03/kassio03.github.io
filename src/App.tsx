import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';

import HamburgerMenu from './assets/svg/hamburger-menu.svg?react';
import Aside from './components/Aside';
import Icon from './components/Icon';
import PureCssAutumnBackground from './components/PureCssAutumnBackground';
import PureCssWinterBackground from './components/PureCssWinterBackground';

const seasonsBackground: { [key: string]: JSX.Element } = {
  winter: <PureCssWinterBackground />,
  summer: <></>,
  autumn: <PureCssAutumnBackground />,
  spring: <></>,
  default: <></>,
};

const App = () => {
  const [asideMustAppear, setAsideMustAppear] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('default');
  const toggleAside = useCallback(() => {
    setAsideMustAppear(previousState => !previousState);
  }, []);

  return (
    <main className="font-inter flex h-full text-solidTextPrimary">
      <Aside
        asideMustAppear={asideMustAppear}
        toggleAside={toggleAside}
        changeBackgroundTheme={theme => setCurrentTheme(theme)}
      />
      {asideMustAppear && (
        <Icon
          Svg={HamburgerMenu}
          onClick={toggleAside}
          className="fixed z-20 m-5 h-11 w-11 lg:hidden"
        />
      )}
      <Outlet />
      <div className="pointer-events-none fixed h-full w-full">
        {seasonsBackground[currentTheme]}
      </div>
    </main>
  );
};

export default App;
