import { useState } from "react";
import PreFooter from "../components/PreFooter";

export default function RegisterPage({ promises, footerCols }) {
  const [mode, setMode] = useState("register"); // "register" | "login"
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);

  return (
    <div style={{ padding: "0 16px" }}>
      <div className="reg-container">
        {mode === "register" ? (
          <div className="reg-form">
            <h2>ΕΓΓΡΑΦΗ</h2>
            <label>Διεύθυνση email</label>
            <input type="email" />
            <label>Password</label>
            <div className="pw-wrap">
              <input type={showPw ? "text" : "password"} />
              <button className="pw-toggle" onClick={() => setShowPw(p => !p)}>{showPw ? "🙈" : "👁"}</button>
            </div>
            <label>Επιβεβαίωση Password</label>
            <div className="pw-wrap">
              <input type={showPw2 ? "text" : "password"} />
              <button className="pw-toggle" onClick={() => setShowPw2(p => !p)}>{showPw2 ? "🙈" : "👁"}</button>
            </div>
            <p className="reg-privacy">
              Τα προσωπικά σας δεδομένα θα χρησιμοποιηθούν για την εξυπηρέτησή σας. Για περισσότερες πληροφορίες ανατρέξτε στην <a href="#">πολιτική απορρήτου</a>.
            </p>
            <button className="reg-submit">ΕΓΓΡΑΦΗ</button>
          </div>
        ) : (
          <div className="reg-form">
            <h2>ΣΥΝΔΕΣΗ</h2>
            <label>Όνομα Χρήστη ή email</label>
            <input type="text" />
            <label>Password</label>
            <div className="pw-wrap">
              <input type={showPw ? "text" : "password"} />
              <button className="pw-toggle" onClick={() => setShowPw(p => !p)}>{showPw ? "🙈" : "👁"}</button>
            </div>
            <button className="reg-submit">ΣΥΝΔΕΣΗ</button>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, fontSize: 12 }}>
              <label><input type="checkbox" /> Να παραμένω σε σύνδεση</label>
              <a href="#" style={{ color: "var(--red)" }}>Ξέχασες τον κωδικό;</a>
            </div>
          </div>
        )}
        <div className="reg-side">
          <h1>Ο λογαριασμός σου</h1>
          <p>Με την εγγραφή σας θα έχετε πρόσβαση στην κατάσταση παραγγελίας, το ιστορικό αγορών και πολλά άλλα.</p>
          <button className="reg-toggle-btn" onClick={() => setMode(m => m === "register" ? "login" : "register")}>
            {mode === "register" ? "ΣΥΝΔΕΣΗ" : "ΕΓΓΡΑΦΗ"}
          </button>
        </div>
      </div>
      <PreFooter promises={promises} footerCols={footerCols} />
    </div>
  );
}
