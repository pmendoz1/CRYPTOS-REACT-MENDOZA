import CartWidgetLogo from "../img/CartWidget.PNG";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import { useContext } from "react";

function CartWidget() {
  const [carrito, setCarrito, addItem, isInCart, removeItem, clear] =
    useContext(CartContext);
  return (
    <div className="head-text">
      <div>
        {carrito[0] ? (
          <>
            <Link to="/cart">
              <div>
                <img
                  src={CartWidgetLogo}
                  className="LogoCrypto"
                  alt="Carrito"
                />
                ;
              </div>
            </Link>
            <div className="text-on-image">
              <h3>{carrito.length}</h3>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
export default CartWidget;
