import '../App.css';
import Button from 'react-bootstrap/Button';

function ItemDetail({detalles}) {
    return(
            <div className="Card">
                <img className='card-img-top' alt='img' src={detalles.image} />
                <h2>{detalles.symbol}</h2>
                <h3>${detalles.current_price}</h3>
                <h3>Capitalización: ${detalles.market_cap}</h3>
                <Button variant="primary">BOTON</Button>{' '}
            </div>
    )
}

export default ItemDetail