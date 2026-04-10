// ─── NAVIGATION DATA ────────────────────────────────────────────────────────────
export const navLinks = [
  "Home",
  "The Company",
  "Terms of Use",
  "Contact",
  "Privacy Policy (EE)"
];

// ─── SIDEBAR CATEGORIES ─────────────────────────────────────────────────────────
export const sidebarCategories = [
  { label: "NEW ARRIVALS", items: [] },
  {
    label: "WOMEN",
    items: [
      "The Most Popular",
      "Summer Collection",
      "Seasonal",
      "Dresses",
      "Jumpsuits",
      " Jeans",
      "Blouses",
      "Underwear",
      "Shoes"
    ]
  },
  {
    label: "MEN",
    items: [
      "The Most Popular",
      "Summer Collection",
      "Hoodies",
      "Shirts",
      "Pants",
      "Jackets",
      "Sweaters",
      "Shoes"
    ]
  },
  {
    label: "ACCESSORIES",
    items: [
      "Bags",
      "Beauty",
      "Sunglasses",
      "Belts",
      "Accessories",
      "Jewelry",
      "Wallets",
      "Watches"
    ]
  },
  { label: "HOT SALES", items: [], hot: true }
];

// ─── MEGAMENU ───────────────────────────────────────────────────────────────────
export const megamenu = [
  {
    label: "WOMEN",
    cols: [
      {
        title: "The Most Popular",
        links: ["New Arrivals", "Best Sellers", "Summer Collection", "Seasonal Picks"]
      },
      {
        title: "CLOTHING",
        links: ["Dresses", "Outfits", "Jeans", "Blouses", "Underwear"]
      },
      {
        title: "SHOES",
        links: ["Sneakers", "Athletic Shoes", "Boots", "Sandals", "Platforms"]
      }
    ],
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&q=80",
    btnColor: "rgb(182,39,30)"
  },
  {
    label: "MEN",
    cols: [
      {
        title: "The Most Popular",
        links: ["New Arrivals", "Best Sellers", "Summer Collection"]
      },
      {
        title: "CLOTHING",
        links: ["Hoodies", "Shirts", "Pants", "Jackets", "Sweaters"]
      },
      {
        title: "SHOES",
        links: ["Sneakers", "Athletic Shoes", "Boots", "Sandals", "Platforms"]
      }
    ],
    img: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=300&q=80",
    btnColor: "rgba(184,180,179,255)"
  },
  {
    label: "ACCESSORIES",
    cols: [
      {
        title: "",
        links: ["Bags", "Beauty", "Sunglasses", "Belts"]
      },
      {
        title: "",
        links: ["Accessories", "Jewelry", "Wallets", "Watches"]
      }
    ],
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&q=80",
    btnColor: "rgba(68,59,52,255)"
  }
];

// ─── PRODUCT DATA ───────────────────────────────────────────────────────────────
export const clothes = [
  {
    price: 19.99,
    src: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&q=80",
    title: "Leather Dress"
  },
  {
    price: 29.99,
    src: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80",
    title: "Jean Pants"
  },
  {
    price: 25.99,
    src: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80",
    title: "Men's Pants"
  },
  {
    price: 22.99,
    src: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80",
    title: "Leather Jacket"
  },
  {
    price: 29.99,
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
    title: "Mini Dress"
  }
];

export const shoes = [
  {
    price: 34.99,
    src: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80",
    title: "Leather Boots"
  },
  {
    price: 29.99,
    src: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400&q=80",
    title: "White Boots"
  },
  {
    price: 25.99,
    src: "https://images.unsplash.com/photo-1614252234498-9e39f4c72f26?w=400&q=80",
    title: "Men's Sandals"
  },
  {
    price: 34.99,
    src: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=400&q=80",
    title: "White Platforms"
  },
  {
    price: 29.99,
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    title: "Women's Sneakers"
  }
];

export const hotCategories = [
  {
    label: "DRESSES",
    img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80"
  },
  {
    label: "SKIRTS",
    img: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80"
  },
  {
    label: "BLOUSES",
    img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80"
  },
  {
    label: "JEANS",
    img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80"
  },
  {
    label: "MEN'S PANTS",
    img: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=80"
  },
  {
    label: "ACCESSORIES",
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80"
  }
];

// ─── FOOTER DATA ────────────────────────────────────────────────────────────────
export const footerCols = [
  {
    title: "CONTACT",
    links: ["CONTACT US", "MON-FRI: 10:00 - 18:00", "+30 2310123456", "info@myeshop.gr"]
  },
  {
    title: "USEFUL LINKS",
    links: [
      "Size Guide",
      "Gift Cards",
      "Returns & Exchanges",
      "Shipping & Payment Methods"
    ]
  },
  {
    title: "COMPANY",
    links: ["Who We Are", "Stores", "Work With Us"]
  },
  {
    title: "LEGAL",
    links: ["Terms of Use", "Member Card Terms", "Privacy Policy", "Cookie Settings"]
  }
];

export const prefooterPromises = [
  {
    title: "FREE SHIPPING",
    text: "Orders over €20 for Greece, over €50 for Cyprus."
  },
  {
    title: "24/7 CUSTOMER SUPPORT",
    text: "Contact us 7 days a week at 2310123456 10:00-18:00."
  },
  {
    title: "FREE EXCHANGE",
    text: "Exchange your product for free with every purchase."
  },
  {
    title: "SECURE PAYMENTS",
    text: "All transactions are secured with SSL encryption."
  }
];
