import CartWidgetLogo from "../img/CartWidget.PNG";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <Link to="/cart">
      <img src={CartWidgetLogo} className="LogoCrypto" alt="Carrito" />;
    </Link>
  );
}
export default CartWidget;
