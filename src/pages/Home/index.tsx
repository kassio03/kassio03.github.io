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
    <div className="flex w-full flex-col items-center p-5 md:p-8 lg:p-14">
      <div className="flex max-w-[962px] overflow-hidden rounded-[28px] bg-solidPrimary/90">
        <div className="h-[310px] w-full max-w-[314px]">
          <img src={photo} alt="Foto de Kassio Ferreira" className="min-h-full object-cover" />
        </div>
        <div className="w-full">
          <h1>RESUMO</h1>
          <p>
            Meu nome é Kassio Ferreira, nasci em maio de 2021. Meu nome é Kassio Ferreira, nasci em
            maio de 2021. Meu nome é Kassio Ferreira, nasci em maio de 2021. Meu nome é Kassio
            Ferreira, nasci em maio de 2021. Meu nome é Kassio Ferreira, nasci em maio de 2021. Meu
            nome é Kassio Ferreira, nasci em maio de 2021. Meu nome é Kassio Ferreira, nasci em maio
            de 2021.
          </p>
        </div>
      </div>
      <div className="mt-9 w-full max-w-[962px] rounded-[16px] bg-solidPrimary/90 px-16 pb-11 pt-4 md:rounded-[28px]">
        <h2 className="text-center text-lg md:text-4xl">EXPERIÊNCIAS</h2>
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
  );
};

export default Home;
