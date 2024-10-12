import i18n from "i18next";
// English
import HOME_EN from "./locales/en/home.en.json";
import HEADER_EN from "./locales/en/header.en.json";
import ABOUT_EN from "./locales/en/about.en.json";
// Vietnamese
import HOME_VI from "./locales/vi/home.vi.json";
import HEADER_VI from "./locales/vi/header.vi.json";
import ABOUT_VI from "./locales/vi/about.vi.json";

export const locales = {
  en: "English",
  vi: "Vietnamese",
};

const defaultNS = "home";
i18n.init({
  // default language
  fallbackLng: "en", // if you're using a language detector, do not define the lng option
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  ns: ["home", "header", "about"],
  defaultNS,
  resources: {
    en: {
      // namespace
      header: HEADER_EN,
      home: HOME_EN,
      about: ABOUT_EN,
    },
    vi: {
      // namespace
      header: HEADER_VI,
      home: HOME_VI,
      about: ABOUT_VI,
    },
  },
});

export default i18n;
