import { useState, useEffect, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────
const NAV_LINKS = ["ΑΡΧΙΚΗ", "Η ΕΤΑΙΡΙΑ", "ΟΡΟΙ ΧΡΗΣΗΣ", "ΕΠΙΚΟΙΝΩΝΙΑ", "ΠΟΛΙΤΙΚΗ COOKIES (EE)"];

const SIDEBAR_CATEGORIES = [
  { label: "ΝΕΕΣ ΑΦΙΞΕΙΣ", items: [] },
  { label: "ΓΥΝΑΙΚΕΙΑ", items: ["Τα πιο δημοφιλή","Summer Collection","Εποχιακά","Φορέματα","Ολόσωμες Φόρμες","Τζιν","Μαγιό","Εσώρουχα","Παπούτσια"] },
  { label: "ΑΝΤΡΙΚΑ",    items: ["Τα πιο δημοφιλή","Summer Collection","Hoodies","Μπλούζες","Τζιν","Φόρμες","Μαγιό","Παπούτσια"] },
  { label: "ΑΞΕΣΟΥΑΡ",  items: ["Τσάντες","Beauty","Γυαλιά","Ζώνες","Αξεσουάρ Ένδυσης","Κοσμήματα","Πορτοφόλια","Ρολόγια"] },
  { label: "HOT SALES",  items: [], hot: true },
];

const MEGAMENU = [
  {
    label: "ΓΥΝΑΙΚΕΙΑ",
    cols: [
      { title: "ΠΡΟΤΕΙΝΟΜΕΝΑ", links: ["Νέες κυκλοφορίες","Τα πιο δημοφιλή","Summer Collection","Εποχιακά"] },
      { title: "ΕΝΔΥΣΗ",       links: ["Φορέματα","Ολόσωμες Φόρμες","Τζιν","Μαγιό","Εσώρουχα"] },
      { title: "ΠΑΠΟΥΤΣΙΑ",   links: ["Τακούνια","Sneakers","Αθλητικά","Μποτάκια","Πλατφόρμες"] },
    ],
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&q=80",
    btnColor: "rgb(182,39,30)",
  },
  {
    label: "ΑΝΤΡΙΚΑ",
    cols: [
      { title: "ΠΡΟΤΕΙΝΟΜΕΝΑ", links: ["Νέες κυκλοφορίες","Τα πιο δημοφιλή","Summer Collection"] },
      { title: "ΕΝΔΥΣΗ",       links: ["Hoodies","Μπλούζες","Τζιν","Φόρμες","Μαγιό"] },
      { title: "ΠΑΠΟΥΤΣΙΑ",   links: ["Sneakers","Αθλητικά","Μποτάκια","Σκαρπίνια"] },
    ],
    img: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=300&q=80",
    btnColor: "rgba(184,180,179,255)",
  },
  {
    label: "ΑΞΕΣΟΥΑΡ",
    cols: [
      { title: "",  links: ["Τσάντες","Beauty","Γυαλιά","Ζώνες"] },
      { title: "",  links: ["Αξεσουάρ Ένδυσης","Κοσμήματα","Πορτοφόλια","Ρολόγια"] },
    ],
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&q=80",
    btnColor: "rgba(68,59,52,255)",
  },
];

const CLOTHES = [
  { price: 19.99, src: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&q=80", title: "Δερμάτινη Φούστα" },
  { price: 29.99, src: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80", title: "Jean Παντελόνι" },
  { price: 25.99, src: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80", title: "Ανδρικό Παντελόνι" },
  { price: 22.99, src: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80", title: "Δερμάτινο Jacket" },
  { price: 29.99, src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80", title: "Mini Φόρεμα" },
];

const SHOES = [
  { price: 34.99, src: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80", title: "Μποτάκια με αλυσίδα" },
  { price: 29.99, src: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400&q=80", title: "Μποτάκια λευκά" },
  { price: 25.99, src: "https://images.unsplash.com/photo-1614252234498-9e39f4c72f26?w=400&q=80", title: "Ανδρικά Σκαρπίνια" },
  { price: 34.99, src: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=400&q=80", title: "Γόβες Λευκές" },
  { price: 29.99, src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", title: "Γυναικεία Sneakers" },
];

const HOT_CATEGORIES = [
  { label: "ΦΟΡΕΜΑΤΑ",  img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80" },
  { label: "ΦΟΥΣΤΕΣ",   img: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80" },
  { label: "ΜΠΛΟΥΖΕΣ",  img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80" },
  { label: "ΣΟΡΤΣ",     img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80" },
  { label: "ΑΝΤΡΙΚΑ",   img: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=80" },
  { label: "ΑΞΕΣΟΥΑΡ",  img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80" },
];

const FOOTER_COLS = [
  { title: "ΕΠΙΚΟΙΝΩΝΙΑ",  links: ["Τηλεφωνική Επικοινωνία","ΔΕΥ-ΠΑΡ: 10:00 - 18:00","+30 2310123456","info@myeshop.gr"] },
  { title: "ΧΡΗΣΙΜΑ",      links: ["Οδηγός Μεγέθους","Δωροεπιταγές","Επιστροφές & Ακυρώσεις","Τρόποι Αποστολής & Πληρωμής"] },
  { title: "ΕΤΑΙΡΕΙΑ",     links: ["Ποιοι είμαστε","Καταστήματα","Εργαστείτε μαζί μας"] },
  { title: "ΒΟΗΘΕΙΑ",      links: ["Όροι χρήσης","Όροι κάρτας μέλους","Πολιτική απορρήτου","Ρυθμίσεις cookie"] },
];

// ─── STYLES ───────────────────────────────────────────────────────────────────
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

  /* TOP BAR */
  .top-bar { background: var(--dark); color: #ccc; font-size: 12px; display: flex; justify-content: space-between; align-items: center; padding: 6px 32px; }
  .top-bar a { color: #ccc; }
  .top-bar a:hover { color: #fff; }
  .top-socials { display: flex; gap: 12px; align-items: center; }
  .top-links { display: flex; gap: 20px; }

  /* MAIN HEADER */
  .main-header { position: sticky; top: 0; z-index: 100; background: #fff; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; padding: 0 32px; height: 64px; transition: top 0.3s ease; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
  .main-header.hidden { top: -70px; }
  .logo img { height: 42px; object-fit: contain; }
  .logo-placeholder { font-family: var(--font-display); font-size: 22px; font-weight: 700; letter-spacing: 2px; color: var(--dark); }

  /* HAMBURGER */
  .hamburger-btn { display: none; flex-direction: column; gap: 5px; background: none; border: none; padding: 4px; }
  .hamburger-btn span { display: block; width: 24px; height: 2px; background: var(--dark); transition: 0.3s; }
  @media(max-width:900px){ .hamburger-btn { display: flex; } .megamenu-nav { display: none !important; } }

  /* MEGAMENU NAV */
  .megamenu-nav { display: flex; gap: 28px; align-items: center; font-size: 13px; font-weight: 500; letter-spacing: 1px; }
  .megamenu-nav > a { padding: 4px 0; border-bottom: 2px solid transparent; transition: 0.2s; }
  .megamenu-nav > a:hover { border-color: var(--red); }
  .hot-sale { color: var(--red) !important; }
  .mega-item { position: relative; }
  .mega-item:hover .megadrop { opacity: 1; pointer-events: all; transform: translateY(0); }
  .megadrop { position: absolute; top: calc(100% + 14px); left: 50%; transform: translateX(-50%) translateY(8px); opacity: 0; pointer-events: none; transition: opacity 0.22s ease, transform 0.22s ease; background: #fff; border: 1px solid var(--border); box-shadow: 0 12px 40px rgba(0,0,0,0.12); padding: 28px; display: flex; gap: 32px; min-width: 520px; z-index: 200; }
  .mega-col { display: flex; flex-direction: column; gap: 8px; min-width: 120px; }
  .mega-col-title { font-weight: 700; font-size: 12px; letter-spacing: 1.5px; margin-bottom: 4px; color: var(--dark); }
  .mega-col a { font-size: 13px; color: #555; transition: color 0.15s; }
  .mega-col a:hover { color: var(--red); }
  .mega-img { position: relative; width: 160px; flex-shrink: 0; }
  .mega-img img { width: 100%; height: 160px; object-fit: cover; }
  .mega-img button { position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); color: #fff; border: none; padding: 7px 14px; font-size: 11px; font-weight: 600; letter-spacing: 1px; white-space: nowrap; }

  /* HEADER ACTIONS */
  .header-actions { display: flex; align-items: center; gap: 16px; }
  .header-actions button { background: none; border: none; padding: 4px; display: flex; align-items: center; justify-content: center; }
  .search-wrap { display: flex; align-items: center; border: 1px solid var(--border); padding: 4px 10px; gap: 6px; }
  .search-wrap input { border: none; outline: none; font-size: 13px; width: 140px; font-family: var(--font-body); }
  .icon-btn { background: none; border: none; padding: 4px; position: relative; }
  .login-btn { background: var(--dark); color: #fff; border: none; padding: 8px 14px; font-size: 12px; font-weight: 600; letter-spacing: 1px; white-space: nowrap; }

  /* SIDEBAR */
  .sidebar-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 300; opacity: 0; pointer-events: none; transition: opacity 0.3s; }
  .sidebar-overlay.open { opacity: 1; pointer-events: all; }
  .sidebar { position: fixed; top: 0; left: 0; height: 100%; width: 300px; background: #fff; z-index: 400; transform: translateX(-100%); transition: transform 0.32s cubic-bezier(0.4,0,0.2,1); overflow-y: auto; display: flex; flex-direction: column; }
  .sidebar.open { transform: translateX(0); }
  .sidebar-head { display: flex; justify-content: space-between; align-items: center; padding: 18px 20px; border-bottom: 1px solid var(--border); }
  .sidebar-head span { font-family: var(--font-display); font-size: 18px; }
  .sidebar-close { background: none; border: none; font-size: 24px; color: var(--mid); }
  .sidebar-search { padding: 14px 20px; border-bottom: 1px solid var(--border); display: flex; gap: 8px; }
  .sidebar-search input { flex: 1; border: 1px solid var(--border); padding: 8px 10px; font-family: var(--font-body); font-size: 13px; outline: none; }
  .sidebar-cat { border-bottom: 1px solid var(--border); }
  .sidebar-cat-head { display: flex; align-items: center; justify-content: space-between; padding: 14px 20px; font-size: 13px; font-weight: 600; letter-spacing: 1px; cursor: pointer; }
  .sidebar-cat-head.hot { color: var(--red); }
  .sidebar-cat-toggle { background: none; border: none; font-size: 18px; color: #999; transition: transform 0.2s; }
  .sidebar-cat-toggle.open { transform: rotate(180deg); }
  .sidebar-dropdown { overflow: hidden; transition: max-height 0.28s ease; max-height: 0; }
  .sidebar-dropdown.open { max-height: 400px; }
  .sidebar-dropdown a { display: block; padding: 9px 20px 9px 32px; font-size: 13px; color: #555; border-top: 1px solid #f0f0f0; }
  .sidebar-dropdown a:hover { color: var(--red); background: #fafafa; }

  /* LOGIN DROPDOWN */
  .login-wrap { position: relative; }
  .login-drop { position: absolute; top: calc(100% + 12px); right: 0; width: 300px; background: #fff; border: 1px solid var(--border); box-shadow: 0 12px 40px rgba(0,0,0,0.12); padding: 24px; z-index: 200; opacity: 0; pointer-events: none; transition: opacity 0.2s, transform 0.2s; transform: translateY(6px); }
  .login-drop.open { opacity: 1; pointer-events: all; transform: translateY(0); }
  .login-drop label { display: block; font-size: 12px; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 4px; margin-top: 14px; }
  .login-drop input[type=text], .login-drop input[type=password] { width: 100%; border: 1px solid var(--border); padding: 9px 10px; font-family: var(--font-body); font-size: 13px; outline: none; }
  .login-drop input:focus { border-color: var(--dark); }
  .pw-wrap { position: relative; }
  .pw-wrap input { width: 100%; padding-right: 36px; }
  .pw-toggle { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; color: #999; font-size: 14px; cursor: pointer; }
  .login-drop-submit { width: 100%; background: var(--dark); color: #fff; border: none; padding: 11px; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; margin-top: 16px; }
  .login-drop-footer { display: flex; justify-content: space-between; margin-top: 12px; font-size: 12px; color: #777; }
  .login-drop-footer a { color: #777; }
  .login-drop-footer a:hover { color: var(--red); }
  .login-drop-top { display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid var(--border); padding-bottom: 12px; margin-bottom: 4px; }
  .login-drop-top p { font-size: 12px; color: #777; }
  .login-drop-top a { font-size: 12px; color: var(--red); }

  /* HERO */
  .hero { position: relative; height: 540px; overflow: hidden; }
  .hero img { width: 100%; height: 100%; object-fit: cover; }
  .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(0,0,0,0.38) 0%, transparent 60%); display: flex; align-items: center; }
  .hero-content { padding: 0 80px; color: #fff; }
  .hero-content h1 { font-family: var(--font-display); font-size: 52px; line-height: 1.1; margin-bottom: 20px; }
  .hero-content button { background: #fff; color: var(--dark); border: none; padding: 14px 36px; font-size: 13px; font-weight: 700; letter-spacing: 2px; transition: background 0.2s, color 0.2s; }
  .hero-content button:hover { background: var(--red); color: #fff; }

  /* HOT CATEGORIES */
  .section-title { text-align: center; font-family: var(--font-display); font-size: 32px; padding: 48px 0 24px; letter-spacing: 1px; }
  .cat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; max-width: 1200px; margin: 0 auto 48px; padding: 0 16px; }
  @media(max-width:700px){ .cat-grid { grid-template-columns: repeat(2,1fr); } }
  .cat-card { position: relative; overflow: hidden; aspect-ratio: 3/4; cursor: pointer; }
  .cat-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
  .cat-card:hover img { transform: scale(1.06); }
  .cat-label { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.42); color: #fff; text-align: center; padding: 14px; font-size: 14px; font-weight: 600; letter-spacing: 2px; }

  /* PRODUCT SLIDER */
  .slider-section { padding: 0 0 56px; max-width: 1200px; margin: 0 auto; }
  .slider-tabs { display: flex; justify-content: center; gap: 0; margin-bottom: 28px; }
  .slider-tab { background: none; border: 2px solid var(--dark); padding: 10px 40px; font-size: 13px; font-weight: 600; letter-spacing: 2px; transition: 0.2s; }
  .slider-tab.active { background: var(--dark); color: #fff; }
  .slider-tab:hover:not(.active) { background: #f0f0f0; }
  .slider-viewport { overflow: hidden; position: relative; padding: 0 16px; }
  .slider-track { display: flex; transition: transform 0.4s cubic-bezier(0.4,0,0.2,1); }
  .slide-card { flex: 0 0 calc(100% / 3); padding: 0 8px; }
  @media(max-width:1000px){ .slide-card { flex: 0 0 50%; } }
  @media(max-width:600px){ .slide-card { flex: 0 0 100%; } }
  .slide-inner { position: relative; background: var(--light); }
  .slide-inner img { width: 100%; aspect-ratio: 3/4; object-fit: cover; display: block; cursor: pointer; transition: opacity 0.2s; }
  .slide-inner img:hover { opacity: 0.88; }
  .wishlist-btn { position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.88); border: none; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; font-size: 18px; transition: background 0.2s; }
  .wishlist-btn:hover { background: #fff; }
  .slide-info { padding: 12px 10px 14px; display: flex; justify-content: space-between; align-items: baseline; }
  .slide-title { font-size: 13px; font-weight: 500; }
  .slide-price { font-size: 14px; font-weight: 700; color: var(--red); }
  .add-to-cart { width: 100%; background: var(--dark); color: #fff; border: none; padding: 10px; font-size: 12px; font-weight: 600; letter-spacing: 1.5px; transition: background 0.2s; }
  .add-to-cart:hover { background: var(--red); }
  .slider-controls { display: flex; justify-content: center; gap: 12px; margin-top: 24px; }
  .slider-controls button { background: none; border: 2px solid var(--dark); width: 44px; height: 44px; font-size: 18px; font-weight: 700; transition: 0.2s; }
  .slider-controls button:hover { background: var(--dark); color: #fff; }

  /* MODAL */
  .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.78); z-index: 500; display: flex; align-items: center; justify-content: center; }
  .modal-box { position: relative; background: #fff; max-width: 560px; width: 90%; }
  .modal-box img { width: 100%; max-height: 70vh; object-fit: contain; display: block; }
  .modal-close { position: absolute; top: 10px; right: 14px; background: none; border: none; font-size: 28px; color: var(--dark); z-index: 10; }
  .modal-prev, .modal-next { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.85); border: none; width: 40px; height: 40px; font-size: 20px; font-weight: 700; }
  .modal-prev { left: -50px; }
  .modal-next { right: -50px; }
  @media(max-width:700px){ .modal-prev { left: 4px; } .modal-next { right: 4px; } }

  /* PRE-FOOTER */
  .prefooter-promises { display: grid; grid-template-columns: repeat(4,1fr); gap: 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); margin: 48px 0 0; }
  @media(max-width:800px){ .prefooter-promises { grid-template-columns: repeat(2,1fr); } }
  .promise-card { padding: 28px 24px; border-right: 1px solid var(--border); }
  .promise-card:last-child { border-right: none; }
  .promise-card h3 { font-size: 13px; font-weight: 700; letter-spacing: 1px; margin-bottom: 8px; }
  .promise-card p { font-size: 12px; color: #666; line-height: 1.6; }
  .footer-links { background: rgb(231,231,231); display: grid; grid-template-columns: repeat(4,1fr); gap: 0; padding: 40px 32px; }
  @media(max-width:800px){ .footer-links { grid-template-columns: repeat(2,1fr); gap: 24px; } }
  .footer-col h4 { font-size: 13px; font-weight: 700; letter-spacing: 1px; margin-bottom: 14px; }
  .footer-col p, .footer-col a { display: block; font-size: 13px; color: #555; margin-bottom: 6px; }
  .footer-col a:hover { color: var(--red); }
  .footer-bar { background: var(--dark); color: #999; font-size: 12px; display: flex; justify-content: space-between; align-items: center; padding: 16px 32px; }

  /* TOP BTN */
  .top-btn { position: fixed; bottom: 28px; right: 28px; width: 44px; height: 44px; background: var(--dark); color: #fff; border: none; font-size: 20px; z-index: 300; opacity: 0; transition: opacity 0.3s; pointer-events: none; }
  .top-btn.visible { opacity: 1; pointer-events: all; }

  /* REGISTER PAGE */
  .reg-container { display: flex; min-height: 460px; max-width: 900px; margin: 60px auto; border: 1px solid var(--border); }
  .reg-form { flex: 1; padding: 40px 36px; }
  .reg-form h2 { font-family: var(--font-display); font-size: 26px; margin-bottom: 24px; }
  .reg-form label { display: block; font-size: 12px; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 4px; margin-top: 14px; }
  .reg-form input[type=text], .reg-form input[type=password], .reg-form input[type=email] { width: 100%; border: 1px solid var(--border); padding: 10px 12px; font-family: var(--font-body); font-size: 13px; outline: none; }
  .reg-form input:focus { border-color: var(--dark); }
  .reg-form .pw-wrap { position: relative; }
  .reg-form .pw-wrap input { padding-right: 38px; }
  .reg-form .pw-toggle { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; color: #999; }
  .reg-submit { width: 100%; background: var(--dark); color: #fff; border: none; padding: 12px; font-size: 12px; font-weight: 700; letter-spacing: 2px; margin-top: 20px; }
  .reg-submit:hover { background: var(--red); }
  .reg-privacy { font-size: 11px; color: #888; line-height: 1.6; margin-top: 14px; }
  .reg-privacy a { color: var(--red); }
  .reg-side { flex: 0 0 280px; background: var(--dark); color: #fff; padding: 40px 32px; display: flex; flex-direction: column; justify-content: center; }
  .reg-side h1 { font-family: var(--font-display); font-size: 28px; margin-bottom: 18px; }
  .reg-side p { font-size: 13px; line-height: 1.8; color: #bbb; margin-bottom: 28px; }
  .reg-toggle-btn { background: #fff; color: var(--dark); border: none; padding: 12px 24px; font-size: 12px; font-weight: 700; letter-spacing: 2px; align-self: flex-start; }
  .reg-toggle-btn:hover { background: var(--red); color: #fff; }
  @media(max-width:700px){ .reg-container { flex-direction: column; } .reg-side { flex: none; } }
`;

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function TopBar() {
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

function Sidebar({ open, onClose }) {
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
        {SIDEBAR_CATEGORIES.map(cat => <SidebarDropdownItem key={cat.label} cat={cat} />)}
      </nav>
    </>
  );
}

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

function MegaNav() {
  return (
    <nav className="megamenu-nav">
      <a href="#">ΝΕΕΣ ΑΦΙΞΕΙΣ</a>
      {MEGAMENU.map(item => (
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

function Header({ page, setPage }) {
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
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <header className={`main-header${hidden ? " hidden" : ""}`}>
        <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
          <span /><span /><span />
        </button>
        <div className="logo" onClick={() => setPage("home")} style={{ cursor: "pointer" }}>
          <span className="logo-placeholder">MY ESHOP</span>
        </div>
        <MegaNav />
        <div className="header-actions" ref={loginRef}>
          <div className="search-wrap">
            <input placeholder="Αναζήτηση..." />
            <span>🔍</span>
          </div>
          <LoginDrop open={loginOpen} onToggle={() => setLoginOpen(o => !o)} />
          <button className="icon-btn" onClick={() => setPage("register")} title="Λογαριασμός">👤</button>
          <button className="icon-btn" title="Wishlist">🤍</button>
          <button className="icon-btn" title="Καλάθι">🛒</button>
        </div>
      </header>
    </>
  );
}

function Modal({ items, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  const prev = () => setIdx(i => (i - 1 + items.length) % items.length);
  const next = () => setIdx(i => (i + 1) % items.length);

  useEffect(() => {
    const handler = e => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <button className="modal-prev" onClick={prev}>‹</button>
        <img src={items[idx].src} alt={items[idx].title} />
        <button className="modal-next" onClick={next}>›</button>
      </div>
    </div>
  );
}

function ProductSlider() {
  const [category, setCategory] = useState("clothes");
  const [activeSlide, setActiveSlide] = useState(0);
  const [modal, setModal] = useState(null); // index or null
  const items = category === "clothes" ? CLOTHES : SHOES;

  const getVisible = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 1000) return 2;
    return 3;
  };
  const [visible, setVisible] = useState(getVisible());
  useEffect(() => {
    const handler = () => setVisible(getVisible());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const maxSlide = items.length - visible;
  const prev = () => setActiveSlide(s => Math.max(0, s - 1));
  const next = () => setActiveSlide(s => Math.min(maxSlide, s + 1));

  useEffect(() => {
    setActiveSlide(0);
  }, [category]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(s => (s >= maxSlide ? 0 : s + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [category, maxSlide]);

  const offset = -activeSlide * (100 / visible);

  return (
    <div className="slider-section">
      {modal !== null && (
        <Modal items={items} startIndex={modal} onClose={() => setModal(null)} />
      )}
      <div className="slider-tabs">
        <button className={`slider-tab${category === "clothes" ? " active" : ""}`} onClick={() => setCategory("clothes")}>ΕΝΔΥΣΗ</button>
        <button className={`slider-tab${category === "shoes" ? " active" : ""}`} onClick={() => setCategory("shoes")}>ΠΑΠΟΥΤΣΙΑ</button>
      </div>
      <div className="slider-viewport">
        <div className="slider-track" style={{ transform: `translateX(${offset}%)` }}>
          {items.map((item, i) => (
            <div className="slide-card" key={item.title} style={{ flex: `0 0 ${100 / visible}%` }}>
              <div className="slide-inner">
                <button className="wishlist-btn">🤍</button>
                <img src={item.src} alt={item.title} onClick={() => setModal(i)} />
                <div className="slide-info">
                  <span className="slide-title">{item.title}</span>
                  <span className="slide-price">{item.price.toFixed(2)} €</span>
                </div>
                <button className="add-to-cart">ΠΡΟΣΘΗΚΗ ΣΤΟ ΚΑΛΑΘΙ</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="slider-controls">
        <button onClick={prev}>‹</button>
        <button onClick={next}>›</button>
      </div>
    </div>
  );
}

function HotCategories() {
  return (
    <>
      <h2 className="section-title">Hot Categories</h2>
      <div className="cat-grid">
        {HOT_CATEGORIES.map(cat => (
          <div className="cat-card" key={cat.label}>
            <img src={cat.img} alt={cat.label} />
            <div className="cat-label">{cat.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function Hero() {
  return (
    <div className="hero">
      <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&q=80" alt="Hero" />
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Νέα Συλλογή<br />Spring 2025</h1>
          <button>Αγόρασε τώρα</button>
        </div>
      </div>
    </div>
  );
}

function PreFooter() {
  const promises = [
    { title: "ΔΩΡΕΑΝ ΜΕΤΑΦΟΡΙΚΑ", text: "Παραγγελίες άνω των €20 για Ελλάδα, άνω των €50 για Κύπρο." },
    { title: "24/7 ΕΞΥΠΗΡΕΤΗΣΗ",  text: "Επικοινωνήστε μαζί μας 7 ημέρες στο 2310123456 10:00-18:00." },
    { title: "ΔΩΡΕΑΝ ΑΛΛΑΓΗ",     text: "Αλλάξτε το προϊόν σας δωρεάν για κάθε αγορά σας." },
    { title: "ΑΣΦΑΛΕΙΑ ΠΛΗΡΩΜΩΝ", text: "Όλες οι συναλλαγές γίνονται με την ασφάλεια SSL." },
  ];
  return (
    <>
      <div className="prefooter-promises">
        {promises.map(p => (
          <div className="promise-card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
      <div className="footer-links">
        {FOOTER_COLS.map(col => (
          <div className="footer-col" key={col.title}>
            <h4>{col.title}</h4>
            {col.links.map(l => <a key={l} href="#">{l}</a>)}
          </div>
        ))}
      </div>
      <div className="footer-bar">
        <span>📍 Greece</span>
        <span>© Spyros Drikos All Rights Reserved 2024</span>
      </div>
    </>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <HotCategories />
      <ProductSlider />
      <PreFooter />
    </>
  );
}

// ─── REGISTER PAGE ────────────────────────────────────────────────────────────
function RegisterPage() {
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
      <PreFooter />
    </div>
  );
}

// ─── TOP BUTTON ───────────────────────────────────────────────────────────────
function TopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const h = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <button className={`top-btn${visible ? " visible" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  return (
    <>
      <style>{S}</style>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <TopBar />
      <Header page={page} setPage={setPage} />
      <main>
        {page === "home" && <HomePage />}
        {page === "register" && <RegisterPage />}
      </main>
      <TopButton />
    </>
  );
}
