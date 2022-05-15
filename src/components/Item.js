import '../App.css';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';

function Item({item}) {
    const onAdd = (count) => {
        alert(`Has agregado ${count} productos`)
    };
    return(
        // <div className="ItemListContainer">
            <div className="Card">
                <img className='card-img-top' alt='img' src={item.pictureUrl} />
                <h2>{item.title}</h2>
                <h3>${item.price}</h3>
                <Button variant="primary">Ver detalle del producto</Button>{' '}
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </div>
        // </div>
    )
}

export default Item