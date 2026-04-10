// ─── NAVIGATION DATA ────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  "ΑΡΧΙΚΗ",
  "Η ΕΤΑΙΡΙΑ",
  "ΟΡΟΙ ΧΡΗΣΗΣ",
  "ΕΠΙΚΟΙΝΩΝΙΑ",
  "ΠΟΛΙΤΙΚΗ COOKIES (EE)"
];

// ─── SIDEBAR CATEGORIES ─────────────────────────────────────────────────────────
export const SIDEBAR_CATEGORIES = [
  { label: "ΝΕΕΣ ΑΦΙΞΕΙΣ", items: [] },
  {
    label: "ΓΥΝΑΙΚΕΙΑ",
    items: [
      "Τα πιο δημοφιλή",
      "Summer Collection",
      "Εποχιακά",
      "Φορέματα",
      "Ολόσωμες Φόρμες",
      "Τζιν",
      "Μαγιό",
      "Εσώρουχα",
      "Παπούτσια"
    ]
  },
  {
    label: "ΑΝΤΡΙΚΑ",
    items: [
      "Τα πιο δημοφιλή",
      "Summer Collection",
      "Hoodies",
      "Μπλούζες",
      "Τζιν",
      "Φόρμες",
      "Μαγιό",
      "Παπούτσια"
    ]
  },
  {
    label: "ΑΞΕΣΟΥΑΡ",
    items: [
      "Τσάντες",
      "Beauty",
      "Γυαλιά",
      "Ζώνες",
      "Αξεσουάρ Ένδυσης",
      "Κοσμήματα",
      "Πορτοφόλια",
      "Ρολόγια"
    ]
  },
  { label: "HOT SALES", items: [], hot: true }
];

// ─── MEGAMENU ───────────────────────────────────────────────────────────────────
export const MEGAMENU = [
  {
    label: "ΓΥΝΑΙΚΕΙΑ",
    cols: [
      {
        title: "ΠΡΟΤΕΙΝΟΜΕΝΑ",
        links: ["Νέες κυκλοφορίες", "Τα πιο δημοφιλή", "Summer Collection", "Εποχιακά"]
      },
      {
        title: "ΕΝΔΥΣΗ",
        links: ["Φορέματα", "Ολόσωμες Φόρμες", "Τζιν", "Μαγιό", "Εσώρουχα"]
      },
      {
        title: "ΠΑΠΟΥΤΣΙΑ",
        links: ["Τακούνια", "Sneakers", "Αθλητικά", "Μποτάκια", "Πλατφόρμες"]
      }
    ],
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&q=80",
    btnColor: "rgb(182,39,30)"
  },
  {
    label: "ΑΝΤΡΙΚΑ",
    cols: [
      {
        title: "ΠΡΟΤΕΙΝΟΜΕΝΑ",
        links: ["Νέες κυκλοφορίες", "Τα πιο δημοφιλή", "Summer Collection"]
      },
      {
        title: "ΕΝΔΥΣΗ",
        links: ["Hoodies", "Μπλούζες", "Τζιν", "Φόρμες", "Μαγιό"]
      },
      {
        title: "ΠΑΠΟΥΤΣΙΑ",
        links: ["Sneakers", "Αθλητικά", "Μποτάκια", "Σκαρπίνια"]
      }
    ],
    img: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=300&q=80",
    btnColor: "rgba(184,180,179,255)"
  },
  {
    label: "ΑΞΕΣΟΥΑΡ",
    cols: [
      {
        title: "",
        links: ["Τσάντες", "Beauty", "Γυαλιά", "Ζώνες"]
      },
      {
        title: "",
        links: ["Αξεσουάρ Ένδυσης", "Κοσμήματα", "Πορτοφόλια", "Ρολόγια"]
      }
    ],
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&q=80",
    btnColor: "rgba(68,59,52,255)"
  }
];

// ─── PRODUCT DATA ───────────────────────────────────────────────────────────────
export const CLOTHES = [
  {
    price: 19.99,
    src: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&q=80",
    title: "Δερμάτινη Φούστα"
  },
  {
    price: 29.99,
    src: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80",
    title: "Jean Παντελόνι"
  },
  {
    price: 25.99,
    src: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80",
    title: "Ανδρικό Παντελόνι"
  },
  {
    price: 22.99,
    src: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80",
    title: "Δερμάτινο Jacket"
  },
  {
    price: 29.99,
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
    title: "Mini Φόρεμα"
  }
];

export const SHOES = [
  {
    price: 34.99,
    src: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80",
    title: "Μποτάκια με αλυσίδα"
  },
  {
    price: 29.99,
    src: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400&q=80",
    title: "Μποτάκια λευκά"
  },
  {
    price: 25.99,
    src: "https://images.unsplash.com/photo-1614252234498-9e39f4c72f26?w=400&q=80",
    title: "Ανδρικά Σκαρπίνια"
  },
  {
    price: 34.99,
    src: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=400&q=80",
    title: "Γόβες Λευκές"
  },
  {
    price: 29.99,
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    title: "Γυναικεία Sneakers"
  }
];

export const HOT_CATEGORIES = [
  {
    label: "ΦΟΡΕΜΑΤΑ",
    img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80"
  },
  {
    label: "ΦΟΥΣΤΕΣ",
    img: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80"
  },
  {
    label: "ΜΠΛΟΥΖΕΣ",
    img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80"
  },
  {
    label: "ΣΟΡΤΣ",
    img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80"
  },
  {
    label: "ΑΝΤΡΙΚΑ",
    img: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=80"
  },
  {
    label: "ΑΞΕΣΟΥΑΡ",
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80"
  }
];

// ─── FOOTER DATA ────────────────────────────────────────────────────────────────
export const FOOTER_COLS = [
  {
    title: "ΕΠΙΚΟΙΝΩΝΙΑ",
    links: ["Τηλεφωνική Επικοινωνία", "ΔΕΥ-ΠΑΡ: 10:00 - 18:00", "+30 2310123456", "info@myeshop.gr"]
  },
  {
    title: "ΧΡΗΣΙΜΑ",
    links: [
      "Οδηγός Μεγέθους",
      "Δωροεπιταγές",
      "Επιστροφές & Ακυρώσεις",
      "Τρόποι Αποστολής & Πληρωμής"
    ]
  },
  {
    title: "ΕΤΑΙΡΕΙΑ",
    links: ["Ποιοι είμαστε", "Καταστήματα", "Εργαστείτε μαζί μας"]
  },
  {
    title: "ΒΟΗΘΕΙΑ",
    links: ["Όροι χρήσης", "Όροι κάρτας μέλους", "Πολιτική απορρήτου", "Ρυθμίσεις cookie"]
  }
];

export const PREFOOTER_PROMISES = [
  {
    title: "ΔΩΡΕΑΝ ΜΕΤΑΦΟΡΙΚΑ",
    text: "Παραγγελίες άνω των €20 για Ελλάδα, άνω των €50 για Κύπρο."
  },
  {
    title: "24/7 ΕΞΥΠΗΡΕΤΗΣΗ",
    text: "Επικοινωνήστε μαζί μας 7 ημέρες στο 2310123456 10:00-18:00."
  },
  {
    title: "ΔΩΡΕΑΝ ΑΛΛΑΓΗ",
    text: "Αλλάξτε το προϊόν σας δωρεάν για κάθε αγορά σας."
  },
  {
    title: "ΑΣΦΑΛΕΙΑ ΠΛΗΡΩΜΩΝ",
    text: "Όλες οι συναλλαγές γίνονται με την ασφάλεια SSL."
  }
];
