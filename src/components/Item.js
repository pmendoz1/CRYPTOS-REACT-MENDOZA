import '../App.css';
import Button from 'react-bootstrap/Button';

function Item({item}) {
    return(
        <div className="ItemListContainer">
            {item.map(u => 
            <div key={u.id} className="Card">
                <img className='card-img-top' alt='img' src={u.pictureUrl} />
                <h2>{u.title}</h2>
                <h3>${u.price}</h3>
                <Button variant="primary">Ver detalle del producto</Button>{' '}
            </div>)}
        </div>
    )
}

export default Item