import i18n from "i18next";
import HOME_EN from "./locales/en/home.en.json";
import HOME_VI from "./locales/vi/home.vi.json";
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
  ns: ["home"],
  defaultNS,
  resources: {
    en: {
      // namespace
      home: HOME_EN,
    },
    vi: {
      // namespace
      home: HOME_VI,
    },
  },
});

export default i18n;
