import { useState } from "react";
import PreFooter from "../components/PreFooter";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RegisterPage({ promises, footerCols }) {
  const [mode, setMode] = useState("register"); // "register" | "login"
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);

  return (
    <div style={{ padding: "0 16px" }}>
      <div className="regContainer">
        {mode === "register" ? (
          <div className="regForm">
            <h2>Register</h2>
            <label>Email Address</label>
            <input type="email" />
            <label>Password</label>
            <div className="pwWrap">
              <input type={showPw ? "text" : "password"} />
              <FontAwesomeIcon icon={showPw ? faEye : faEyeSlash} className="pw-toggle" onClick={() => setShowPw(p => !p)} />
            </div>
            <label>Confirm Password</label>
            <div className="pwWrap">
              <input type={showPw2 ? "text" : "password"} />
              <FontAwesomeIcon icon={showPw2 ? faEye : faEyeSlash} className="pwToggle" onClick={() => setShowPw2(p => !p)} />
            </div>
            <p className="regPrivacy">
              Your personal data will be used to serve you. For more information, please refer to our <a href="#">privacy policy</a>.
            </p>
            <button className="regSubmit">Register</button>
          </div>
        ) : (
          <div className="regForm">
            <h2>Login</h2>
            <label>Username or Email</label>
            <input type="text" />
            <label>Password</label>
            <div className="pwWrap">
              <input type={showPw ? "text" : "password"} />
              <FontAwesomeIcon icon={showPw ? faEye : faEyeSlash} className="pw-toggle" onClick={() => setShowPw(p => !p)} />
            </div>
            <button className="regSubmit">Login</button>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, fontSize: 12 }}>
              <label><input type="checkbox" /> Keep me signed in</label>
              <a href="#" style={{ color: "var(--red)" }}>Forgot your password?</a>
            </div>
          </div>
        )}
        <div className="regSide">
          <h1>Your Account</h1>
          <p>By registering, you will have access to your order status, purchase history, and more.</p>
          <button className="regToggleBtn" onClick={() => setMode(m => m === "register" ? "login" : "register")}>
            {mode === "register" ? "Login" : "Register"}
          </button>
        </div>
      </div>
      <PreFooter promises={promises} footerCols={footerCols} />
    </div>
  );
}
