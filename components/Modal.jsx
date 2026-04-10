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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <button className="modal-prev" onClick={prev}>‹</button>
        <img src={items[idx].src} alt={items[idx].title} />
        <button className="modal-next" onClick={next}>›</button>
      </div>
    </div>
  );
}
