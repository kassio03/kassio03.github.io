import { createContext, ReactNode, useContext, useState } from 'react';

export interface DialogContextType {
  openDialogElement: (updatedDialogElement: JSX.Element) => void;
  closeDialog: () => void;
}

const INITIAL_VALUE: DialogContextType = {
  openDialogElement: () => {},
  closeDialog: () => {},
};

export const DialogContext = createContext<DialogContextType>(INITIAL_VALUE);

export const DialogContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [DialogElement, setDialogElement] = useState<JSX.Element | null>(null);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  const openDialogElement = (Element: JSX.Element) => {
    setDialogElement(Element);
    openDialog();
  };
  return (
    <DialogContext.Provider
      value={{
        openDialogElement,
        closeDialog,
      }}
    >
      <div className="relative">
        {isOpen && DialogElement}
        {children}
      </div>
    </DialogContext.Provider>
  );
};

export const useDialog = () => useContext(DialogContext);
