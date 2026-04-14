import PreFooter from "../components/PreFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useI18n } from "../src/i18n/i18ncontext";
import { useState } from "react";

export default function CartPage({ cartItems = [], setCartItems, promises, footerCols, setPage }) {
  const { t } = useI18n();
  const [promoCode, setPromoCode] = useState("");

  const updateQty = (id, delta) => {
    setCartItems(prev =>
      prev.map(item => item.id === id
        ? { ...item, qty: Math.max(1, item.qty + delta) }
        : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 20 ? 0 : 4.99;
  const total = subtotal + shipping;

  return (
    <div style={{ padding: "0 16px" }}>
      {cartItems.length === 0 ? (
        <div className="cartEmpty">
          <h2 className="sectionTitle">{t.cart.empty}</h2>
          <p>{t.cart.discover}</p>
          <a href="#" onClick={e => { e.preventDefault(); setPage("home"); }}>
            {t.cart.continueShopping}
          </a>
        </div>
      ) : (
        <div className="cartContainer">
          <div className="cartItems">
            <h2 className="cartHeader">{t.cart.yourCart}</h2>
            {cartItems.map(item => (
              <div className="cartItem" key={item.id}>
                <img className="cartItemImg" src={item.src} alt={item.title} />
                <div className="cartItemContent">
                  <div>
                    <div className="cartItemTitle">{item.title}</div>
                    {item.selectedSize && (
                      <div style={{ fontSize: 12, color: "#777", marginTop: 4 }}>
                        {t.product.size}: {item.selectedSize}
                      </div>
                    )}
                  </div>
                  <div className="cartItemControls">
                    <div className="quantityControl">
                      <button onClick={() => updateQty(item.id, -1)}>−</button>
                      <input readOnly value={item.qty} />
                      <button onClick={() => updateQty(item.id, 1)}>+</button>
                    </div>
                    <span className="cartItemPrice">€{(item.price * item.qty).toFixed(2)}</span>
                    <button className="removeBtn" onClick={() => removeItem(item.id)} title={t.cart.remove}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cartSummary">
            <h3>{t.cart.summary}</h3>
            <div className="summaryRow">
              <span>{t.cart.subtotal}</span>
              <span>€{subtotal.toFixed(2)}</span>
            </div>
            <div className="summaryRow">
              <span>{t.cart.shipping}</span>
              <span>{shipping === 0 ? t.cart.free : `€${shipping.toFixed(2)}`}</span>
            </div>
            <div className="summaryRow total">
              <span>{t.cart.total}</span>
              <span>€{total.toFixed(2)}</span>
            </div>
            <div className="promoCode">
              <input
                placeholder={t.cart.promoCode}
                value={promoCode}
                onChange={e => setPromoCode(e.target.value)}
              />
              <button>{t.cart.apply}</button>
            </div>
            <button className="checkoutBtn">{t.cart.checkout}</button>
            <button className="continueShopping" onClick={() => setPage("home")}>
              {t.cart.continueShopping}
            </button>
          </div>
        </div>
      )}
      <PreFooter promises={promises} footerCols={footerCols} />
    </div>
  );
}