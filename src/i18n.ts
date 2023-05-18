import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

// import commonEN from "./translations/en/common.json";
// import accountEN from "./translations/en/account.json";

// import commonTR from "./translations/tr/common.json";
// import accountTR from "./translations/tr/account.json";

// const resources = {
//   en: {
//     common: commonEN,
//     account: accountEN,
//   },
//   tr: {
//     common: commonTR,
//     account: accountTR,
//   },
// };

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
    // backend: {
    //   loadPath: "./locales/{{lng}}/{{ns}}.json",
    // },
    ns: ["common", "account"],
    // defaultNS: "common",
    // lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    partialBundledLanguages: true,
    // react: {
    //   useSuspense: true,
    // },
  });
