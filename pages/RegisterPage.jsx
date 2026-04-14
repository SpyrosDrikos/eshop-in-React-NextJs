import { useState } from "react";
import PreFooter from "../components/PreFooter";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useI18n } from "../src/i18n/i18ncontext";

export default function RegisterPage({ promises, footerCols }) {
  const { t } = useI18n();
  const [mode, setMode] = useState("register");
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);

  return (
    <div style={{ padding: "0 16px" }}>
      <div className="regContainer">
        {mode === "register" ? (
          <div className="regForm">
            <h2>{t.auth.register}</h2>
            <label>{t.auth.email}</label>
            <input type="email" />
            <label>{t.auth.password}</label>
            <div className="pwWrap">
              <input type={showPw ? "text" : "password"} />
              <FontAwesomeIcon
                icon={showPw ? faEye : faEyeSlash}
                className="pwToggle"
                onClick={() => setShowPw(p => !p)}
              />
            </div>
            <label>{t.auth.confirmPassword}</label>
            <div className="pwWrap">
              <input type={showPw2 ? "text" : "password"} />
              <FontAwesomeIcon
                icon={showPw2 ? faEye : faEyeSlash}
                className="pwToggle"
                onClick={() => setShowPw2(p => !p)}
              />
            </div>
            <p className="regPrivacy">
              {t.auth.privacyNote}{" "}
              <a href="#">{t.auth.privacyPolicy}</a>.
            </p>
            <button className="regSubmit">{t.auth.register}</button>
          </div>
        ) : (
          <div className="regForm">
            <h2>{t.auth.login}</h2>
            <label>{t.auth.username}</label>
            <input type="text" />
            <label>{t.auth.password}</label>
            <div className="pwWrap">
              <input type={showPw ? "text" : "password"} />
              <FontAwesomeIcon
                icon={showPw ? faEye : faEyeSlash}
                className="pwToggle"
                onClick={() => setShowPw(p => !p)}
              />
            </div>
            <button className="regSubmit">{t.auth.login}</button>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, fontSize: 12 }}>
              <label><input type="checkbox" /> {t.auth.keepSignedIn}</label>
              <a href="#" style={{ color: "var(--red)" }}>{t.auth.forgotPassword}</a>
            </div>
          </div>
        )}

        <div className="regSide">
          <h1>{t.auth.yourAccount}</h1>
          <p>{t.auth.accountBenefits}</p>
          <button
            className="regToggleBtn"
            onClick={() => setMode(m => m === "register" ? "login" : "register")}
          >
            {mode === "register" ? t.auth.login : t.auth.register}
          </button>
        </div>
      </div>
      <PreFooter promises={promises} footerCols={footerCols} />
    </div>
  );
}
