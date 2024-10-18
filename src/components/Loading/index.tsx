import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import Spinner from '../../assets/gif/spinner.gif';
const Loading = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return (
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
      <img src={Spinner} alt="" />
    </motion.div>
  );
};

export default Loading;
