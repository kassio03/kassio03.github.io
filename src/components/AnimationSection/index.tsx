import { AnimatePresence, motion } from 'framer-motion';
import { ButtonHTMLAttributes, useCallback, useState } from 'react';

import AnimationIcon from '../../assets/svg/animation.svg?react';
import CardBackface from '../../assets/svg/card-backface.svg?react';
import KingOfClubs from '../../assets/svg/clubs-king.svg?react';
import KingOfDiamonds from '../../assets/svg/diamonds-king.svg?react';
import KingOfHearts from '../../assets/svg/hearts-king.svg?react';
import KingOfSpades from '../../assets/svg/spades-king.svg?react';
import Icon from '../Icon';

const hiddenMask = `radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%)`;
const visibleMask = `radial-gradient(circle, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%)`;
const cardsIcons = [{ icon: 'K♥️' }, { icon: 'K♣️' }, { icon: 'K♦️' }, { icon: 'K♠️' }];

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...rest }: ButtonProps) => {
  const [animateJustOnce, setAnimateJustOnce] = useState(false);

  return (
    <>
      <motion.button
        initial={{
          backgroundColor: '#545454',
          color: '#fff',
        }}
        animate={[animateJustOnce ? 'alreadyDone' : 'notYet']}
        variants={{
          notYet: {
            backgroundColor: ['#545454', '#fff', '#545454'],
            color: ['#fff', '#333', '#fff'],
            transition: { duration: 0.5, delay: 1.1 },
          },
          alreadyDone: {
            backgroundColor: '#545454',
            transition: { duration: 0.5, delay: 0 },
          },
        }}
        whileHover={{
          backgroundColor: 'hsl(var(--color-solid-seasons))',
          y: -5,
          boxShadow: '0px 2px 5px #1D1D1D',
          textShadow: '0px 2px 5px #1D1D1D',
          letterSpacing: '1px',
        }}
        onHoverStart={() => setAnimateJustOnce(true)}
        onClick={rest.onClick}
        className="my-5 h-12 w-full max-w-[320px] rounded-xl font-bold"
      >
        {children}
      </motion.button>
    </>
  );
};

