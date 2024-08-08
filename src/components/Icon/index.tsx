import { FunctionComponent, HTMLAttributes, memo } from 'react';

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  Svg: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  highlighted?: boolean;
  //? Stroke como um parametro pode vir a ser necessário.
}

const Icon = ({ Svg, className, highlighted, ...rest }: IconProps) => {
  return (
    <div
      className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full ${className} ${highlighted ? 'shadow-lg shadow-solidSeason' : ''}`}
      {...rest}
    >
      <Svg className="stroke-solidTextPrimary" />
    </div>
  );
};

//? Premature Optimization? O ganho existe porém é minimo.

export default memo(Icon, (previous, current) => {
  if (previous.highlighted !== current.highlighted) return false;
  if (previous.Svg !== current.Svg) return false;

  return true;
});
