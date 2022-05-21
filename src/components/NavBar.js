import "../App.css";
import CartWidget from "./CartWidget";
import Button from "react-bootstrap/Button";
import LogoCrypto from "../img/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="NavBar">
        <Link to="/">
          <img src={LogoCrypto} alt="logo" />
        </Link>
        <Link to="/category/ethereum-ecosystem">
          <Button variant="primary">Ecosistema Ethereum</Button>{" "}
        </Link>
        <Link to="/category/solana-ecosystem">
          <Button variant="primary">Ecosistema Solana</Button>{" "}
        </Link>
        <Link to="/category/stablecoins">
          <Button variant="primary">Stablecoins</Button>{" "}
        </Link>
        <Link to="/">
          <Button variant="success button">Inicio</Button>{" "}
        </Link>
        <Button variant="success button">Login</Button> <CartWidget />
      </div>
    </>
  );
}

export default NavBar;
