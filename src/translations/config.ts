import i18n from 'i18next';

import global_english from './english/global.json';
import global_french from './french/global.json';
import global_german from './german/global.json';
import global_italian from './italian/global.json';
import global_portuguese from './portuguese/global.json';
import global_spanish from './spanish/global.json';

i18n.init({
  resources: {
    portuguese: {
      global: global_portuguese,
    },
    english: {
      global: global_english,
    },
    german: {
      global: global_german,
    },
    spanish: {
      global: global_spanish,
    },
    french: {
      global: global_french,
    },
    italian: {
      global: global_italian,
    },
  },
  lng: 'portuguese',
  fallbackLng: 'english',
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
