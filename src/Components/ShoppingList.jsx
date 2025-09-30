import {sneakersList} from '../datas/sneakersList.js'
import '../styles/ShoppingList.css';
import SneakerItem from './SneakerItem.jsx'

function ShoppingList({onAddToCart}){
    return (
        <div className="shopping-list">
            <h2>Nos sneakers</h2>
            <div className="sneakers-grid">
                {sneakersList.map((sneaker) => (
                    <SneakerItem
                        key={sneaker.id}
                        sneakerData={sneaker}
                        onAddToCart={onAddToCart}
                />
             ))}
            </div>
        </div>
    );
}

export default ShoppingList;