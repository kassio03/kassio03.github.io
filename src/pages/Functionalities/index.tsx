import AnimationSection from '../../components/AnimationSection';
import GraphicsSection from '../../components/GraphicsSection';
import LanguageSection from '../../components/LanguageSection';
import Loading from '../../components/Loading';
import TableSection from '../../components/TableSection';
import ThemeSection from '../../components/ThemeSection';

const Functionalities = () => {
  return (
    <>
      <Loading />
      <div className="z-10 mx-auto flex w-full max-w-[1074px] flex-col gap-12 p-5 sm:p-8 lg:p-14">
        <ThemeSection />
        <AnimationSection />
        <LanguageSection />
        <TableSection />
        <GraphicsSection />
      </div>
    </>
  );
};

export default Functionalities;
