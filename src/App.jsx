import { useState } from "react";

// ─── IMPORTS ───────────────────────────────────────────────────────────────────
// Components
import Header from "../components/Header.jsx";
import TopButton from "../components/TopButton.jsx";

// Pages
import HomePage from "../pages/HomePage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import CartPage from "../pages/CartPage.jsx";

// Data & Constants
import {
  MEGAMENU,
  SIDEBAR_CATEGORIES,
  CLOTHES,
  SHOES,
  HOT_CATEGORIES,
  FOOTER_COLS,
  PREFOOTER_PROMISES
} from "./data/constants";

// Styles
import "../styles/base.css";
import "../styles/home.css";
import "../styles/register.css";
import "../styles/cart.css";

// ─── APP COMPONENT ────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");

  // For demo purposes - these would come from API/state management in production
  const promises = PREFOOTER_PROMISES;
  const footerCols = FOOTER_COLS;
  const clothes = CLOTHES;
  const shoes = SHOES;
  const hotCategories = HOT_CATEGORIES;
  const megamenu = MEGAMENU;
  const sidebarCategories = SIDEBAR_CATEGORIES;

  const S = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Jost:wght@300;400;500;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --red: #b6271e;
    --dark: #1a1a1a;
    --mid: #3a3a3a;
    --light: #f5f5f3;
    --border: #e0e0e0;
    --font-display: 'Playfair Display', serif;
    --font-body: 'Jost', sans-serif;
  }
  body { font-family: var(--font-body); background: #fff; color: var(--dark); }
  a { text-decoration: none; color: inherit; }
  button { cursor: pointer; font-family: var(--font-body); }
  main { min-height: calc(100vh - 400px); }
  `;

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <style>{S}</style>
      <Header page={page} setPage={setPage} megamenu={megamenu} sidebarCategories={sidebarCategories} />
      <main>
        {page === "home" && <HomePage clothes={clothes} shoes={shoes} hotCategories={hotCategories} promises={promises} footerCols={footerCols} />}
        {page === "register" && <RegisterPage promises={promises} footerCols={footerCols} />}
        {page === "cart" && <CartPage promises={promises} footerCols={footerCols} />}
      </main>
      <TopButton />
    </>
  );
}
