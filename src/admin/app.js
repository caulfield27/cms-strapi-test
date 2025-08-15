import logo from './extensions/logo.png'

const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  auth: {
    logo,
  },
  head: {
    favicon: logo
  },
  menu: {
    logo
  },

  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title" : "Humo-CMS",
      "app.components.LeftMenu.navbrand.workplace": "development",
      "Auth.form.welcome.title" : "Humo-CMS",
      "Auth.form.welcome.subtitle" : "Login to you account",
      "Settings.profile.form.section.experinece.interfaceLanguageHelp" : "Preference changes will apply only to you",
    }
  }


};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
