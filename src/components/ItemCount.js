import "../App.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ItemCount({
  stock,
  initial,
  onAdd,
  cantidadCarrito,
  productoDetalle,
}) {
  const [count, setCount] = useState(initial);
  // const carrito = [
  //   { name: `${productoDetalle.name}`, cantidad: `${cantidadCarrito}` },
  // ];

  const addProducto = (num) => {
    setCount(count + num);
  };
  return (
    <>
      {!cantidadCarrito ? (
        <div
          className="Contador-general"
          disabled={cantidadCarrito ? true : false}
        >
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
              onClick={() => onAdd(count)}
              disabled={stock === 0 ? true : null}
            >
              Agregar al Carrito
            </Button>
          </div>
        </div>
      ) : (
        <Link to="/cart">
          <Button variant="primary">Finalizar Compra</Button>
        </Link>
      )}
    </>
  );
}

export default ItemCount;
