import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

export enum Pages {
  home = 'home',
  about = 'about',
  signIn = 'signIn',
  signUp = 'signUp',
  myList = 'myList',
}

export interface EndpointContextType {
  currentPage: `${Pages}`;
  setCurrentPage: (page: Pages) => void;
}

const INITIAL_VALUE: EndpointContextType = {
  currentPage: Pages.home,
  setCurrentPage: () => {},
};

export const EndpointContext = createContext<EndpointContextType>(INITIAL_VALUE);

export const EndpointContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<`${Pages}`>(INITIAL_VALUE.currentPage);

  const changeCurrentPage = useCallback((page: `${Pages}`) => {
    setCurrentPage(page);
  }, []);

  return (
    <EndpointContext.Provider value={{ currentPage, setCurrentPage: changeCurrentPage }}>
      {children}
    </EndpointContext.Provider>
  );
};

export const useEndpoint = () => useContext(EndpointContext);
