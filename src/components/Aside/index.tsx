import { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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

const Aside = ({ asideMustAppear, toggleAside }: AsideProps) => {
  const [themeIcon, setThemeIcon] = useState('dark');
  const [highlightedSeason, setHighlightedSeason] = useState('');
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

  return (
    <div
      className={`fixed top-0 z-[9999] h-screen w-full flex-col items-center bg-solidPrimary/95 md:sticky md:max-w-[360px] md:bg-solidPrimary/90 ${asideMustAppear ? 'hidden lg:flex' : 'flex'}`}
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
      <div className="h-[223px] w-[220px]">
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
      <div>
        <Link to={'/home'} className="mt-11 flex items-center">
          <Icon Svg={Person} className="mx-2 h-6 w-6" />
          <span className="text-lg">RESUMO PROFISSIONAL</span>
        </Link>
        <Link to={'/functionalities'} className="mt-8 flex items-center">
          <Icon Svg={Resources} className="m-2 h-6 w-6" />
          <span className="text-lg">RECURSOS PARA TESTAR</span>
        </Link>
      </div>
      <p className="mb-[20px] mt-auto w-[185px] text-center text-sm">
        São Paulo
        <br /> {currentDate.current}
      </p>
    </div>
  );
};

export default Aside;
