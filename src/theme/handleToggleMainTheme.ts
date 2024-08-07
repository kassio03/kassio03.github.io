enum Theme {
  light = 'light',
  dark = 'dark',
}

enum Property {
  theme = 'data-theme',
}

export const handleToggleMainTheme = () => {
  const tagHtml = document.documentElement;

  const currentTheme = tagHtml.getAttribute(Property.theme);

  if (!currentTheme || currentTheme === Theme.dark) {
    tagHtml.setAttribute(Property.theme, Theme.light);
  } else {
    tagHtml.setAttribute(Property.theme, Theme.dark);
  }
};
