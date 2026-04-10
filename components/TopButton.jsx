import { useState, useEffect } from "react";

export default function TopButton() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const h = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  
  return (
    <button 
      className={`top-btn${visible ? " visible" : ""}`} 
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}
