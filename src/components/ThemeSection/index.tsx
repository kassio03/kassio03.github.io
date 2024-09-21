import Theme from '../../assets/svg/theme.svg?react';
import Icon from '../Icon';
import PureCssSeasonsBackground from '../PureCssSeasonsBackground';
import Select from '../Select';

const ThemeSection = () => {
  return (
    <section className="relative w-full rounded-[28px] bg-solidPrimary/90 p-8 lg:px-12">
      <header className="relative z-10 flex flex-wrap items-center justify-center text-sm min-[425px]:justify-between">
        <div className="mb-3 flex items-center min-[425px]:mb-0">
          <Icon className="h-7 w-7 !cursor-default stroke-0" Svg={Theme} />
          <h2 className="ml-3 text-4xl">Tematização</h2>
        </div>
        <Select
          id="a"
          width="160px"
          placeholder="Tema principal"
          options={['Claro', 'Escuro']}
          handleClick={opt => {
            opt;
          }}
        />
        <Select
          id="s"
          width="160px"
          placeholder="Tema de estação"
          options={['Primavera', 'Verão', 'Outono', 'Inverno']}
          handleClick={option => {
            option;
          }}
        />
      </header>
      <p className="my-6">
        Você também pode alterar o tema rapidamente clicando nos icones no menu a esquerda.
      </p>

      <div className="flex flex-col items-center justify-center">
        <PureCssSeasonsBackground scale={'scale-100'} />
      </div>
    </section>
  );
};

export default ThemeSection;
