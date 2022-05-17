import '../App.css';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

function Item({item}) {
    const onAdd = (count) => {
        alert(`Has agregado ${count} productos`)
    };
    return(
            <div className="Card">
                <img className='card-img-top' alt='img' src={item.image} />
                <h2>{item.symbol}</h2>
                <h3>${item.current_price}</h3>
                <Link to={`/detail/${item.id}`}>
                <Button variant="primary">Ver detalle del producto</Button>{' '}
                </Link>
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </div>
    )
}

export default Item