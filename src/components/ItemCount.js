import '../App.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ItemCount({ stock, initial, onAdd, onRemove }) {
    const [count, setCount] = useState(initial);

    onAdd = () => {
        if (stock > count) {
            setCount(count + 1)
        } 
    }
    onRemove = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }
    return (
        <div  className="Card">
            <h2>BITCOIN</h2>
            <div className='Contador'>
                <button onClick={onRemove}>-</button>
                <span>---{count}---</span>
                <button onClick={onAdd}>+</button>
            </div>
            <div>
            <Button variant="primary">Agregar al Carrito</Button>{' '}
            </div>
        </div>
    );
}

export default ItemCount;