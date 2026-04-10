export default function HotCategories({ categories }) {
  return (
    <>
      <h2 className="sectionTitle">Hot Categories</h2>
      <div className="catGrid">
        {categories.map(cat => (
          <div className="catCard" key={cat.label}>
            <img src={cat.img} alt={cat.label} />
            <div className="catLabel">{cat.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
