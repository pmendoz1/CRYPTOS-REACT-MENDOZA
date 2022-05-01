import '../App.css';
import CartWidget from "./CartWidget";
import Button from 'react-bootstrap/Button';
import LogoCrypto from '../img/logo.png'

function NavBar() {
    return (
        <>
        <div className="NavBar">
        <img src={LogoCrypto} alt="logo" />
        <Button variant="link button">Compra</Button>{' '}
        <Button variant="link button">Venta</Button>{' '}
        <Button variant="link button">Billetera</Button>{' '}
        <Button variant="success button">Inicio</Button>{' '}
        <Button variant="success button">Login</Button>{' '}
        <CartWidget />
        </div>
        </>
    );
}

export default NavBar;