import { useState, useRef, useEffect } from "react";
import { useI18n } from "../src/i18n/i18ncontext";
import translations from "../src/i18n/Translations";

export default function LanguageSwitcher() {
  const { lang, changeLanguage } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = translations[lang];

  return (
    <div className="langSwitcher" ref={ref}>
      <button className="langBtn" onClick={() => setOpen(o => !o)} title="Change language">
        <span className="langFlag">{current.flag}</span>
        <span className="langCode">{lang.toUpperCase()}</span>
        <span className="langCaret">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="langDrop">
          {Object.values(translations).map(tr => (
            <button
              key={tr.code}
              className={`langOption${lang === tr.code ? " active" : ""}`}
              onClick={() => { changeLanguage(tr.code); setOpen(false); }}
            >
              <span className="langFlag">{tr.flag}</span>
              <span>{tr.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}