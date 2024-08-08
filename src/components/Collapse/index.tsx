import { FunctionComponent, useState } from 'react';

import ArrowDown from '../../assets/svg/arrow-down.svg?react';
import Icon from '../Icon';

interface CollapseProps extends React.HTMLAttributes<HTMLDivElement> {
  Svg: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
}

const Collapse = ({ Svg, title, children, ...rest }: CollapseProps) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="mt-3 w-full rounded-2xl bg-solidTertiary" {...rest}>
      <div
        className="flex h-[34px] cursor-pointer items-center rounded-2xl bg-solidSecondary hover:bg-solidSeason/30 md:h-[40px]"
        onClick={() => setOpened(!opened)}
      >
        <Icon Svg={Svg} className="m-2 mr-0 h-4 w-4" />
        <h3 className="ml-1 text-sm max-[375px]:text-xs md:ml-2">{title}</h3>
        <Icon Svg={ArrowDown} className="ml-auto" />
      </div>
      {opened && children}
    </div>
  );
};

export default Collapse;
