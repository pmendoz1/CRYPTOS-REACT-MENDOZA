import "../App.css";
import Button from "react-bootstrap/Button";
import Cart from "./Cart";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

//Mapeamos el carrito y se lo enviamos a Cart para renderizarlo.
function CartList() {
  const [
    carrito,
    setCarrito,
    addItem,
    isInCart,
    removeItem,
    clear,
    precioTotal,
    setPrecioTotal,
  ] = useContext(CartContext);
  return (
    <>
      <div className="titulo">
        <h2>Su Carrito de Compras</h2>
      </div>
      {carrito[0] ? (
        <div className="ItemListContainer">
          {carrito.map((producto) => (
            <Cart key={producto.id} item={producto} />
          ))}
        </div>
      ) : (
        <div className="detalle-carrito-bottom">
          <h3> Carrito Vacío</h3>
          <Link to="/">
            <Button variant="primary">¡Vamos a comprar algo!</Button>
          </Link>
        </div>
      )}
      {carrito[0] ? (
        <>
          <div className="detalle-carrito-bottom">
            <div>
              <h3>Precio total: ${precioTotal.toFixed(2)}</h3>
            </div>
            <Button variant="primary" size="lg" onClick={() => clear()}>
              Borrar Todo
            </Button>
          </div>
        </>
      ) : null}
    </>
  );
}

export default CartList;
