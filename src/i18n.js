import i18n from "i18next";
// English
import HOME_EN from "./locales/en/home.en.json";
import HEADER_EN from "./locales/en/header.en.json";
import ABOUT_EN from "./locales/en/about.en.json";
import EXPERIENCE_EN from "./locales/en/experience.en.json";
import SKILLS_EN from "./locales/en/skills.en.json";
import BLOGS_EN from "./locales/en/blog.en.json";
import PROJECTS_EN from "./locales/en/projects.en.json";
// Vietnamese
import HOME_VI from "./locales/vi/home.vi.json";
import HEADER_VI from "./locales/vi/header.vi.json";
import ABOUT_VI from "./locales/vi/about.vi.json";
import EXPERIENCE_VI from "./locales/vi/experience.vi.json";
import SKILLS_VI from "./locales/vi/skills.vi.json";
import BLOGS_VI from "./locales/vi/blog.vi.json";
import PROJECTS_VI from "./locales/vi/projects.vi.json";
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
  ns: ["home", "header", "about", "experience", "skills", "blog", "projects"],
  defaultNS,
  resources: {
    en: {
      // namespace
      header: HEADER_EN,
      home: HOME_EN,
      about: ABOUT_EN,
      experience: EXPERIENCE_EN,
      skills: SKILLS_EN,
      blog: BLOGS_EN,
      projects: PROJECTS_EN,
    },
    vi: {
      // namespace
      header: HEADER_VI,
      home: HOME_VI,
      about: ABOUT_VI,
      experience: EXPERIENCE_VI,
      skills: SKILLS_VI,
      blog: BLOGS_VI,
      projects: PROJECTS_VI,
    },
  },
});

export default i18n;
