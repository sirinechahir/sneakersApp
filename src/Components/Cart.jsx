

function Cart({ cartItems, onRemoveFromCart, onClearCart, OnAddToCart }) {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.prix * item.quantity), 0);

    return (
        <div className="cart-page-container">
            <div className="cart-block">
                <strong><h3>Livraison GRATUITE à partir de 100 € d'achat !</h3></strong>
                <h2>🛒 Panier</h2>

                {cartItems.length === 0 ? (
                    <h3>Votre panier est vide, continuez vos achats.</h3>
                ) : (
                    <>
                        <ul>
                            {cartItems.map(item => (
                                <li
                                    key={item.id}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginBottom: "15px",
                                        gap: "10px"
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.nom}
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            objectFit: "contain",
                                            borderRadius: "8px"
                                        }}
                                    />

                                    <div style={{ flex: 1 }}>
                                        <strong>{item.nom}</strong> <br />
                                        Prix unitaire : {item.prix.toFixed(2)} € <br />

                                        <div style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            marginTop: "5px"
                                        }}>
                                            <button
                                                onClick={() => onRemoveFromCart(item.id)}
                                                style={{
                                                    backgroundColor: "#ff4d4d",
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: "50%",
                                                    width: "30px",
                                                    height: "30px",
                                                    fontSize: "20px",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                −
                                            </button>
                                            <span style={{ minWidth: "20px", textAlign: "center" }}>
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => OnAddToCart(item.id)}
                                                style={{
                                                    backgroundColor: "#4CAF50",
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: "50%",
                                                    width: "30px",
                                                    height: "30px",
                                                    fontSize: "20px",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <strong>Total : {(item.prix * item.quantity).toFixed(2)} €</strong>
                                        <br />
                                        <button
                                            onClick={() => onRemoveFromCart(item.id, true)}
                                            style={{
                                                backgroundColor: "#555",
                                                color: "white",
                                                border: "none",
                                                borderRadius: "6px",
                                                padding: "5px 10px",
                                                marginTop: "8px",
                                                cursor: "pointer"
                                            }}
                                        >
                                            Retirer
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <hr />
                        <p><strong>Total articles :</strong> {totalItems}</p>
                        <p><strong>Prix total :</strong> {totalPrice.toFixed(2)} €</p>
                        <button
                            onClick={onClearCart}
                            className="clear-cart-btn"
                            style={{
                                backgroundColor: "#333",
                                color: "white",
                                padding: "10px 20px",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}
                        >
                            Vider le panier
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;
