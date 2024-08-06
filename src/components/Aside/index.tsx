import { FunctionComponent, HTMLAttributes } from 'react';
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

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  Svg: FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
const Icon = ({ Svg, className, ...rest }: IconProps) => {
  return (
    <div
      className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full ${className}`}
      {...rest}
    >
      <Svg />
    </div>
  );
};

const Aside = () => {
  const currentDate = new Date(Date.now()).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="flex h-screen w-full max-w-[360px] flex-col items-center bg-slate-800">
      <div className="flex w-full px-3 pt-2">
        <Icon Svg={Close} className="md:invisible" />
        <Icon Svg={DarkTheme} className="ml-auto bg-slate-200" />
      </div>
      <div className="h-[223px] w-[220px] bg-slate-800">
        <div className="mx-auto flex h-[74px] w-[180px] justify-between">
          <Lines className="rotate-0 self-end" />
          <Icon Svg={Winter} className="bg-winter" />
          <Lines className="rotate-90 self-end" />
        </div>
        <div className="relative my-[17px] flex h-[40px] w-[220px] justify-between">
          <Icon Svg={Autumn} className="bg-autumn" />
          <Logo />
          <Icon Svg={Spring} className="bg-spring" />
        </div>
        <div className="mx-auto flex h-[74px] w-[180px] justify-between">
          <Lines className="-rotate-90" />
          <Icon Svg={Summer} className="bg-summer self-end" />
          <Lines className="rotate-180" />
        </div>
      </div>
      <div>
        <Link to={'/home'} className="mt-11 flex items-center">
          <Icon Svg={Person} className="mx-2 h-6 w-6" />
          <h3 className="text-slate-200">RESUMO PROFISSIONAL</h3>
        </Link>
        <Link to={'/functionalities'} className="mt-8 flex items-center">
          <Icon Svg={Resources} className="m-2 h-6 w-6" />
          <h3 className="text-slate-200">RECURSOS PARA TESTAR</h3>
        </Link>
      </div>
      <p className="mb-[20px] mt-auto w-[185px] text-center text-slate-200">
        São Paulo
        <br /> {currentDate}
      </p>
    </div>
  );
};

export default Aside;
