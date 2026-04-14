import { createContext, useContext, useState, useEffect } from "react";
import translations from "./Translations";

const I18nContext = createContext(null);

const detectLanguage = () => {
  const saved = localStorage.getItem("eshop-lang");
  if (saved && translations[saved]) return saved;
  const browserLang = (navigator.language || navigator.userLanguage || "en").split("-")[0].toLowerCase();
  const langMap = { el: "gr", gr: "gr", en: "en", fr: "fr", de: "de", es: "es" };
  return langMap[browserLang] || "en";
};

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(detectLanguage);
  const t = translations[lang] || translations.en;

  const changeLanguage = (code) => {
    if (translations[code]) {
      setLang(code);
      localStorage.setItem("eshop-lang", code);
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang === "gr" ? "el" : lang;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ t, lang, changeLanguage, availableLanguages: Object.keys(translations) }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
};

export default I18nContext;