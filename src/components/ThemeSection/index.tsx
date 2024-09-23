import ThemeIcon from '../../assets/svg/theme.svg?react';
import { useTheme } from '../../context/ThemeContext';
import { Theme } from '../../theme/handleChangeMainTheme';
import { SeasonTheme } from '../../theme/handleChangeSeasonTheme';
import Icon from '../Icon';
import PureCssSeasonsBackground from '../PureCssSeasonsBackground';
import Select from '../Select';

const ThemeSection = () => {
  const { setMainTheme, setSeasonTheme } = useTheme();
  return (
    <section className="relative w-full rounded-[28px] bg-solidPrimary/90 p-8 lg:px-12">
      <header className="relative z-10 flex flex-wrap items-center justify-center gap-3 text-sm min-[425px]:justify-between">
        <div className="flex flex-grow-[10] items-center">
          <Icon className="f h-7 w-7 !cursor-default stroke-0" Svg={ThemeIcon} />
          <h2 className="ml-3 text-4xl">Tematização</h2>
        </div>
        <div className="bg-red flex flex-grow flex-wrap justify-center gap-6">
          <Select
            id="mainThemes"
            width="160px"
            placeholder="Tema principal"
            options={['Claro', 'Escuro']}
            values={[Theme.light, Theme.dark]}
            handleClick={(value: Theme) => {
              setMainTheme(value);
            }}
          />
          <Select
            id="seasonThemes"
            width="160px"
            placeholder="Tema de estação"
            options={['Primavera', 'Verão', 'Outono', 'Inverno']}
            values={[
              SeasonTheme.spring,
              SeasonTheme.summer,
              SeasonTheme.autumn,
              SeasonTheme.winter,
            ]}
            handleClick={(value: SeasonTheme) => {
              setSeasonTheme(value);
            }}
          />
        </div>
      </header>
      <p className="my-6 text-justify">
        Você também pode alterar o tema rapidamente clicando nos icones no menu a esquerda.
      </p>

      <div className="flex flex-col items-center justify-center">
        <PureCssSeasonsBackground scale={'scale-100'} />
      </div>
    </section>
  );
};

export default ThemeSection;
