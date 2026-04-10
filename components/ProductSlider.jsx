import { useState, useEffect } from "react";
import Modal from "./Modal";

export default function ProductSlider({ clothes, shoes }) {
  const [category, setCategory] = useState("clothes");
  const [activeSlide, setActiveSlide] = useState(0);
  const [modal, setModal] = useState(null);
  const items = category === "clothes" ? clothes : shoes;

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
    <div className="sliderSection">
      {modal !== null && (
        <Modal items={items} startIndex={modal} onClose={() => setModal(null)} />
      )}
      <div className="sliderTabs">
        <button 
          className={`sliderTab${category === "clothes" ? " active" : ""}`} 
          onClick={() => setCategory("clothes")}
        >
          Clothes
        </button>
        <button 
          className={`sliderTab${category === "shoes" ? " active" : ""}`} 
          onClick={() => setCategory("shoes")}
        >
          Shoes
        </button>
      </div>
      <div className="sliderViewport">
        <div className="sliderTrack" style={{ transform: `translateX(${offset}%)` }}>
          {items.map((item, i) => (
            <div className="slideCard" key={item.title} style={{ flex: `0 0 ${100 / visible}%` }}>
              <div className="slideInner">
                <button className="wishlistBtn">🤍</button>
                <img src={item.src} alt={item.title} onClick={() => setModal(i)} />
                <div className="slideInfo">
                  <span className="slideTitle">{item.title}</span>
                  <span className="slidePrice">{item.price.toFixed(2)} €</span>
                </div>
                <button className="addToCart">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sliderControls">
        <button onClick={prev}>‹</button>
        <button onClick={next}>›</button>
      </div>
    </div>
  );
}
