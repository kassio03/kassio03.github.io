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
    <section className="w-full rounded-[28px] bg-solidPrimary/90 p-8 lg:px-12">
      <header className="z-10 flex flex-wrap items-center justify-center gap-3 text-sm min-[425px]:justify-between">
        <div className="flex flex-grow-[10] items-center">
          <Icon className="f h-7 w-7 !cursor-default stroke-0" Svg={ThemeIcon} />
          <h2 id="themes" className="ml-3 text-4xl">
            Tematização
          </h2>
        </div>
        <div className="bg-red flex flex-grow flex-wrap justify-center gap-6">
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
        </div>
      </header>

      <div className="my-6">
        <p>
          Aqui você pode escolher entre dois tipos de temas: principal e os temas de estações, que
          funcionam de forma integrada. Por exemplo, você pode selecionar o tema de outono enquanto
          mantém o tema principal como escuro.
        </p>
        <p className="my-3">
          Se estiver se perguntando sobre o desenho abaixo, experimente trocar o tema de estação.
        </p>
        <p>
          <i>
            Dica: você pode alterar os temas rapidamente clicando nos ícones no menu à esquerda.
          </i>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <PureCssSeasonsBackground scale={'scale-100'} />
      </div>
    </section>
  );
};

export default ThemeSection;
