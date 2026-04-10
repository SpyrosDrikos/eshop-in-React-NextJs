import ProductSlider from "../components/ProductSlider";
import HotCategories from "../components/HotCategories";
import PreFooter from "../components/PreFooter";

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

export default function HomePage({ clothes, shoes, hotCategories, promises, footerCols }) {
  return (
    <>
      <Hero />
      <HotCategories categories={hotCategories} />
      <ProductSlider clothes={clothes} shoes={shoes} />
      <PreFooter promises={promises} footerCols={footerCols} />
    </>
  );
}