const AnimationSection = () => {
  const [kingOfSpadesAnimationStart, setKingOfSpadesAnimationStart] = useState(false);
  const [kingOfHeartsAnimationStart, setKingOfHeartsAnimationStart] = useState(false);
  const [kingOfClubsAnimationStart, setKingOfClubsAnimationStart] = useState(false);
  const [kingOfDiamondsAnimationStart, setKingOfDiamondsAnimationStart] = useState(false);
  const [selectedTab, setSelectedTab] = useState(cardsIcons[0]);

  const toggleAnimation = useCallback((setKingAnimationStart: any) => {
    setKingAnimationStart((previousValue: boolean) => !previousValue);
  }, []);

  const resetAllAnimations = useCallback(() => {
    setKingOfSpadesAnimationStart(false);
    setKingOfHeartsAnimationStart(false);
    setKingOfClubsAnimationStart(false);
    setKingOfDiamondsAnimationStart(false);
  }, []);

  return (
    <section className="w-full rounded-[28px] bg-solidPrimary/90 p-8 lg:px-12">
      <header>
        <div className="mb-3 flex items-center min-[425px]:mb-0">
          <Icon
            className="h-7 w-7 !cursor-default fill-solidTextPrimary stroke-0"
            Svg={AnimationIcon}
          />
          <h2 id="animation" className="ml-3 text-4xl">
            Animações
          </h2>
        </div>
      </header>
      <div className="mt-6">
        <p>
          Cada uma das quatro cartas abaixo, representando os reis dos diferentes naipes do baralho,
          traz duas animações únicas: uma ao ser revelada e outra executava ao clicar no botão logo
          abaixo da carta.
        </p>
        <p className="mt-3">
          <i>Dica: Experimente mudar o tema de estação no menu a esquerda.</i>
        </p>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center">
        <nav className="mx-auto w-full max-w-[400px] overflow-hidden rounded-t-3xl bg-solidSecondary">
          <ul className="flex w-full justify-between">
            {cardsIcons.map(card => (
              <li
                key={card.icon}
                className="w-full cursor-pointer text-3xl odd:text-red-600 even:text-black"
                onClick={() => {
                  setSelectedTab(card);
                  resetAllAnimations();
                }}
              >
                <span className={`block px-1 py-2 text-center`}>{card.icon}</span>
                {card.icon === selectedTab.icon ? (
                  <motion.div className="h-[5px] bg-solidSeason" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <AnimatePresence mode="wait">
          <motion.div className="flex w-full max-w-[400px] flex-col items-center justify-center rounded-b-3xl bg-solidTertiary px-3">
            {selectedTab.icon === 'K♠️' && (
              <>
                <motion.div
                  className="mt-5 w-full max-w-80"
                  initial={{ scaleY: 0, rotateX: 45, rotateY: 90 }}
                  whileInView={{ scaleY: 1, rotateY: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  animate={[kingOfSpadesAnimationStart ? 'hide' : 'show']}
                  variants={{
                    hide: {
                      rotate: 180,
                      opacity: 0,
                      scale: 0,
                    },
                    show: {
                      rotate: 0,
                      opacity: 1,
                      scale: 1,
                    },
                  }}
                  transition={{ duration: 0.8, ease: 'backInOut' }}
                >
                  <KingOfSpades />
                </motion.div>
                <Button onClick={() => toggleAnimation(setKingOfSpadesAnimationStart)}>
                  {kingOfSpadesAnimationStart ? 'Exibir' : 'Ocultar'} Rei de Espadas
                </Button>
              </>
            )}
            {selectedTab.icon === 'K♥️' && (
              <>
                <motion.div
                  className={`relative mt-5 w-full max-w-80 duration-500 ease-out transform-style-3d ${kingOfHeartsAnimationStart ? 'transform rotate-y-180' : ''}`}
                  initial={{ opacity: 0, scaleY: 0.5, rotateX: 80, rotateY: -80 }}
                  whileInView={{ scaleY: 1, opacity: 1, rotateX: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute w-full backface-hidden">
                    <KingOfHearts />
                  </div>
                  <div className="absolute h-full transform rotate-y-180 backface-hidden">
                    <CardBackface className="h-full w-full" preserveAspectRatio="none" />
                  </div>
                  <div className="invisible">
                    <KingOfHearts />
                  </div>
                </motion.div>
                <Button onClick={() => toggleAnimation(setKingOfHeartsAnimationStart)}>
                  {kingOfHeartsAnimationStart ? 'Desvirar' : 'Virar'} Rei de Copas
                </Button>
              </>
            )}
            {selectedTab.icon === 'K♣️' && (
              <>
                <motion.div
                  className="mt-5 w-full max-w-80"
                  initial={{ opacity: 0, scaleX: 0, rotateX: 45, rotateY: 90 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  animate={[kingOfClubsAnimationStart ? 'decrease' : 'increase']}
                  variants={{
                    decrease: {
                      rotateY: 180,
                      rotateX: 180,
                      scale: [1, 0.5, 0.8, 0.3],
                    },
                    increase: {
                      rotateY: 0,
                      rotateX: 0,
                      scale: [0.3, 0.8, 0.5, 1],
                    },
                  }}
                  transition={{ duration: 1, ease: 'backOut' }}
                >
                  <KingOfClubs />
                </motion.div>
                <Button onClick={() => toggleAnimation(setKingOfClubsAnimationStart)}>
                  {kingOfClubsAnimationStart ? 'Ampliar' : 'Reduzir'} Rei de Paus
                </Button>
              </>
            )}
            {selectedTab.icon === 'K♦️' && (
              <>
                <motion.div
                  className="mt-5 w-full max-w-80"
                  initial={{
                    scaleY: 0,
                    rotateX: 135,
                  }}
                  whileInView={{ scaleY: 1, rotateX: 0 }}
                  animate={
                    !kingOfDiamondsAnimationStart
                      ? { WebkitMaskImage: visibleMask, maskImage: visibleMask, rotateY: 0 }
                      : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask, rotateY: 135 }
                  }
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <KingOfDiamonds />
                </motion.div>
                <Button onClick={() => toggleAnimation(setKingOfDiamondsAnimationStart)}>
                  {kingOfDiamondsAnimationStart ? 'Retomar' : 'Desaparecer'} Rei de Ouros
                </Button>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AnimationSection;
