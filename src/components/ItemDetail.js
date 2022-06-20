import "../App.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ItemCount from "./ItemCount";
import CoinGecko from "../img/coingecko.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

//Función para renderizar el detalle del producto.
function ItemDetail({ detalles }) {
  const [carrito, setCarrito, addItem, isInCart] = useContext(CartContext);

  return (
    <div className="detalle-producto">
      <Container fluid>
        <Row>
          <Col sm={3}>
            <img className="card-img-top" alt="img" src={detalles.image} />
          </Col>
          <Col sm={6}>
            <Row>
              <Col>
                <Row>
                  <Col className="detalle-producto-titulos">
                    <h1>Moneda:</h1>
                  </Col>
                  <Col>
                    <h1>{detalles.name}</h1>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col className="detalle-producto-titulos">
                    <h2>Símbolo:</h2>
                  </Col>
                  <Col>
                    <h2>{detalles.symbol}</h2>
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
                    <h3>${detalles.current_price}</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col className="detalle-producto-titulos">
                    <h3>Market cap:</h3>
                  </Col>
                  <Col>
                    <h3>${detalles.market_cap}</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col className="detalle-producto-titulos">
                    <h3>Ranking:</h3>
                  </Col>
                  <Col>
                    <h3>N° {detalles.market_cap_rank}</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col className="detalle-producto-titulos">
                    <h3>Cantidad Total:</h3>
                  </Col>
                  <Col>
                    <h3>{detalles.total_supply}</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col className="detalle-producto-titulos">
                    <h3>Precio máximo 24 Hs:</h3>
                  </Col>
                  <Col>
                    <h3>{detalles.high_24h}</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col className="detalle-producto-titulos">
                    <h3>Precio mínimo 24 Hs:</h3>
                  </Col>
                  <Col>
                    <h3>{detalles.low_24h}</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col sm={3}>
            <Row className="coingecko">
              <h4>Search Powered by</h4>
              <img alt="img" src={CoinGecko} />
            </Row>
            {!isInCart(detalles.symbol) ? (
              <ItemCount stock={5} initial={1} productoDetalle={detalles} />
            ) : (
              <>
                <Row>
                  <Link to="/">
                    <Button variant="primary">¡Sigamos Comprando!</Button>
                  </Link>
                </Row>
                <Row>
                  <Link to="/cart">
                    <Button variant="primary">Finalizar Compra</Button>
                  </Link>
                </Row>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ItemDetail;
