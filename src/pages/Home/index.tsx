import { motion } from 'framer-motion';

import photo from '../../assets/img/photo2.jpg';
import Code from '../../assets/svg/code.svg?react';
import Database from '../../assets/svg/database.svg?react';
import HardDrive from '../../assets/svg/hard-drive.svg?react';
import Palette from '../../assets/svg/palette.svg?react';
import SquareMenu from '../../assets/svg/square-menu.svg?react';
import Card from '../../components/Card';
import Collapse from '../../components/Collapse';

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 1, borderRadius: 0 }}
        animate={{
          scaleY: 0,
          rotate: 0,
          transition: { duration: 1, ease: 'easeInOut' },
        }}
        className="fixed z-50 min-h-dvh min-w-full bg-solidSeason"
      />
      <div className="flex w-full flex-col items-center p-5 sm:p-8 lg:p-14">
        <div className="min-[1201px]:flex-row min-[1201px]:py-0 min-[1201px]:pl-0 flex min-h-[315px] w-full max-w-[962px] flex-col items-center overflow-hidden rounded-2xl bg-solidPrimary/90 p-6">
          <h1 id="summary" className="min-[1201px]:hidden text-lg md:text-3xl">
            RESUMO
          </h1>
          <div className="min-[1201px]:my-0 min-[1201px]:max-w-[315px] my-5 h-full max-w-[500px] rounded-2xl">
            <img
              src={photo}
              alt="Foto de Kassio Ferreira"
              className="min-[1201px]:min-h-full min-[1201px]:rounded-r-none w-full rounded-2xl object-cover"
            />
          </div>
          <div className="relative h-full">
            <h1 id="summary" className="min-[1201px]:block ml-[90px] mt-4 hidden text-3xl">
              RESUMO
            </h1>
            <p className="min-[1201px]:mx-14 min-[1201px]:my-6">
              Meu nome é Kassio Ferreira, nasci em maio de 2021. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Duis non ex a est vehicula molestie. Pellentesque
              facilisis enim quis enim condimentum, eu egestas est mattis. Sed risus leo, euismod ac
              tristique id, semper id ante. Donec non orci erat. Aenean viverra nibh eget lectus
              aliquet, et pharetra nibh pellentesque. Duis ullamcorper viverra velit id dapibus. Ut
              nec luctus ipsum. Vestibulum sapien dolor, malesuada non rutrum vitae, tempor vel
              ipsum. Suspendisse ut lobortis odio. Curabitur aliquam elit ut metus dignissim,
              posuere maximus eros lacinia. Ut aliquet congue nisl eu egestas.
            </p>
          </div>
        </div>
        <div className="mt-9 w-full max-w-[962px] rounded-2xl bg-solidPrimary/90 p-5 md:rounded-[28px] md:px-16 md:pb-11">
          <h2 id="experience" className="text-center text-lg md:text-3xl">
            EXPERIÊNCIAS
          </h2>
          <p className="my-5 hidden text-sm md:block">
            Tenho experiência na criação de aplicações web, utilizando React com typesript e vite no
            front end e NestJS no back end.
          </p>
          <Collapse Svg={Code} title="LINGUAGENS DE PROGRAMAÇÃO">
            <ul className="flex flex-wrap justify-center">
              <li>
                <Card
                  title="JAVASCRIPT"
                  paragraph="Uso javascript tanto no back end (nodejs e nestjs) quanto no front end (React)."
                />
              </li>
              <li>
                <Card
                  title="TYPESCRIPT"
                  paragraph="Lorem ipsum ante primis in faucibus orci luctus et ultrices posuere cubilia laoreet."
                />
              </li>
              <li>
                <Card
                  title="JAVA"
                  paragraph="Lorem ipsum ante primis in faucibus orci luctus et ultrices posuere cubilia laoreet."
                />
              </li>
            </ul>
          </Collapse>
          <Collapse Svg={HardDrive} title="TECNOLOGIAS BACK END">
            <ul className="flex flex-wrap justify-center">
              <li>
                <Card
                  title="nestjs"
                  paragraph="Lorem ipsum ante primis in faucibus orci luctus et ultrices posuere cubilia laoreet."
                />
              </li>
              <li>
                <Card
                  title="nodejs"
                  paragraph="Lorem ipsum ante primis in faucibus orci luctus et ultrices posuere cubilia laoreet."
                />
              </li>
            </ul>
          </Collapse>
          <Collapse Svg={Palette} title="TECNOLOGIAS FRONT END">
            <ul className="flex flex-wrap justify-center">
              <li>
                <Card
                  title="React"
                  paragraph="Lorem ipsum ante primis in faucibus orci luctus et ultrices posuere cubilia laoreet."
                />
              </li>
              <li>
                <Card
                  title="Tailwind"
                  paragraph="Lorem ipsum ante primis in faucibus orci luctus et ultrices posuere cubilia laoreet."
                />
              </li>
            </ul>
          </Collapse>
          <Collapse Svg={Database} title="BANCOS DE DADOS">
            <ul className="flex flex-wrap justify-center">
              <li>
                <Card
                  title="postgres"
                  paragraph="Lorem ipsum ante primis in faucibus orci luctus et ultrices posuere cubilia laoreet."
                />
              </li>
              <li>
                <Card
                  title="mongodb"
                  paragraph="Lorem ipsum ante primis in faucibus orci luctus et ultrices posuere cubilia laoreet."
                />
              </li>
            </ul>
          </Collapse>
          <Collapse Svg={SquareMenu} title="OUTROS">
            <ul className="flex flex-wrap justify-center">
              <li>
                <Card
                  title="redux"
                  paragraph="Lorem ipsum ante primis in faucibus orci luctus et ultrices posuere cubilia laoreet."
                />
              </li>
              <li>
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
