import PreFooter from "../components/PreFooter";

export default function CartPage({ promises, footerCols }) {
  // Placeholder for cart items - will be connected to state management later
  const cartItems = [];

  return (
    <div style={{ padding: "0 16px" }}>
      {cartItems.length === 0 ? (
        <div className="cartEmpty">
          <h2 className="sectionTitle">Your Cart is Empty</h2>
          <p>Discover our best products</p>
          <a href="/">Continue Shopping</a>
        </div>
      ) : (
        <div className="cartContainer">
          <div className="cartItems">
            <h2 className="cartHeader">Your Shopping Cart</h2>
            {/* Cart items will be rendered here */}
          </div>
          <div className="cartSummary">
            <h3>Summary</h3>
            {/* Cart summary will be rendered here */}
          </div>
        </div>
      )}
      <PreFooter promises={promises} footerCols={footerCols} />
    </div>
  );
}
