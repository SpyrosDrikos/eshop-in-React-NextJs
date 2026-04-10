import { faEye, faEyeSlash, faHeart, faSearch, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";

// ─── TOPBAR ─────────────────────────────────────────────────────────────────────
function TopBar() {
  const navLinks = ["Home", "Company", "Terms of Use", "Contact", "Privacy Policy (EU)"];
  
  return (
    <div className="topBar">
      <div className="topSocials">
        <a href="mailto:info@myeshop.gr">info@myeshop.gr</a>
        <span>+30 2310 123 456</span>
        {["facebook","instagram","twitter","pinterest"].map(s => (
          <a key={s} href="#" aria-label={s}>
            <i className={`fa fa-${s}`} />
          </a>
        ))}
      </div>
      <div className="topLinks">
        {navLinks.map(l => <a key={l} href="#">{l}</a>)}
      </div>
    </div>
  );
}

// ─── SIDEBAR COMPONENTS ────────────────────────────────────────────────────────
function SidebarDropdownItem({ cat }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="sidebarCat">
      <div
        className={`sidebarCatHead${cat.hot ? " hot" : ""}`}
        onClick={() => cat.items.length && setOpen(o => !o)}
      >
        <span>{cat.label}</span>
        {cat.items.length > 0 && (
          <button className={`sidebarCatToggle${open ? " open" : ""}`}>&#8964;</button>
        )}
      </div>
      {cat.items.length > 0 && (
        <div className={`sidebarDropdown${open ? " open" : ""}`}>
          {cat.items.map(item => <a key={item} href="#">{item}</a>)}
        </div>
      )}
    </div>
  );
}

function Sidebar({ open, onClose, sidebarCategories }) {
  return (
    <>
      <div className={`sidebarOverlay${open ? " open" : ""}`} onClick={onClose} />
      <nav className={`sidebar${open ? " open" : ""}`}>
        <div className="sidebarHead">
          <span>MY ESHOP</span>
          <button className="sidebarClose" onClick={onClose}>×</button>
        </div>
        <div className="sidebarSearch">
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
    <div className="loginWrap">
      <button className="loginBtn" onClick={onToggle}>Login / Sign In</button>
      <div className={`loginDrop${open ? " open" : ""}`}>
        <div className="loginDropTop">
          <p>New Customer;</p>
          <a href="#register">Create Account →</a>
        </div>
        <label>Username or Email</label>
        <input type="text" />
        <label>Password</label>
        <div className="pwWrap">
          <input type={showPw ? "text" : "password"} />
          <FontAwesomeIcon icon={showPw ? faEye : faEyeSlash} className="pwToggle" onClick={() => setShowPw(p => !p)} />
        </div>
        <button className="loginDropSubmit">Login</button>
        <div className="loginDropFooter">
          <label><input type="checkbox" /> Keep me signed in</label>
          <a href="#">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
}

// ─── MEGAMENU NAV ──────────────────────────────────────────────────────────────
function MegaNav({ megamenu }) {
  return (
    <nav className="megamenuNav">
      <a href="#">NEW ARRIVALS</a>
      {megamenu.map(item => (
        <div className="megaItem" key={item.label}>
          <a href="#">{item.label} &#8964;</a>
          <div className="megadrop">
            {item.cols.map((col, i) => (
              <div className="megaCol" key={i}>
                {col.title && <div className="megaColTitle">{col.title}</div>}
                {col.links.map(l => <a key={l} href="#">{l}</a>)}
              </div>
            ))}
            <div className="megaImg">
              <img src={item.img} alt={item.label} />
              <div className="absolute">
                <button style={{ backgroundColor: item.btnColor }}>SHOW ALL</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <a href="#" className="hotSale">HOT SALES</a>
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
      <header className={`mainHeader${hidden ? " hidden" : ""}`}>
        <button className="hamburgerBtn" onClick={() => setSidebarOpen(true)}>
          <span /><span /><span />
        </button>
        <div className="logo" onClick={() => setPage("home")} style={{ cursor: "pointer" }}>
          <span className="logoPlaceholder">MY ESHOP</span>
        </div>
        <MegaNav megamenu={megamenu} />
        <div className="headerActions" ref={loginRef}>
          <div className="searchWrap">
            <input placeholder="Search..." />
          <FontAwesomeIcon icon={faSearch} className="searchBtn" />
          </div>
          <LoginDrop open={loginOpen} onToggle={() => setLoginOpen(o => !o)} />
          <FontAwesomeIcon icon={faUser} className="iconBtn" onClick={() => setPage("register")} title="Account" />
          <FontAwesomeIcon icon={faHeart} className="iconBtn" title="Wishlist" />
          <FontAwesomeIcon icon={faShoppingCart} className="iconBtn" onClick={() => setPage("cart")} title="Cart" />
        </div>
      </header>
    </>
  );
}
