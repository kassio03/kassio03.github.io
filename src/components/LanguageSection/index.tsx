import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import bible from '../../assets/img/bible.jpg';
import isaacNewton from '../../assets/img/isaac-newton.png';
import nikolaTesla from '../../assets/img/nikola-tesla.jpg';
import ArrowDown from '../../assets/svg/arrow-down.svg?react';
import FlagBrazil from '../../assets/svg/flagBrazil.svg?react';
import FlagFrance from '../../assets/svg/flagFrance.svg?react';
import FlagGermany from '../../assets/svg/flagGermany.svg?react';
import FlagItaly from '../../assets/svg/flagItaly.svg?react';
import FlagSpain from '../../assets/svg/flagSpain.svg?react';
import FlagUnited from '../../assets/svg/flagUnited.svg?react';
import Language from '../../assets/svg/language.svg?react';
import i18n from '../../translations/config';
import Icon from '../Icon';
import Quote from '../Quote';

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const languages = [
  { language: 'portuguese', icon: FlagBrazil, text: 'Português' },
  { language: 'english', icon: FlagUnited, text: 'English' },

  { language: 'german', icon: FlagGermany, text: 'Deutsch' },
  { language: 'spanish', icon: FlagSpain, text: 'Español' },
  { language: 'french', icon: FlagFrance, text: 'Français' },
  { language: 'italian', icon: FlagItaly, text: 'Italiano' },
];

const handleChangeLanguage = (newLanguage: string) => {
  i18n.changeLanguage(newLanguage);
};

const LanguageSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [t] = useTranslation('global');

  return (
    <section className="w-full rounded-[28px] bg-solidPrimary/90 p-8 lg:px-12">
      <header className="flex flex-wrap items-center justify-center min-[425px]:justify-between">
        <div className="mb-3 flex items-center min-[425px]:mb-0">
          <Icon className="h-7 w-7 cursor-default fill-solidTextPrimary stroke-0" Svg={Language} />
          <h2 className="ml-3 text-4xl">{t('title')}</h2>
        </div>
        <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
          <motion.button
            className="flex w-40 items-center rounded-[20px] bg-solidSecondary"
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon
              className="mx-3 h-[18px] w-[25px] overflow-hidden rounded-[2px]"
              Svg={currentLanguage.icon}
            />
            <span className="text-sm">{currentLanguage.text}</span>
            <motion.div
              className="ml-auto"
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              <Icon Svg={ArrowDown} />
            </motion.div>
          </motion.button>
          <motion.ul
            className="absolute w-[140px] bg-solidSecondary py-2"
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
            <motion.li
              className="mx-3 h-5 rounded-[15px] border-2 border-solid border-sky-500/80 text-center text-[0.65rem] text-sky-500/80"
              variants={itemVariants}
            >
              Verificado
            </motion.li>
            {languages.slice(0, 2).map(lang => {
              return (
                <motion.li
                  className="mt-1 flex h-[32px] cursor-pointer items-center px-3 hover:bg-solidTertiary"
                  variants={itemVariants}
                  key={lang.text}
                  onClick={() => {
                    setCurrentLanguage(lang);
                    setIsOpen(false);
                    handleChangeLanguage(lang.language);
                  }}
                >
                  <Icon className="w-[25px] overflow-hidden rounded-[2px]" Svg={lang.icon} />
                  <span className="ml-3">{lang.text}</span>
                </motion.li>
              );
            })}
            <hr className="mx-3 mt-3 border-solidTertiary" />
            <motion.li
              className="mx-3 mt-2 h-5 rounded-[15px] border-2 border-solid border-orange-300/80 text-center text-[0.65rem] text-orange-300/80"
              variants={itemVariants}
            >
              Tradução Automática
            </motion.li>
            {languages.slice(2, 6).map(lang => {
              return (
                <motion.li
                  className="mt-1 flex h-[32px] cursor-pointer items-center px-3 hover:bg-solidTertiary"
                  variants={itemVariants}
                  key={lang.text}
                  onClick={() => {
                    setCurrentLanguage(lang);
                    setIsOpen(false);
                    handleChangeLanguage(lang.language);
                  }}
                >
                  <Icon className="w-[25px] overflow-hidden rounded-[2px]" Svg={lang.icon} />
                  <span className="ml-3">{lang.text}</span>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.nav>
      </header>
      <p className="mt-6 w-fit">{t('paragraph')}</p>
      <h3 className="mt-10 text-center text-2xl font-semibold italic">Isaac Newton</h3>
      <div className="my-4 mt-3 flex flex-col flex-wrap items-center justify-between gap-3 md:flex-row">
        <div className="mx-auto w-full max-w-[538px] shrink grow basis-[250px]">
          <img
            className="mx-auto mb-4 h-[400px] rounded-[40px] object-cover object-[20%_0%] md:mb-0 md:h-[550px]"
            src={isaacNewton}
            alt="Image of Isaac Newton"
          />
        </div>
        <div className="mx-auto flex min-h-[550px] w-full max-w-[280px] flex-col justify-between text-sm font-semibold italic">
          <Quote text={t('isaacNewton.first')} />
          <Quote text={t('isaacNewton.second')} />
          <Quote text={t('isaacNewton.third')} />
          <Quote text={t('isaacNewton.fourth')} />
          <Quote text={t('isaacNewton.fifth')} />
        </div>
      </div>
      <h3 className="mt-12 text-center text-2xl font-semibold italic">Nikola Tesla</h3>
      <div className="my-4 mt-3 flex flex-col-reverse flex-wrap items-center justify-between gap-3 md:flex-row lg:flex-col-reverse min-[1110px]:flex-row">
        <div className="mx-auto flex min-h-[550px] w-full max-w-[280px] flex-col justify-between text-sm font-semibold italic">
          <Quote text={t('nikolaTesla.first')} />
          <Quote text={t('nikolaTesla.second')} />
          <Quote text={t('nikolaTesla.third')} />
          <Quote text={t('nikolaTesla.fourth')} />
          <Quote text={t('nikolaTesla.fifth')} />
        </div>
        <div className="mx-auto w-full max-w-[538px] shrink grow basis-[250px]">
          <img
            className="mx-auto mb-4 h-[400px] rounded-[40px] object-cover object-[80%_0%] md:mb-0 md:h-[550px]"
            src={nikolaTesla}
            alt="Image of Isaac Newton"
          />
        </div>
      </div>
      <h3 className="mt-12 text-center text-2xl font-semibold italic">Sagradas Escrituras</h3>
      <div className="my-4 mt-3 flex flex-col flex-wrap items-center justify-between gap-3 md:flex-row">
        <div className="mx-auto w-full max-w-[538px] shrink grow basis-[250px]">
          <img
            className="mx-auto mb-4 h-[400px] rounded-[40px] object-cover object-[60%_0%] md:mb-0 md:h-[550px]"
            src={bible}
            alt="Image of Isaac Newton"
          />
        </div>
        <div className="mx-auto flex min-h-[550px] w-full max-w-[280px] flex-col justify-between text-sm font-semibold italic">
          <Quote text={t('isaacNewton.first')} />
          <Quote text={t('isaacNewton.second')} />
          <Quote text={t('isaacNewton.third')} />
          <Quote text={t('isaacNewton.fourth')} />
          <Quote text={t('isaacNewton.fifth')} />
        </div>
      </div>
    </section>
  );
};

export default LanguageSection;
