import { InputHTMLAttributes } from 'react';

interface MTListInputProps extends InputHTMLAttributes<HTMLInputElement> {
  Svg?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  customClassContainer?: string;
  customClassInput?: string;
}

const MTListInput = ({
  Svg,
  customClassContainer,
  customClassInput,
  ...rest
}: MTListInputProps) => {
  return (
    <div className={`relative flex items-center ${customClassContainer}`}>
      {Svg && <Svg className="pointer-events-none absolute left-4" />}
      <input
        className={`h-10 w-full rounded-[10px] border-2 border-[#FFB573] bg-transparent indent-12 placeholder-[#FFB573]/50 ${customClassInput}`}
        {...rest}
      />
    </div>
  );
};

export default MTListInput;
