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
  megamenu,
  sidebarCategories,
  clothes,
  shoes,
  hotCategories,
  footerCols,
  prefooterPromises
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
  const promises = prefooterPromises;
  const footerColsData = footerCols;
  const clothesData = clothes;
  const shoesData = shoes;
  const hotCategoriesData = hotCategories;
  const megamenuData = megamenu;
  const sidebarCategoriesData = sidebarCategories;

  const S = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Jost:wght@300;400;500;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --body-color: #f9f6f0;
    --red: #b6271e;
    --dark: #1a1a1a;
    --mid: #3a3a3a;
    --light: #f5f5f3;
    --border: #e0e0e0;
    --font-display: 'Playfair Display', serif;
    --font-body: 'Jost', sans-serif;
  }
  body { font-family: var(--font-body); background-color: var(--body-color); color: var(--dark); }
  a { text-decoration: none; color: inherit; }
  button { cursor: pointer; font-family: var(--font-body); }
  main { min-height: calc(100vh - 400px); }
  `;

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <style>{S}</style>
      <Header page={page} setPage={setPage} megamenu={megamenuData} sidebarCategories={sidebarCategoriesData} />
      <main>
        {page === "home" && <HomePage clothes={clothesData} shoes={shoesData} hotCategories={hotCategoriesData} promises={promises} footerCols={footerColsData} />}
        {page === "register" && <RegisterPage promises={promises} footerCols={footerColsData} />}
        {page === "cart" && <CartPage promises={promises} footerCols={footerColsData} />}
      </main>
      <TopButton />
    </>
  );
}
