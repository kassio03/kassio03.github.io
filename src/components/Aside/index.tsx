import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Autumn from '../../assets/svg/autumn.svg?react';
import Close from '../../assets/svg/close.svg?react';
import Resources from '../../assets/svg/correct-resources.svg?react';
import DarkTheme from '../../assets/svg/darkTheme.svg?react';
import LightTheme from '../../assets/svg/lightTheme.svg?react';
import Lines from '../../assets/svg/lines.svg?react';
import Logo from '../../assets/svg/logo.svg?react';
import Person from '../../assets/svg/person.svg?react';
import Spring from '../../assets/svg/spring.svg?react';
import Summer from '../../assets/svg/summer.svg?react';
import Winter from '../../assets/svg/winter.svg?react';
import { handleChangeSeasonTheme, SeasonTheme } from '../../theme/handleChangeSeasonTheme';
import { handleToggleMainTheme } from '../../theme/handleToggleMainTheme';
import Icon from '../Icon';
interface AsideProps {
  asideMustAppear: boolean;
  toggleAside: () => void;
}

const allIdsToObserver = {
  onHome: [
    { id: 'summary', label: 'Resumo' },
    { id: 'experience', label: 'Experiência' },
  ],
  onFunctionalities: [
    { id: 'animation', label: 'Animações' },
    { id: 'language', label: 'Idiomas' },
    { id: 'form', label: 'Formulários' },
    { id: 'database', label: 'Banco de Dados' },
    { id: 'graphics', label: 'Gráficos' },
    { id: 'table', label: 'Tabelas' },
    { id: 'other', label: 'Outro' },
  ],
};

const Aside = ({ asideMustAppear, toggleAside }: AsideProps) => {
  const [themeIcon, setThemeIcon] = useState('dark');
  const [highlightedSeason, setHighlightedSeason] = useState('');
  const [currentItemOnScreen, setCurrentItemOnScreen] = useState('');

  const currentDate = useRef(
    new Date(Date.now()).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
  );

  const toggleTheme = useCallback(() => {
    handleToggleMainTheme();
    setThemeIcon(previousTheme => (previousTheme === 'dark' ? 'light' : 'dark'));
  }, []);
  const changeSeasonTheme = useCallback((season: SeasonTheme) => {
    handleChangeSeasonTheme(season);
    setHighlightedSeason(season);
  }, []);

  const location = useLocation().pathname;

  useEffect(() => {
    const elements = allIdsToObserver.onHome
      .concat(allIdsToObserver.onFunctionalities)
      .reduce((acum: HTMLElement[], item) => {
        const element = document.getElementById(item.id);
        if (element) acum.push(element);
        return acum;
      }, []);

    const visibleItems: any = {};
    const observer = new IntersectionObserver(items => {
      items.forEach(item => {
        visibleItems[item.target.id] = item.isIntersecting;
      });
      for (const key in visibleItems) {
        if (visibleItems[key]) {
          setCurrentItemOnScreen(key);
          break;
        }
      }
    });

    elements.forEach(item => {
      observer.observe(item);
    });

    return () => {
      elements.forEach(item => {
        observer.unobserve(item);
      });
    };
  });

  return (
    <div
      className={`fixed top-0 z-[9999] h-screen w-full flex-shrink-0 flex-col items-center bg-solidPrimary/95 md:bg-solidPrimary/90 lg:sticky lg:max-w-[360px] ${asideMustAppear ? 'hidden lg:flex' : 'flex'}`}
    >
      <div className="flex w-full px-3 pt-2">
        <Icon Svg={Close} className="lg:invisible" onClick={toggleAside} />
        <Icon
          Svg={themeIcon === 'dark' ? DarkTheme : LightTheme}
          //Todo: Cor de fundo deste icone não possui outra cor no design original, solução improvisada.
          className={`ml-auto ${themeIcon === 'dark' ? 'bg-slate-200' : 'bg-stone-300'}`}
          onClick={toggleTheme}
        />
      </div>
      <div className="h-[223px] w-[220px] [@media(max-height:480px)]:hidden">
        <div className="mx-auto flex h-[74px] w-[180px] justify-between">
          <Lines className="rotate-0 self-end" />
          <Icon
            Svg={Winter}
            className="bg-winter"
            highlighted={highlightedSeason === SeasonTheme.winter}
            onClick={() => changeSeasonTheme(SeasonTheme.winter)}
          />
          <Lines className="rotate-90 self-end" />
        </div>
        <div className="relative my-[17px] flex h-[40px] w-[220px] justify-between">
          <Icon
            Svg={Autumn}
            className="bg-autumn"
            highlighted={highlightedSeason === SeasonTheme.autumn}
            onClick={() => changeSeasonTheme(SeasonTheme.autumn)}
          />
          <Logo
            className="fill-solidTextPrimary"
            onClick={() => changeSeasonTheme(SeasonTheme.default)}
          />
          <Icon
            Svg={Spring}
            className="bg-spring"
            highlighted={highlightedSeason === SeasonTheme.spring}
            onClick={() => changeSeasonTheme(SeasonTheme.spring)}
          />
        </div>
        <div className="mx-auto flex h-[74px] w-[180px] justify-between">
          <Lines className="-rotate-90" />
          <Icon
            Svg={Summer}
            className="bg-summer self-end"
            highlighted={highlightedSeason === SeasonTheme.summer}
            onClick={() => changeSeasonTheme(SeasonTheme.summer)}
          />
          <Lines className="rotate-180" />
        </div>
      </div>
      <nav className="overflow-y-auto">
        <Link to={'/home'} className="mx-4 mt-11 flex items-center">
          <Icon Svg={Person} className="mx-2 h-6 w-6" />
          <span className="text-lg">RESUMO PROFISSIONAL</span>
        </Link>
        <ul
          className={`${location !== '/functionalities' ? 'block' : 'hidden'} ml-14 flex flex-col`}
        >
          {allIdsToObserver.onHome.map(item => {
            return (
              <li key={item.id}>
                <HashLink
                  className={`${currentItemOnScreen === item.id ? 'text-solidSeason' : null}`}
                  to={`#${item.id}`}
                  smooth
                >
                  {item.label}
                </HashLink>
              </li>
            );
          })}
        </ul>
        <Link to={'/functionalities'} className="mx-4 mt-8 flex items-center">
          <Icon Svg={Resources} className="m-2 h-6 w-6" />
          <span className="text-lg">RECURSOS PARA TESTAR</span>
        </Link>
        <ul
          className={`${location === '/functionalities' ? 'block' : 'hidden'} ml-14 flex flex-col`}
        >
          {allIdsToObserver.onFunctionalities.map(item => {
            return (
              <li key={item.id}>
                <HashLink
                  className={`${currentItemOnScreen === item.id ? 'text-solidSeason' : null}`}
                  to={`#${item.id}`}
                  smooth
                >
                  {item.label}
                </HashLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <p className="mb-[20px] mt-auto w-[185px] text-center text-sm">
        São Paulo
        <br /> {currentDate.current}
      </p>
    </div>
  );
};

export default Aside;
