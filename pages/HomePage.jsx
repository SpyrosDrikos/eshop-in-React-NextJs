import ProductSlider from "../components/ProductSlider";
import HotCategories from "../components/HotCategories";
import PreFooter from "../components/PreFooter";

function Hero() {
  return (
    <div className="hero">
      <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&q=80" alt="Hero" />
      <div className="heroOverlay">
        <div className="heroContent">
          <h1>New Collection<br />Spring 2026</h1>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default function HomePage({ clothes, shoes, hotCategories, promises, footerCols }) {
  return (
    <>
      <Hero />
      <ProductSlider clothes={clothes} shoes={shoes} />
      <HotCategories categories={hotCategories} />
      <PreFooter promises={promises} footerCols={footerCols} />
    </>
  );
}
