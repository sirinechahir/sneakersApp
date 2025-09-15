import Banner from './Banner';
import '../styles/App.css';
import ShoppingList from './ShoppingList'
import { sneakersList } from '../datas/sneakersList';


function App() {
  return (
    <div className="App">
      <Banner />
      <ShoppingList />
    </div>

  );
}

export default App;