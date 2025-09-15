import {sneakersList} from '../datas/sneakersList'
import SneakerItem from './SneakerItem';

function ShoppingList(){
    return (
        <div className="shopping-list">
            <h2>Nos sneakers</h2>
            <div className="sneakers-grid">
                {sneakersList.map((sneaker) => (
                    <SneakerItem
                        key={sneaker.id}
                        nom={sneaker.nom}
                        marque={sneaker.marque}
                        prix={sneaker.prix}
                        style={sneaker.style}
                    />
             ))}
            </div>
        </div>
    );
}

export default ShoppingList