import { Dispatch, forwardRef, ReactNode, SetStateAction, useState } from 'react';

import MTListButton from '../MTListButton';

interface MTListDialogProps {
  closeButton?: boolean;
  children: ReactNode;
  highlithedButton?: string;
  highlithedButtonCallback?: () => any;
  genericButton?: string;
  genericButtonCallback?: () => any;
  setDialog: Dispatch<SetStateAction<boolean>>;
}

const MTListDialog = (
  {
    closeButton,
    children,
    highlithedButton,
    highlithedButtonCallback,
    genericButton,
    genericButtonCallback,
    setDialog,
  }: MTListDialogProps,
  ref: any,
) => {
  const closeDialog = () => setDialog(false);
  return (
    <div
      className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/30"
      ref={ref}
      onClick={e => {
        if (e.currentTarget === e.target) {
          setDialog(false);
        }
      }}
    >
      <div className="flex w-full max-w-80 flex-col items-center rounded-[10px] bg-[#545454] p-3">
        {closeButton && (
          <MTListButton
            className="ml-auto mr-0 !w-10 !bg-[#6C6C6C] hover:!bg-[#636363]"
            onClick={closeDialog}
          >
            X
          </MTListButton>
        )}
        <div className="mb-10 mt-5 flex flex-col">{children}</div>
        <div className="flex w-full justify-between">
          {highlithedButton && (
            <MTListButton className="mx-0 max-w-[120px]" onClick={highlithedButtonCallback}>
              {highlithedButton}
            </MTListButton>
          )}
          {genericButton && (
            <MTListButton
              className="mx-0 max-w-[120px] bg-[#6C6C6C] hover:bg-[#636363]"
              onClick={genericButtonCallback || closeDialog}
            >
              {genericButton}
            </MTListButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default forwardRef<HTMLDialogElement, MTListDialogProps>(MTListDialog);
