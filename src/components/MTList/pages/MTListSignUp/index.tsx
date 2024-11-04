import { motion } from 'framer-motion';

import EmailSvg from '../../assets/email.svg?react';
import LockSvg from '../../assets/lock.svg?react';
import NameSvg from '../../assets/name.svg?react';
import SignUpvg from '../../assets/sign-up.svg?react';
import MTListButton from '../../components/MTListButton';
import MTListCheckbox from '../../components/MTListCheckbox';
import MTListInput from '../../components/MTListInput';

const MTListSignUp = () => {
  return (
    <motion.div
      className="mt-8 flex"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.2 }}
    >
      <div className="hidden flex-grow basis-[200px] md:block min-[1024px]:hidden min-[1192px]:block">
        <SignUpvg className="max-h-[350px]" />
      </div>
      <div className="flex flex-shrink flex-grow items-center justify-center">
        <form className="w-full max-w-[352px]" action="">
          <MTListInput customClassContainer="mb-6" Svg={NameSvg} placeholder="Nome" type="text" />
          <MTListInput
            customClassContainer="mb-6"
            Svg={EmailSvg}
            placeholder="Email"
            type="email"
          />
          <MTListInput
            customClassContainer="mb-6"
            Svg={LockSvg}
            placeholder="Senha"
            type="password"
          />
          <MTListInput
            customClassContainer="mb-3"
            Svg={LockSvg}
            placeholder="Repetir senha"
            type="password"
          />
          <div className="mb-8 flex items-center">
            <MTListCheckbox id="terms" />
            <label className="cursor-pointer pl-2 font-bold" htmlFor="terms">
              Li e concordo com os{' '}
              <a
                className="cursor-pointer text-[#FFB573] underline underline-offset-4"
                onClick={e => {
                  e.preventDefault();
                  /* Quando o dialog for criado, coloque-o aqui. */
                }}
              >
                termos de uso.
              </a>
            </label>
          </div>
          <MTListButton>CRIAR CONTA</MTListButton>
        </form>
      </div>
    </motion.div>
  );
};

export default MTListSignUp;
