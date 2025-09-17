import CustomerReview from '.'

function SneakerItem({nom, marque, prix, style, esthetique, confort}){
    return(
        <div className="sneaker-item">
            <h3>{nom}</h3>
            <p className="sneaker-brand">{marque}</p>
            <p className="sneaker-price">{prix}</p>
            <p className="sneaker-style">{style}</p>
        </div>
    );
}

export default SneakerItem;