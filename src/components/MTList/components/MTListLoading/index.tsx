import { HTMLAttributes } from 'react';

import Loading from '../../assets/loading.svg?react';

interface MTListLoadingProps extends HTMLAttributes<HTMLDivElement> {}

const MTListLoading = ({ className }: MTListLoadingProps) => {
  return (
    <div
      className={`absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black/30 ${className}`}
    >
      <Loading />
    </div>
  );
};

export default MTListLoading;
