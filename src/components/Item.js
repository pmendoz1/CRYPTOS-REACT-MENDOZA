import '../App.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Item({item}) {
    return(
            <div className="Card">
                <img className='card-img-top' alt='img' src={item.image} />
                <h2>{item.name}</h2>
                <Link to={`/item/${item.id}`}>
                <Button variant="primary">Ver detalle del producto</Button>{' '}
                </Link>
                
            </div>
    )
}

export default Item