export enum SeasonTheme {
  default = 'default',
  autumn = 'autumn',
  spring = 'spring',
  summer = 'summer',
  winter = 'winter',
}

enum Property {
  seasonTheme = 'data-season-theme',
}

export const handleChangeSeasonTheme = (seasonTheme: SeasonTheme = SeasonTheme.default) => {
  const tagHtml = document.documentElement;

  if (seasonTheme === SeasonTheme.default) {
    tagHtml.removeAttribute(Property.seasonTheme);
  } else {
    tagHtml.setAttribute(Property.seasonTheme, seasonTheme);
  }
};
