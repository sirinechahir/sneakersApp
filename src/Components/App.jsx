import {useState, useEffect} from 'react';
import Banner from './Banner';
import ShoppingList from './ShoppingList';
import Cart from './Cart';
import '../styles/App.css';


function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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



const removeFromCart = (id) => {
  setCart((prevCart) =>
    prevCart
      .map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return null;
        }
        return item;
      })
      .filter((item) => item !== null) 
  );
};


  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <Banner />

      {/* ✅ Conteneur flex horizontal sous le banner */}
      <div className="main-section">
        <ShoppingList onAddToCart={addToCart} />
        <Cart
          cartItems={cart}
          onRemoveFromCart={removeFromCart}
          onClearCart={clearCart}
        />
      </div>
    </div>
  );
}



export default App;