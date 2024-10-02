import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

import photo from '../../assets/img/photo.jpg';
import Code from '../../assets/svg/code.svg?react';
import Database from '../../assets/svg/database.svg?react';
import HardDrive from '../../assets/svg/hard-drive.svg?react';
import Palette from '../../assets/svg/palette.svg?react';
import Spinner from '../../assets/svg/spinner.svg?react';
import SquareMenu from '../../assets/svg/square-menu.svg?react';
import Card from '../../components/Card';
import Collapse from '../../components/Collapse';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const changeLoading = useCallback(() => {
    setLoading(false);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
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
      <div className="z-10 flex w-full flex-col items-center p-5 text-base sm:p-8 lg:p-14">
        <div className="relative flex min-h-[315px] w-full max-w-[962px] flex-col items-center overflow-hidden rounded-2xl bg-solidPrimary/90 p-6 min-[1201px]:flex-row min-[1201px]:items-start min-[1201px]:py-0 min-[1201px]:pl-0">
          <h1
            id="summary"
            className="left-[405px] top-[16px] text-2xl md:text-3xl min-[1201px]:absolute"
          >
            RESUMO
          </h1>
          <img
            className="my-6 h-full w-full max-w-[315px] rounded-2xl object-cover min-[1201px]:my-0 min-[1201px]:rounded-none"
            src={photo}
            alt="Foto de Kassio Ferreira"
          />
          <div className="min-[1201px]:mx-14 min-[1201px]:mb-6 min-[1201px]:mt-[76px]">
            <p>Kassio Ferreira, 23 anos.</p>
            <br />
            <p>
              Desenvolvedor full stack com experiência prática em projetos de portfólio, estou em
              busca de projetos reais para aplicar minhas habilidades. Acredito que ações falam mais
              do que palavras, por isso, convido você a navegar e explorar este portfólio para
              descobrir o que posso fazer.
            </p>
          </div>
        </div>
        <div className="mt-9 w-full max-w-[962px] rounded-2xl bg-solidPrimary/90 p-5 md:rounded-[28px] md:px-16 md:pb-11">
          <h2 id="experience" className="text-center text-lg md:text-3xl">
            EXPERIÊNCIAS
          </h2>
          <p className="my-5 hidden md:block">
            Tenho experiência na criação de aplicações web, utilizando React com typesript e vite no
            front end e NestJS no back end.
          </p>
          <Collapse Svg={Code} title="LINGUAGENS DE PROGRAMAÇÃO">
            <ul className="flex flex-wrap items-stretch gap-3 p-3">
              <li className="flex-shrink flex-grow basis-[240px]">
                <Card
                  title="JavaScript"
                  paragraph="Utilizo JavaScript tanto no desenvolvimento do lado do servidor (backend), usando Node.js e NestJS, quanto no desenvolvimento do lado do cliente (frontend), com React."
                />
              </li>
              <li className="flex-shrink flex-grow basis-[240px]">
                <Card
                  title="TypeScript"
                  paragraph="Os recursos como anotações de tipo, interfaces, enums etc., concedidos pelo TypeScript, me permitem criar sistemas mais confiáveis e manuteníveis."
                />
              </li>
              <li className="flex-shrink flex-grow basis-[240px]">
                <Card
                  title="Java"
                  paragraph="Possuo um bom conhecimento em Java e no desenvolvimento de APIs e serviços utilizando Spring Boot."
                />
              </li>
            </ul>
          </Collapse>
          <Collapse Svg={HardDrive} title="TECNOLOGIAS BACK END">
            <ul className="flex flex-wrap items-stretch gap-3 p-3">
              <li className="flex-shrink flex-grow basis-[240px]">
                <Card title="Node.js" paragraph="Criação de API" />
              </li>
              <li className="flex-shrink flex-grow basis-[240px]">
                <Card title="NestJS" paragraph="modularização injecao de dependencia" />
              </li>
              <li className="flex-shrink flex-grow basis-[240px]">
                <Card title="Spring Boot" paragraph="sintaxe semelhante ao nest" />
              </li>
            </ul>
          </Collapse>
          <Collapse Svg={Palette} title="TECNOLOGIAS FRONT END">
            <ul className="flex flex-wrap items-stretch gap-3 p-3">
              <li className="flex-shrink flex-grow basis-[240px]">
                <Card
                  title="React"
                  paragraph="Desenvolvimento de componentes altamente reutilizáveis e aplicação eficiente dos React Hooks."
                />
              </li>
              <li className="flex-shrink flex-grow basis-[240px]">
                <Card
                  title="Tailwind"
                  paragraph="Criação de layouts responsivos com classes utilitárias e personalização avançada através do Tailwind CSS."
                />
              </li>
              <li className="flex-shrink flex-grow basis-[240px]">
                <Card
                  title="Baseado em Componentes"
                  paragraph="Desenvolvi alguns projetos com Material UI e Ant Design, possuo boas habilidades com essas e outras bibliotecas baseadas em componentes, mas desenvolvo ainda melhor com Tailwind."
                />
              </li>
            </ul>
          </Collapse>
          <Collapse Svg={Database} title="NUVEM">
            <ul className="flex flex-wrap items-stretch gap-3 p-3">
              <li className="flex-shrink flex-grow basis-[240px]">
                <Card
                  title="Google Cloud Storage"
                  paragraph="Durante a faculdade, utilizei para armazenamento de imagens e vídeos de uma aplicação criada por exigência da disciplina."
                />
              </li>
              <li className="flex-shrink flex-grow basis-[240px]">
                <Card
                  title="AWS"
                  paragraph="Na faculdade, utilizei o Amazon S3 para armazenar imagens, o Amazon RDS para dados relacionais e o DynamoDB para dados não relacionais."
                />
              </li>
            </ul>
          </Collapse>
          <Collapse Svg={Database} title="BANCOS DE DADOS">
            <ul className="flex flex-wrap items-stretch gap-3 p-3">
              <li className="flex-shrink flex-grow basis-[240px]">
                <Card
                  title="postgres"
                  paragraph="Lorem ipsum ante primis in faucibus orci luctus et ultrices posuere cubilia laoreet."
                />
              </li>
              <li className="flex-shrink flex-grow basis-[240px]">
                <Card
                  title="mongodb"
                  paragraph="Lorem ipsum ante primis in faucibus orci luctus et ultrices posuere cubilia laoreet."
                />
              </li>
            </ul>
          </Collapse>
          <Collapse Svg={SquareMenu} title="OUTROS">
            <ul className="flex flex-wrap items-stretch gap-3 p-3">
              <li className="flex-shrink flex-grow basis-[240px]">
                <Card
                  title="clean code"
                  paragraph="Lorem ipsum ante primis in faucibus orci luctus et ultrices posuere cubilia laoreet."
                />
              </li>
              <li className="flex-shrink flex-grow basis-[240px]">
                <Card
                  title="redux-saga"
                  paragraph="Lorem ipsum ante primis in faucibus orci luctus et ultrices posuere cubilia laoreet."
                />
              </li>
            </ul>
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default Home;
