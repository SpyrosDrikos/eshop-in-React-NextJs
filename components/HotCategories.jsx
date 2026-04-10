export default function HotCategories({ categories }) {
  return (
    <>
      <h2 className="section-title">Hot Categories</h2>
      <div className="cat-grid">
        {categories.map(cat => (
          <div className="cat-card" key={cat.label}>
            <img src={cat.img} alt={cat.label} />
            <div className="cat-label">{cat.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
