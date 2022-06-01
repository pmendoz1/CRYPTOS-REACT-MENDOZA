import "../App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";

//Renderizamos el carrito
function Cart({ item }) {
  const [carrito, setCarrito, addItem, isInCart, removeItem, clear] =
    useContext(CartContext);
  return (
    <div className="detalle-carrito">
      <Container fluid>
        <Row>
          <Col sm={3}>
            <Row>
              <img className="detalle-carrito-img" alt="img" src={item.image} />
            </Row>
            <Row>
              {" "}
              <Button variant="primary" onClick={() => removeItem(item.id)}>
                Borrar
              </Button>
            </Row>
          </Col>
          <Col sm={9}>
            <Row>
              <Col>
                <Row>
                  <Col className="detalle-carrito-titulos">
                    <h2>Moneda:</h2>
                  </Col>
                  <Col>
                    <h2>{item.id}</h2>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col className="detalle-producto-titulos">
                    <h3>Precio:</h3>
                  </Col>
                  <Col>
                    <h3>${item.price}</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col className="detalle-producto-titulos">
                    <h3>Cantidad:</h3>
                  </Col>
                  <Col>
                    <h3>${item.cantidad}</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col className="detalle-producto-titulos">
                    <h3>Subtotal:</h3>
                  </Col>
                  <Col>
                    <h3>${(item.cantidad * item.price).toFixed(2)}</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cart;
