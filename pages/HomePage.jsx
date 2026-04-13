import ProductSlider from "../components/ProductSlider";
import HotCategories from "../components/HotCategories";
import PreFooter from "../components/PreFooter";
import PromoBanner from "../components/PromoBanner";

function Hero() {
  return (
    <div className="hero">
      <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&q=80" alt="Hero" />
      <div className="heroOverlay">
        <div className="heroContent">
          <h1>New Collection<br />Spring 2026</h1>
          <button>Shop The Collection</button>
        </div>
      </div>
    </div>
  );
}

export default function HomePage({ clothes, shoes, hotCategories, promises, footerCols }) {
  return (
    <>
      <Hero />
      <PromoBanner 
        title="Limited Time Offer"
        subtitle="Get up to 50% off on selected items. Don't miss out!"
        buttonText="Shop Now"
        buttonLink="#"
        image="https://images.unsplash.com/photo-1515222134207-3a0f31f9eeac?w=1200&q=80"
      />
      <ProductSlider clothes={clothes} shoes={shoes} />
      <HotCategories categories={hotCategories} />
      <PreFooter promises={promises} footerCols={footerCols} />
    </>
  );
}
