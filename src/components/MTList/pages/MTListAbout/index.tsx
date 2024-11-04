import { motion } from 'framer-motion';

import AboutSvg from '../../assets/about.svg?react';

const MTListAbout = () => {
  return (
    <motion.div
      className="mt-8 flex items-center gap-3"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.2 }}
    >
      <div className="hidden h-full flex-grow-[100] basis-[200px] md:block min-[1024px]:hidden min-[1192px]:block">
        <AboutSvg className="max-h-[350px]" />
      </div>
      <div className="flex-grow basis-[352px]">
        <h1 className="max-w-[285px] text-xl font-bold leading-[29px] sm:text-2xl">
          <span className="text-[#FFB573]">Simplifique</span> sua rotina e{' '}
          <span className="text-[#FFB573]">organize</span> suas tarefas!
        </h1>
        <p className="mb-3 mt-6">
          MTList (My Task List) é uma aplicação prática e intuitiva para criar e organizar suas
          tarefas diárias. Com um design simplificado, permite adicionar, editar e acompanhar suas
          tarefas de maneira rápida e eficiente.
        </p>
        <p>
          Nós estamos empenhados em ajudar você a priorizar e gerenciar compromissos sem
          complicação. Seja para planejar um projeto, uma rotina de estudos ou uma lista de compras,
          tarefas adicionadas a sua lista de tarefas mantém você focado no que importa e colabora
          para uma vida mais organizada.
        </p>
      </div>
    </motion.div>
  );
};

export default MTListAbout;
