import { motion } from 'framer-motion';

import EmailSvg from '../../assets/email.svg?react';
import LockSvg from '../../assets/lock.svg?react';
import SignInSvg from '../../assets/sign-in.svg?react';
import MTListButton from '../../components/MTListButton';
import MTListCheckbox from '../../components/MTListCheckbox';
import MTListInput from '../../components/MTListInput';

const MTListSignIn = () => {
  return (
    <motion.div
      className="mt-8 flex"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-shrink flex-grow items-center justify-center">
        <form className="w-full max-w-[352px]">
          <MTListInput
            customClassContainer="mb-6"
            Svg={EmailSvg}
            type="email"
            placeholder="Email"
          />
          <MTListInput
            customClassContainer="mb-3"
            Svg={LockSvg}
            type="password"
            placeholder="Senha"
          />
          <div className="mb-3 flex justify-between">
            <div className="flex">
              <MTListCheckbox id="keepConnected" />
              <label className="cursor-pointer pl-2" htmlFor="keepConnected">
                Manter conectado
              </label>
            </div>
            <a className="cursor-pointer font-bold text-[#FFB573] underline underline-offset-4">
              Esqueceu a senha?
            </a>
          </div>
          <p className="mb-8">
            Não possui uma conta?{' '}
            <a className="cursor-pointer font-bold text-[#FFB573] underline underline-offset-4">
              Crie uma!
            </a>
          </p>
          <MTListButton>ENTRAR</MTListButton>
        </form>
      </div>
      <div className="hidden flex-grow basis-[200px] md:block min-[1024px]:hidden min-[1192px]:block">
        <SignInSvg className="ml-auto max-h-[350px]" />
      </div>
    </motion.div>
  );
};

export default MTListSignIn;
