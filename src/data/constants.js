// ─── NAVIGATION DATA ────────────────────────────────────────────────────────────
export const navLinks = [
  "Home",
  "The Company",
  "Terms of Use",
  "Contact",
  "Privacy Policy (EU)"
];

// ─── SIDEBAR CATEGORIES ─────────────────────────────────────────────────────────
export const sidebarCategories = [
  { label: "NEW ARRIVALS", items: [] },
  {
    label: "WOMEN",
    items: [
      "Most Popular",
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
      "Most Popular",
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
        title: "Most Popular",
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
        title: "Most Popular",
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

// ─── HOT SEARCHES ──────────────────────────────────────────────────────────────
export const hotSearches = [
  {
    id: 1,
    name: "Summer Dresses",
    category: "women",
    icon: "dress",
    image: "https://images.unsplash.com/photo-1595777712802-52adb2f5337c?w=80&q=80"
  },
  {
    id: 2,
    name: "Casual Tees",
    category: "men",
    icon: "shirt",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=80&q=80"
  },
  {
    id: 3,
    name: "Designer Handbags",
    category: "accessories",
    icon: "bag",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=80&q=80"
  },
  {
    id: 4,
    name: "Leather Jackets",
    category: "women",
    icon: "jacket",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=80&q=80"
  },
  {
    id: 5,
    name: "Sports Sneakers",
    category: "men",
    icon: "shoe",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=80&q=80"
  }
];

// ─── RECOMMENDED SEARCHES (profile-based recommendations will be filtered here)
export const recommendedSearches = [
  {
    id: 101,
    name: "Black Jeans",
    category: "women",
    icon: "pants",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=80&q=80"
  },
  {
    id: 102,
    name: "Floral Blouses",
    category: "women",
    icon: "blouse",
    image: "https://images.unsplash.com/photo-1551314679-9c6ae9dec224?w=80&q=80"
  },
  {
    id: 103,
    name: "Formal Shoes",
    category: "accessories",
    icon: "shoe",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=80&q=80"
  },
  {
    id: 104,
    name: "Cargo Pants",
    category: "men",
    icon: "pants",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=80&q=80"
  },
  {
    id: 105,
    name: "Sunglasses",
    category: "accessories",
    icon: "sunglasses",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=80&q=80"
  }
];

// ─── PRODUCT DATA ───────────────────────────────────────────────────────────────
export const clothes = [
  {
    price: 19.99,
    src: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&q=80",
    title: "Leather Dress",
    colors: ["Black", "White", "Red", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    price: 29.99,
    src: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80",
    title: "Jean Pants",
    colors: ["Blue", "Black", "Grey", "Light Blue"],
    sizes: ["26", "28", "30", "32", "34", "36"]
  },
  {
    price: 25.99,
    src: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80",
    title: "Men's Pants",
    colors: ["Black", "Grey", "Navy", "Brown"],
    sizes: ["28", "30", "32", "34", "36", "38"]
  },
  {
    price: 22.99,
    src: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80",
    title: "Leather Jacket",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    price: 29.99,
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
    title: "Mini Dress",
    colors: ["Black", "Red", "Gold", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"]
  }
];

export const shoes = [
  {
    price: 34.99,
    src: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80",
    title: "Leather Boots",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["35", "36", "37", "38", "39", "40", "41", "42"]
  },
  {
    price: 29.99,
    src: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400&q=80",
    title: "White Boots",
    colors: ["White", "Cream", "Off-White"],
    sizes: ["35", "36", "37", "38", "39", "40", "41", "42"]
  },
  {
    price: 25.99,
    src: "https://images.unsplash.com/photo-1614252234498-9e39f4c72f26?w=400&q=80",
    title: "Men's Sandals",
    colors: ["Black", "Brown", "Navy"],
    sizes: ["40", "41", "42", "43", "44", "45", "46"]
  },
  {
    price: 34.99,
    src: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=400&q=80",
    title: "White Platforms",
    colors: ["White", "Black", "Nude"],
    sizes: ["35", "36", "37", "38", "39", "40", "41", "42"]
  },
  {
    price: 29.99,
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    title: "Women's Sneakers",
    colors: ["White", "Black", "Pink", "Coral"],
    sizes: ["35", "36", "37", "38", "39", "40", "41", "42"]
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
    label: "MEN'S WEARABLES",
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
