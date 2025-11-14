import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './Banner';
import ShoppingList from './ShoppingList';
import Contact from './Contact';
import PanierPage from './PanierPage';   
import CommandePage from './CommandePage'; 
import '../styles/App.css';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
    
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // 🔹 Ajouter un article au panier
  const addToCart = (sneaker) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === sneaker.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === sneaker.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...sneaker, quantity: 1 }];
      }
    });
  };

  // 🔹 Retirer un article du panier
  const removeFromCart = (id, removeAll = false) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            if (removeAll || item.quantity <= 1) {
              return null;
            }
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item !== null)
    );
  };

  // 🔹 Vider le panier
  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      {/* ✅ On affiche le compteur d'articles dans la bannière */}
      <Banner cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />

      <Routes>
        {/* 🛍️ Page d'accueil */}
        <Route path="/" element={<ShoppingList onAddToCart={addToCart} />} />

        {/* 🛒 Page du panier (nouvelle) */}
        <Route
          path="/cart"
          element={
            <PanierPage
              cartItems={cart}
              onRemoveFromCart={removeFromCart}
              onClearCart={clearCart}
              OnAddToCart={(id) => {
                const item = cart.find((i) => i.id === id);
                if (item) addToCart(item);
              }}
            />
          }
        />

        {/* 📦 Page de commande (formulaire) */}
        <Route path="/commande" element={<CommandePage />} />

        {/* 📞 Page de contact */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
