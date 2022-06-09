import "../App.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

function ItemCount({ stock, initial, productoDetalle }) {
  const [count, setCount] = useState(initial);

  const [carrito, setCarrito, addItem, isInCart, removeItem, clear] =
    useContext(CartContext);

  const addProducto = (num) => {
    setCount(count + num);
  };
  return (
    <>
      <div className="Contador-general" disabled={carrito ? true : false}>
        <div className="Contador">
          <button
            onClick={() => addProducto(-1)}
            disabled={count === initial ? true : null}
          >
            -
          </button>
          <span>----{count}----</span>
          <button
            onClick={() => addProducto(+1)}
            disabled={count === stock ? true : null}
          >
            +
          </button>
        </div>
        <div>
          <Button
            variant="primary"
            onClick={() => addItem(productoDetalle, count)}
            disabled={stock === 0 ? true : null}
          >
            Agregar al Carrito
          </Button>
        </div>
      </div>
    </>
  );
}

export default ItemCount;
