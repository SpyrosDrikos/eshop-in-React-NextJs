import PreFooter from "../components/PreFooter";

export default function CartPage({ promises, footerCols }) {
  // Placeholder for cart items - will be connected to state management later
  const cartItems = [];

  return (
    <div style={{ padding: "0 16px" }}>
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <h2 className="section-title">Το καλάθι σας είναι άδειο</h2>
          <p>Ανακαλύψτε τα καλύτερα προϊόντα μας</p>
          <a href="/">Συνέχισε τις αγορές</a>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            <h2 className="cart-header">Καλάθι αγορών</h2>
            {/* Cart items will be rendered here */}
          </div>
          <div className="cart-summary">
            <h3>Σύνοψη</h3>
            {/* Cart summary will be rendered here */}
          </div>
        </div>
      )}
      <PreFooter promises={promises} footerCols={footerCols} />
    </div>
  );
}
