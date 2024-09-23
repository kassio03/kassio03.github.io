import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

import Spinner from '../../assets/svg/spinner.svg?react';
import AnimationSection from '../../components/AnimationSection';
import GraphicsSection from '../../components/GraphicsSection';
import LanguageSection from '../../components/LanguageSection';
import TableSection from '../../components/TableSection';
import ThemeSection from '../../components/ThemeSection';

const Functionalities = () => {
  const [loading, setLoading] = useState(true);
  const changeLoading = useCallback(() => {
    setLoading(false);
  }, []);
  useEffect(() => {
    setTimeout(changeLoading, 500);
  }, [changeLoading]);
  return (
    <>
      <motion.div
        className="fixed right-0 z-50 flex items-center justify-center overflow-hidden bg-solidSeason lg:max-w-[calc(100%-360px)]"
        initial={{ scale: 1, height: '100dvh', width: '100%', borderRadius: 0 }}
        animate={loading ? 'loading' : 'loaded'}
        variants={{
          loading: {},
          loaded: {
            top: '50%',
            rotate: 0,
            height: 0,
            transition: { duration: 1, ease: 'easeInOut' },
          },
        }}
      >
        <Spinner />
      </motion.div>
      <div className="z-10 mx-auto flex w-full max-w-[1074px] flex-col gap-12 p-5 sm:p-8 lg:p-14">
        <ThemeSection />
        <AnimationSection />
        <LanguageSection />
        <TableSection />
        <GraphicsSection />
      </div>
    </>
  );
};

export default Functionalities;
