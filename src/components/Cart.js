import "../App.css";
import Button from "react-bootstrap/Button";
import { CartContext } from "../CartContext";
import { useContext } from "react";

//Renderizamos el carrito
function Cart({ item }) {
  const [carrito, setCarrito, addItem, isInCart, removeItem, clear] =
    useContext(CartContext);
  return (
    <>
      <ul>
        <li>Moneda: {item.id}</li>
        <li>Cantidad: {item.cantidad}</li>
        <Button variant="success button" onClick={() => removeItem(item.id)}>
          Borrar
        </Button>
      </ul>
    </>
  );
}

export default Cart;
