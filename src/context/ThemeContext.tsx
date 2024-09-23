import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

import { handleChangeMainTheme, Theme } from '../theme/handleChangeMainTheme';
import handleChangeSeasonBackground from '../theme/handleChangeSeasonBackground';
import { handleChangeSeasonTheme, SeasonTheme } from '../theme/handleChangeSeasonTheme';

export interface ThemeContextType {
  currentTheme: {
    mainTheme: string;
    seasonTheme: string;
  };
  setMainTheme: (theme: Theme) => void;
  setSeasonTheme: (season: SeasonTheme) => void;
}

const INITIAL_VALUE = {
  currentTheme: {
    mainTheme: Theme.dark,
    seasonTheme: SeasonTheme.default,
  },
  setMainTheme: () => {},
  setSeasonTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(INITIAL_VALUE);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [mainTheme, setMainTheme] = useState<`${Theme}`>(INITIAL_VALUE.currentTheme.mainTheme);
  const [seasonTheme, setSeasonTheme] = useState<`${SeasonTheme}`>(
    INITIAL_VALUE.currentTheme.seasonTheme,
  );

  const changeMainTheme = useCallback((theme: Theme) => {
    handleChangeMainTheme(theme);
    setMainTheme(theme);
  }, []);

  const changeSeasonTheme = useCallback((season: SeasonTheme) => {
    handleChangeSeasonTheme(season);
    handleChangeSeasonBackground(season);
    setSeasonTheme(season);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: { mainTheme, seasonTheme },
        setMainTheme: changeMainTheme,
        setSeasonTheme: changeSeasonTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
