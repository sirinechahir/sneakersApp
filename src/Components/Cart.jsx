import React from "react";
import Menu from "./Menu";

function Cart({ cartItems, onRemoveFromCart, onClearCart }) {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.prix * item.quantity), 0);

    return (
        <div className="cart-page-container">
            <Menu /> {/* Menu en haut */}

            <div className="cart-block">
                <h2>🛒 Panier</h2>
                {cartItems.length === 0 ? (
                    <h3>Votre panier est vide, continuez vos achats.</h3>
                ) : (
                    <>
                        <ul>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <strong>{item.nom}</strong> ({item.quantity}) - {(item.prix * item.quantity).toFixed(2)} €
                                    <button onClick={() => onRemoveFromCart(item.id)} className="remove-item-btn">
                                        Retirer
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <p>Total articles : {totalItems}</p>
                        <p>Prix total : {totalPrice.toFixed(2)} €</p>
                        <button onClick={onClearCart} className="clear-cart-btn">
                            Vider le panier
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;
