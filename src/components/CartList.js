import "../App.css";
import Button from "react-bootstrap/Button";
import Cart from "./Cart";
import { useContext } from "react";
import { CartContext } from "../CartContext";

//Mapeamos el carrito y se lo enviamos a Cart para renderizarlo.
function CartList() {
  const [carrito, setCarrito, addItem, isInCart, removeItem, clear] =
    useContext(CartContext);
  return (
    <>
      <div className="titulo">
        <h1>Su Carrito de Compras</h1>
      </div>
      {carrito[0] ? (
        carrito.map((producto) => <Cart key={producto.id} item={producto} />)
      ) : (
        <div className="titulo">
          <h2> NO HAY NADA EN EL CARRITO</h2>
        </div>
      )}
      {carrito[0] ? (
        <Button variant="primary" onClick={() => clear()}>
          Borrar Todo
        </Button>
      ) : null}
    </>
  );
}

export default CartList;
