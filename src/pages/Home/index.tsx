import photo from '../../assets/img/photo.jpg';

const Home = () => {
  return (
    <>
      <div className="w-[300px]">
        <h1>RESUMO</h1>
        <img src={photo} alt="Foto de Kassio Ferreira" />
        <p>Meu nome é Kassio Ferreira, nasci em maio de 2021.</p>
      </div>
      <div>
        <h2>EXPERIÊNCIAS</h2>
        <div>collapse - linguagens</div>
        <div>collapse - tech front end</div>
        <div>collapse - tech back end</div>
        <div>collapse - database</div>
        <div>collapse - outros</div>
      </div>
    </>
  );
};

export default Home;
