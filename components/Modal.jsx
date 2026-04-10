import { useState, useEffect } from "react";

export default function Modal({ items, startIndex, onClose }) {
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
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalBox" onClick={e => e.stopPropagation()}>
        <button className="modalClose" onClick={onClose}>×</button>
        <button className="modalPrev" onClick={prev}>‹</button>
        <img src={items[idx].src} alt={items[idx].title} />
        <button className="modalNext" onClick={next}>›</button>
      </div>
    </div>
  );
}
