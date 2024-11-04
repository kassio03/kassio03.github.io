import { ButtonHTMLAttributes } from 'react';

interface MTListButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const MTListButton = ({ className, children, ...rest }: MTListButtonProps) => {
  return (
    <button
      className={`mx-auto block h-10 w-full max-w-[180px] rounded-[10px] bg-[#FFB573] font-bold hover:bg-[#E59F60] ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default MTListButton;
