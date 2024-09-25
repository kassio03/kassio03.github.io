import { motion } from 'framer-motion';
import { FunctionComponent, useState } from 'react';

import ArrowDown from '../../assets/svg/arrow-down.svg?react';
import Icon from '../Icon';

interface CollapseProps extends React.HTMLAttributes<HTMLDivElement> {
  Svg: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
}

const Collapse = ({ Svg, title, className, children }: CollapseProps) => {
  const [opened, setOpened] = useState(false);

  return (
    <motion.div
      className={`mt-3 w-full rounded-2xl bg-solidTertiary ${className} `}
      initial={false}
      animate={opened ? 'open' : 'closed'}
    >
      <motion.button
        className="flex h-[34px] w-full cursor-pointer items-center rounded-2xl bg-solidSecondary hover:bg-solidSeason/60 md:h-[40px]"
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setOpened(!opened);
        }}
      >
        <Icon Svg={Svg} className="m-2 mr-0 h-4 w-4" />
        <h3 className="ml-1 text-sm max-[375px]:text-xs md:ml-2">{title}</h3>
        <Icon Svg={ArrowDown} className="ml-auto" />
      </motion.button>
      <motion.div
        className="overflow-hidden"
        initial={{ height: '0px', scaleY: 0.1, scaleX: 0.8 }}
        variants={{
          open: {
            height: 'fit-content',
            transition: {
              type: 'spring',
              bounce: 0.3,
              duration: 0.5,
            },
            scaleY: 1,
            scaleX: 1,
          },
          closed: {
            height: '0px',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.5,
            },
            scaleY: 0.1,
            scaleX: 0.8,
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Collapse;
