import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';

import AutumnBackground from './assets/img/background-autumn.jpg';
import SpringBackground from './assets/img/background-spring.jpg';
import SummerBackground from './assets/img/background-summer.jpg';
import WinterBackground from './assets/img/background-winter.jpg';
import ActiveVisibility from './assets/svg/active-visibility.svg?react';
import CheckboxIcon from './assets/svg/checkbox.svg?react';
import HamburgerMenu from './assets/svg/hamburger-menu.svg?react';
import Aside from './components/Aside';
import CookieConsent from './components/CookiesConsent';
import Icon from './components/Icon';
import { useTheme } from './context/ThemeContext';
import { SeasonTheme } from './theme/handleChangeSeasonTheme';
import { disableScroll, enableScroll } from './utils/scrollManagement';

const App = () => {
  const [asideMustAppear, setAsideMustAppear] = useState(true);
  const [openedConfig, setOpenedConfig] = useState(false);
  const [hideUserInterface, setHideUserInterface] = useState(false);
  const { currentTheme } = useTheme();

  const toggleAside = useCallback(() => {
    setAsideMustAppear(previousState => !previousState);
  }, []);
  return (
    <main className={`font-inter flex h-full text-solidTextPrimary`}>
      <CookieConsent />
      <Aside asideMustAppear={asideMustAppear} toggleAside={toggleAside} />
      {asideMustAppear && (
        <Icon
          Svg={HamburgerMenu}
          onClick={toggleAside}
          className="fixed z-10 m-5 h-11 w-11 lg:hidden"
        />
      )}
      <div className="fixed right-0 z-20 m-5 flex flex-col">
        <button
          className="ml-auto w-fit rounded-full bg-solidSecondary p-2"
          onClick={() => setOpenedConfig(pv => !pv)}
        >
          <Icon Svg={ActiveVisibility} className="h-7 w-7" />
        </button>
        <motion.div
          className="mt-3 w-full max-w-80 overflow-hidden rounded-3xl bg-solidSecondary"
          animate={openedConfig ? 'open' : 'closed'}
          transition={{ duration: 0.2 }}
          variants={{
            open: {
              height: '150px',
            },
            closed: {
              height: '0px',
            },
          }}
        >
          <div className="flex flex-col gap-5 py-3">
            <div>
              <p className="px-5 text-center text-xs text-solidTextPrimary/70">
                Ative para ver melhor o plano de fundo.
              </p>
              {currentTheme.seasonTheme === SeasonTheme.default && (
                <p className="px-5 text-center text-xs text-yellow-300/70">
                  Não há um plano de fundo ativo no momento.
                </p>
              )}
              <div
                className="mt-1 flex h-10 cursor-pointer items-center gap-3 bg-solidTertiary pl-5"
                onClick={() => {
                  setHideUserInterface(!hideUserInterface);
                  if (!hideUserInterface) {
                    disableScroll();
                  } else {
                    enableScroll();
                  }
                  setOpenedConfig(false);
                }}
              >
                <div className={`h-7 w-7`}>
                  <CheckboxIcon
                    className={`rounded-lg p-[2px] ${hideUserInterface ? 'bg-blue-500 stroke-white' : 'stroke-solidTextPrimary/30'}`}
                  />
                </div>
                <p>Ocultar seções</p>
              </div>
            </div>
            <div className="hidden">
              <p className="px-5 text-center text-xs text-solidTextPrimary/70">
                {/* O nome é apenas um trocadilho. */}
                <br />
                {/* Ativar isso habilita informações técnicas relevantes apenas para outros
                desenvolvedores. */}
                <br />
                <span className="text-yellow-400">em desenvolvimento!</span>
                {/* To pensando em algo que servirá de guia para quem deseja criar seu portfolio descrevendo o pq fiz o q fiz */}
              </p>
              <div
                className="h-ful flex h-10 cursor-pointer items-center gap-3 bg-solidTertiary pl-5"
                onClick={() => {}}
              >
                <div className={`h-7 w-7`}>
                  <CheckboxIcon
                    // eslint-disable-next-line no-constant-condition
                    className={`rounded-lg p-[2px] ${false ? 'bg-blue-500 stroke-white' : 'stroke-solidTextPrimary/30'}`}
                  />
                </div>
                <p>Em breve</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div
        className={`w-full transition-opacity duration-500 ${hideUserInterface ? 'pointer-events-none opacity-0' : 'opacity-100'} `}
      >
        <Outlet />
      </div>
      <div className="fixed -z-10 flex w-full items-center justify-center">
        <img
          src={AutumnBackground}
          className={`absolute top-0 h-screen w-screen object-cover object-[88%_50%] transition-opacity duration-[300ms] sm:object-right ${currentTheme.seasonTheme === SeasonTheme.autumn ? 'opacity-1' : 'opacity-0'}`}
        />
        <img
          src={WinterBackground}
          className={`absolute top-0 h-screen w-screen object-cover transition-opacity duration-[300ms] ${currentTheme.seasonTheme === SeasonTheme.winter ? 'opacity-1' : 'opacity-0'}`}
        />
        <img
          src={SpringBackground}
          className={`absolute top-0 h-screen w-screen object-cover object-right transition-opacity duration-[300ms] ${currentTheme.seasonTheme === SeasonTheme.spring ? 'opacity-1' : 'opacity-0'}`}
        />
        <img
          src={SummerBackground}
          className={`absolute top-0 h-screen w-screen object-cover object-right transition-opacity duration-[300ms] ${currentTheme.seasonTheme === SeasonTheme.summer ? 'opacity-1' : 'opacity-0'}`}
        />
      </div>
    </main>
  );
};

export default App;
