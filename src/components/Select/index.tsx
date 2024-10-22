import { motion, Variants } from 'framer-motion';
import React, { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react';

import ArrowDown from '../../assets/svg/arrow-down.svg?react';
import Icon from '../Icon';

interface SelectProps {
  id: string;
  Svg?: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  placeholder: string;
  options: string[];
  values?: string[];
  mainValue?: string;
  handleClick: (option: any) => any;
  width?: string;
  height?: string;
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Select = ({
  id,
  Svg,
  placeholder,
  options,
  values = [],
  mainValue,
  handleClick,
  width,
  height,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState(placeholder);
  const selectRef = useRef<HTMLDivElement>(null); // useRef to reference the select
  const upd = useCallback(
    (value: string, opt: string) => {
      //? Não sei se vou manter o handleclick
      handleClick(value || opt);
      setCurrentOption(opt);
      setIsOpen(false);
    },
    [handleClick],
  );
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <motion.div ref={selectRef} initial={false} animate={isOpen ? 'open' : 'closed'}>
        <motion.button
          id={id}
          style={{ width, height }}
          className={`flex h-10 items-center rounded-[10px] ${currentOption === placeholder && !mainValue ? 'bg-solidSecondary' : 'bg-solidSeason text-white'}`}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="ml-3 text-sm">{mainValue || currentOption}</span>
          <motion.div
            className="ml-auto"
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <Icon className="h-[18px] w-[25px]" Svg={Svg || ArrowDown} />
          </motion.div>
        </motion.button>
        <motion.ul
          className="absolute z-10 w-fit bg-solidSecondary"
          variants={{
            open: {
              clipPath: 'inset(0% 0% 0% 0% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: 'inset(10% 50% 90% 50% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        >
          {options.map((opt, index) => {
            return (
              <motion.li
                style={{ width, height }}
                className="mt-1 flex h-8 cursor-pointer items-center px-3 hover:bg-solidSeason hover:text-white"
                variants={itemVariants}
                key={index}
                onClick={() => upd(values[index], opt)}
              >
                <span className="">{opt}</span>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </>
  );
};

export default Select;
