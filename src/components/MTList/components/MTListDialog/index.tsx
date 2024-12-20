import { motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';

import { useDialog } from '../../contexts/DialogContext';
import MTListButton from '../MTListButton';

interface MTListDialogProps {
  closeButton?: boolean;
  children?: ReactNode;
  highlithedButton?: string;
  highlithedButtonCallback?: () => any;
  genericButton?: string;
  genericButtonCallback?: () => any;
}

const MTListDialog = ({
  closeButton,
  children,
  highlithedButton,
  highlithedButtonCallback,
  genericButton,
  genericButtonCallback,
}: MTListDialogProps) => {
  const { closeDialog } = useDialog();
  const dialogRef = useRef(null);

  return (
    <motion.div
      className="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black/30 !text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      ref={dialogRef}
      onClick={e => {
        if (e.currentTarget === e.target) {
          closeDialog();
        }
      }}
    >
      <motion.div
        className="flex w-full max-w-80 flex-col items-center rounded-[10px] bg-[#545454] p-3"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.2 }}
      >
        {closeButton && (
          <MTListButton
            className="ml-auto mr-0 !w-10 !bg-[#6C6C6C] hover:!bg-[#636363]"
            onClick={closeDialog}
          >
            X
          </MTListButton>
        )}
        <div className="mb-10 mt-5 flex flex-col">{children}</div>
        <div className="flex w-full justify-between gap-5">
          {highlithedButton && (
            <MTListButton
              className="mx-0 max-w-[120px]"
              onClick={() => {
                if (highlithedButtonCallback) highlithedButtonCallback();
                closeDialog();
              }}
            >
              {highlithedButton}
            </MTListButton>
          )}
          {genericButton && (
            <MTListButton
              className="mx-0 max-w-[120px] !bg-[#6C6C6C] hover:!bg-[#636363]"
              onClick={() => {
                if (genericButtonCallback) genericButtonCallback();
                closeDialog();
              }}
            >
              {genericButton}
            </MTListButton>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MTListDialog;
