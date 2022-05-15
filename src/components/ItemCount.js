import '../App.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    const addProducto = (num) => {
        setCount(count + num);
    };
    return (
            <div>
            <div className='Contador'>
                <button 
                onClick={() => addProducto(-1)}
                disabled={count === initial ? true : null}>
                -
                </button>
                <span>----{count}----</span>
                <button onClick={() => addProducto(+1)}
                disabled={count === stock ? true : null}>
                +
                </button>
            </div>
            <div>
                <Button variant="primary"
                onClick={() => onAdd(count)} 
                disabled={stock === 0 ? true : null}>
                Agregar al Carrito
                </Button>
            </div>
            </div>
    );
}

export default ItemCount;