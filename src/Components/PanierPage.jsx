import { Link } from "react-router-dom";
import Cart from "./Cart";
import "../styles/PanierPage.css";

function PanierPage({ cartItems, onRemoveFromCart, onClearCart, OnAddToCart }) {
  const hasItems = cartItems.length > 0;

  return (
    <div className="panier-page">
      <Cart
        cartItems={cartItems}
        onRemoveFromCart={onRemoveFromCart}
        onClearCart={onClearCart}
        OnAddToCart={OnAddToCart}
      />

      {hasItems && (
        <div className="checkout-section">
          <Link to="/commande">
            <button className="checkout-btn">Passer commande</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default PanierPage;
