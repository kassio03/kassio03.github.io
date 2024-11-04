import { AnimatePresence } from 'framer-motion';
import { useCallback, useState } from 'react';

import MenuSvg from './assets/menu.svg?react';
import logo from './assets/mtlist-logo.png';
import MTListAbout from './pages/MTListAbout';
import MTListHome from './pages/MTListHome';
import MTListSignIn from './pages/MTListSignIn';
import MTListSignUp from './pages/MTListSignUp';

enum Pages {
  home = 'home',
  about = 'about',
  signIn = 'signIn',
  signUp = 'signUp',
  myList = 'myList',
}

const MTList = () => {
  const [currentPage, setCurrentPage] = useState(Pages.home);
  const [menuVisibility, setMenuVisibility] = useState(false);

  const handleChangePage = useCallback(
    (page: Pages) => {
      if (currentPage === page) return;
      setCurrentPage(page);
      setMenuVisibility(false);
    },
    [currentPage],
  );

  return (
    <div className="flex flex-col overflow-hidden rounded-[20px] bg-[#545454] px-6 pb-8 pt-3 text-justify text-sm leading-[17px]">
      <header className="flex items-center justify-between">
        <img
          src={logo}
          alt="Logo do MTList"
          className="cursor-pointer"
          onClick={() => {
            handleChangePage(Pages.home);
          }}
        />
        <button
          className="ml-auto block h-10 w-10 md:hidden min-[1024px]:block min-[1192px]:hidden"
          onClick={() => setMenuVisibility(pv => !pv)}
        >
          <MenuSvg className="h-full w-full" />
        </button>
        <nav
          className={`relative z-10 transition-opacity md:block ${menuVisibility ? 'opacity-100' : 'opacity-0 md:opacity-100 min-[1024px]:opacity-0 min-[1192px]:opacity-100'}`}
        >
          <ul className="absolute right-0 top-5 flex w-40 flex-col items-center gap-6 rounded-[10px] bg-solidTertiary py-3 font-bold md:static md:w-auto md:flex-row md:bg-transparent min-[1024px]:absolute min-[1024px]:w-40 min-[1024px]:flex-col min-[1024px]:bg-solidTertiary min-[1192px]:static min-[1192px]:w-auto min-[1192px]:flex-row min-[1192px]:bg-transparent">
            <li
              className={`cursor-pointer ${currentPage === Pages.home ? 'text-[#FFB573]' : 'text-white'} `}
              onClick={() => handleChangePage(Pages.home)}
            >
              Início
            </li>
            <li
              className={`cursor-pointer ${currentPage === Pages.about ? 'text-[#FFB573]' : 'text-white'}`}
              onClick={() => handleChangePage(Pages.about)}
            >
              Sobre
            </li>
            <li
              className={`cursor-pointer ${currentPage === Pages.signIn ? 'text-[#FFB573]' : 'text-white'}`}
              onClick={() => handleChangePage(Pages.signIn)}
            >
              Iniciar sessão
            </li>
            <li
              className={`cursor-pointer ${currentPage === Pages.signUp ? 'text-[#FFB573]' : 'text-white'}`}
              onClick={() => handleChangePage(Pages.signUp)}
            >
              Criar uma conta
            </li>
          </ul>
        </nav>
      </header>
      <section className="mt-auto">
        <AnimatePresence mode="wait">
          {currentPage === Pages.home && <MTListHome key={'home'} />}
          {currentPage === Pages.about && <MTListAbout key={'about'} />}
          {currentPage === Pages.signIn && <MTListSignIn key={'signIn'} />}
          {currentPage === Pages.signUp && <MTListSignUp key={'signUp'} />}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default MTList;
