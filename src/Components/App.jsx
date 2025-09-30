import {useState, useEffect} from 'react';
import Banner from './Banner';
import ShoppingList from './ShoppingList';
import Cart from './Cart';
import '../styles/App.css';


function App() {

  const [cart, setCart] = useState(() =>{
    const savedCart=localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart=(sneaker) =>{
    setCart(prevCart => {
      const existingItem=prevCart.find(item=>item.id === sneaker.id);

      if (existingItem){
        return prevCart.map(item=>
          item.id === sneaker.id
            ?{...item, quantity: item.quantity + 1}
            : item
        );
      }else {
        return[...prevCart, {...sneaker, quantity: 1}];
      }
    })
  }
  return (
    <div className="App">
      <Banner />
      <ShoppingList onAddToCart={addToCart}/>
      <Cart cartItems={cart}/>
    </div>
  );
}

export default App;