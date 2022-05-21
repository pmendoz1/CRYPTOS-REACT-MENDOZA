import "../App.css";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ItemCount from "./ItemCount";
import CoinGecko from "../img/coingecko.svg";
import React, { useState } from "react";

function ItemDetail({ detalles }) {
  const [cantidadProducto, setCantidadProducto] = useState();

  // Función para almacenar cantidad del producto seleccionado, al hacer click en agregar al carrito
  const onAdd = (count) => {
    setCantidadProducto(count);
  };
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
            <ItemCount
              stock={5}
              initial={1}
              onAdd={onAdd}
              cantidadCarrito={cantidadProducto}
              productoDetalle={detalles}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ItemDetail;
