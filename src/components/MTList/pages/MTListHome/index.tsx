import { motion } from 'framer-motion';

import HomeSvg from '../../assets/home.svg?react';

const MTListHome = () => {
  return (
    <motion.div
      className="mt-8 flex items-center gap-6"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex-grow basis-[352px]">
        <h1 className="w-3/4 text-xl font-bold leading-[29px] sm:text-2xl">
          Cada <span className="text-[#FFB573]">tarefa concluída</span> é um passo em direção ao seu
          objetivo!
        </h1>
        <p className="mt-6">
          Fazer uma lista de tarefas é um truque simples para turbinar a produtividade. Com tudo
          anotado, você evita esquecer suas tarefas e consegue ver o que é prioridade. O hábito de
          criar listas nos ajuda em:
        </p>
        <ul className="my-3 ml-6 list-disc text-left">
          <li>Organização</li>
          <li>Prioridade</li>
          <li>Produtividade</li>
          <li>Gerenciamento de Tempo</li>
          <li>Concentração</li>
        </ul>
        <p>
          Criar listas é uma forma de se livrar da procrastinação! Experimente e veja como fica mais
          fácil tocar sua rotina!
        </p>
      </div>
      <div className="hidden flex-grow-[100] basis-[200px] md:block min-[1024px]:hidden min-[1192px]:block">
        <HomeSvg className="ml-auto max-h-[350px]" />
      </div>
    </motion.div>
  );
};

export default MTListHome;
