import { useState } from "react";
import PreFooter from "../components/PreFooter";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function RegisterPage({ promises, footerCols }) {
  const [mode, setMode] = useState("register"); // "register" | "login"
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);

  return (
    <div style={{ padding: "0 16px" }}>
      <div className="reg-container">
        {mode === "register" ? (
          <div className="reg-form">
            <h2>Register</h2>
            <label>Email Address</label>
            <input type="email" />
            <label>Password</label>
            <div className="pw-wrap">
              <input type={showPw ? "text" : "password"} />
              <button className="pw-toggle" onClick={() => setShowPw(p => !p)}>{showPw ? (faEye) : (faEyeSlash)}</button>
            </div>
            <label>Confirm Password</label>
            <div className="pw-wrap">
              <input type={showPw2 ? "text" : "password"} />
              <button className="pw-toggle" onClick={() => setShowPw2(p => !p)}>{showPw2 ? (faEye) : (faEyeSlash)}</button>
            </div>
            <p className="reg-privacy">
              Your personal data will be used to serve you. For more information, please refer to our <a href="#">privacy policy</a>.
            </p>
            <button className="reg-submit">Register</button>
          </div>
        ) : (
          <div className="reg-form">
            <h2>Login</h2>
            <label>Username or Email</label>
            <input type="text" />
            <label>Password</label>
            <div className="pw-wrap">
              <input type={showPw ? "text" : "password"} />
              <button className="pw-toggle" onClick={() => setShowPw(p => !p)}>{showPw ? (faEye) : (faEyeSlash)}</button>
            </div>
            <button className="reg-submit">Login</button>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, fontSize: 12 }}>
              <label><input type="checkbox" /> Keep me signed in</label>
              <a href="#" style={{ color: "var(--red)" }}>Forgot your password?</a>
            </div>
          </div>
        )}
        <div className="reg-side">
          <h1>Your Account</h1>
          <p>By registering, you will have access to your order status, purchase history, and more.</p>
          <button className="reg-toggle-btn" onClick={() => setMode(m => m === "register" ? "login" : "register")}>
            {mode === "register" ? "Login" : "Register"}
          </button>
        </div>
      </div>
      <PreFooter promises={promises} footerCols={footerCols} />
    </div>
  );
}
