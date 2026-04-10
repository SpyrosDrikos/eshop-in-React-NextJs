import { useState, useEffect, useRef } from "react";

// ─── TOPBAR ─────────────────────────────────────────────────────────────────────
function TopBar() {
  const NAV_LINKS = ["ΑΡΧΙΚΗ", "Η ΕΤΑΙΡΙΑ", "ΟΡΟΙ ΧΡΗΣΗΣ", "ΕΠΙΚΟΙΝΩΝΙΑ", "ΠΟΛΙΤΙΚΗ COOKIES (EE)"];
  
  return (
    <div className="top-bar">
      <div className="top-socials">
        <a href="mailto:info@myeshop.gr">info@myeshop.gr</a>
        <span>+30 2310 123 456</span>
        {["facebook","instagram","twitter","pinterest"].map(s => (
          <a key={s} href="#" aria-label={s}>
            <i className={`fa fa-${s}`} />
          </a>
        ))}
      </div>
      <div className="top-links">
        {NAV_LINKS.map(l => <a key={l} href="#">{l}</a>)}
      </div>
    </div>
  );
}

// ─── SIDEBAR COMPONENTS ────────────────────────────────────────────────────────
function SidebarDropdownItem({ cat }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="sidebar-cat">
      <div
        className={`sidebar-cat-head${cat.hot ? " hot" : ""}`}
        onClick={() => cat.items.length && setOpen(o => !o)}
      >
        <span>{cat.label}</span>
        {cat.items.length > 0 && (
          <button className={`sidebar-cat-toggle${open ? " open" : ""}`}>&#8964;</button>
        )}
      </div>
      {cat.items.length > 0 && (
        <div className={`sidebar-dropdown${open ? " open" : ""}`}>
          {cat.items.map(item => <a key={item} href="#">{item}</a>)}
        </div>
      )}
    </div>
  );
}

function Sidebar({ open, onClose, sidebarCategories }) {
  return (
    <>
      <div className={`sidebar-overlay${open ? " open" : ""}`} onClick={onClose} />
      <nav className={`sidebar${open ? " open" : ""}`}>
        <div className="sidebar-head">
          <span>MY ESHOP</span>
          <button className="sidebar-close" onClick={onClose}>×</button>
        </div>
        <div className="sidebar-search">
          <input placeholder="Αναζήτηση..." />
          <button>🔍</button>
        </div>
        {sidebarCategories.map(cat => <SidebarDropdownItem key={cat.label} cat={cat} />)}
      </nav>
    </>
  );
}

// ─── LOGIN DROPDOWN ────────────────────────────────────────────────────────────
function LoginDrop({ open, onToggle }) {
  const [showPw, setShowPw] = useState(false);
  return (
    <div className="login-wrap">
      <button className="login-btn" onClick={onToggle}>ΣΥΝΔΕΣΗ / ΕΓΓΡΑΦΗ</button>
      <div className={`login-drop${open ? " open" : ""}`}>
        <div className="login-drop-top">
          <p>Νέος πελάτης;</p>
          <a href="#register">Δημιούργησε λογαριασμό →</a>
        </div>
        <label>Όνομα ή email</label>
        <input type="text" />
        <label>Password</label>
        <div className="pw-wrap">
          <input type={showPw ? "text" : "password"} />
          <button className="pw-toggle" onClick={() => setShowPw(p => !p)}>{showPw ? "🙈" : "👁"}</button>
        </div>
        <button className="login-drop-submit">ΣΥΝΔΕΣΗ</button>
        <div className="login-drop-footer">
          <label><input type="checkbox" /> Να παραμένω σε σύνδεση</label>
          <a href="#">Ξέχασες τον κωδικό;</a>
        </div>
      </div>
    </div>
  );
}

// ─── MEGAMENU NAV ──────────────────────────────────────────────────────────────
function MegaNav({ megamenu }) {
  return (
    <nav className="megamenu-nav">
      <a href="#">ΝΕΕΣ ΑΦΙΞΕΙΣ</a>
      {megamenu.map(item => (
        <div className="mega-item" key={item.label}>
          <a href="#">{item.label} &#8964;</a>
          <div className="megadrop">
            {item.cols.map((col, i) => (
              <div className="mega-col" key={i}>
                {col.title && <div className="mega-col-title">{col.title}</div>}
                {col.links.map(l => <a key={l} href="#">{l}</a>)}
              </div>
            ))}
            <div className="mega-img">
              <img src={item.img} alt={item.label} />
              <div className="absolute">
                <button style={{ backgroundColor: item.btnColor }}>SHOW ALL</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <a href="#" className="hot-sale">HOT SALES</a>
    </nav>
  );
}

// ─── HEADER ───────────────────────────────────────────────────────────────────
export default function Header({ page, setPage, megamenu, sidebarCategories }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const prevScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const cur = window.scrollY;
      setHidden(cur > prevScroll.current && cur > 80);
      prevScroll.current = cur;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close login drop when clicking outside
  const loginRef = useRef();
  useEffect(() => {
    const handler = e => {
      if (loginRef.current && !loginRef.current.contains(e.target)) setLoginOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} sidebarCategories={sidebarCategories} />
      <TopBar />
      <header className={`main-header${hidden ? " hidden" : ""}`}>
        <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
          <span /><span /><span />
        </button>
        <div className="logo" onClick={() => setPage("home")} style={{ cursor: "pointer" }}>
          <span className="logo-placeholder">MY ESHOP</span>
        </div>
        <MegaNav megamenu={megamenu} />
        <div className="header-actions" ref={loginRef}>
          <div className="search-wrap">
            <input placeholder="Αναζήτηση..." />
            <span>🔍</span>
          </div>
          <LoginDrop open={loginOpen} onToggle={() => setLoginOpen(o => !o)} />
          <button className="icon-btn" onClick={() => setPage("register")} title="Λογαριασμός">👤</button>
          <button className="icon-btn" title="Wishlist">🤍</button>
          <button className="icon-btn" onClick={() => setPage("cart")} title="Καλάθι">🛒</button>
        </div>
      </header>
    </>
  );
}
