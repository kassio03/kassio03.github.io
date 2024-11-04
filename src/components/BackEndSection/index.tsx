import ChangeThisIcon from '../../assets/svg/language.svg?react';
import Icon from '../Icon';
import MTList from '../MTList';

const BackEndSection = () => {
  return (
    <section className="w-full rounded-[28px] bg-solidPrimary/90 p-8 lg:px-12">
      <header className="flex items-center">
        <Icon
          className="h-7 w-7 !cursor-default fill-solidTextPrimary stroke-0"
          Svg={ChangeThisIcon}
        />
        <h2 id="backend" className="ml-3 text-4xl">
          Back End
        </h2>
      </header>
      <div className="mb-8 mt-6 w-full">
        <p className="text-yellow-300">Descrição da seção, seção atualmente em construção!</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet augue sit amet
          purus pharetra maximus. Praesent a eleifend turpis. Integer lectus metus, tempor eget
          rhoncus a, pellentesque at erat. Vivamus id venenatis dui, vitae iaculis magna. Phasellus
          ut nulla nec orci sagittis efficitur.
        </p>
      </div>
      <MTList />
    </section>
  );
};

export default BackEndSection;
