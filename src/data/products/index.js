import dresses from "./dresses.json";
import skirts from "./skirts.json";
import blouses from "./blouses.json";
import jeans from "./jeans.json";
import mensPants from "./mens-pants.json";
import accessories from "./accessories.json";

export const allProducts = {
  dresses,
  skirts,
  blouses,
  jeans,
  "mens-pants": mensPants,
  accessories
};

export const categoryMeta = {
  dresses: {
    label: "DRESSES",
    img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80"
  },
  skirts: {
    label: "SKIRTS",
    img: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80"
  },
  blouses: {
    label: "BLOUSES",
    img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80"
  },
  jeans: {
    label: "JEANS",
    img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80"
  },
  "mens-pants": {
    label: "MEN'S PANTS",
    img: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=80"
  },
  accessories: {
    label: "ACCESSORIES",
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80"
  }
};

export const getBrands = (category) => {
  const products = allProducts[category] || [];
  return [...new Set(products.map(p => p.brand))].sort();
};

export const getColors = (category) => {
  const products = allProducts[category] || [];
  const colors = products.flatMap(p => p.colors);
  return [...new Set(colors)].sort();
};

export const getSizes = (category) => {
  const products = allProducts[category] || [];
  const sizes = products.flatMap(p => p.sizes);
  return [...new Set(sizes)];
};

export { dresses, skirts, blouses, jeans, mensPants, accessories };