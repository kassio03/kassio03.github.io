export enum Theme {
  light = 'light',
  dark = 'dark',
}

enum Property {
  theme = 'data-theme',
}

export const handleChangeMainTheme = (mainTheme: Theme = Theme.dark) => {
  const tagHtml = document.documentElement;
  tagHtml.setAttribute(Property.theme, mainTheme);
};
