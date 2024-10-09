import Maintenance from '../../assets/svg/maintenance.svg?react';
const GraphicsSection = () => {
  return (
    <section className="w-full rounded-[28px] !bg-[hsl(0_0_11_/_0.9)] bg-solidPrimary/90 p-8 lg:px-12">
      <header className="text-sm">
        <div>
          <h2 id="graphics" className="ml-3 text-4xl text-white">
            Gráficos
          </h2>
        </div>
      </header>
      <div className="mx-auto my-40 flex max-w-fit items-center gap-6 text-2xl text-yellow-300">
        <Maintenance className="stroke-yellow-300" height={40} width={40} />
        <p className="">Em breve!</p>
      </div>
    </section>
  );
};

export default GraphicsSection;
