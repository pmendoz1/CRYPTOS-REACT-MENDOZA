import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import "../App.css";
import { TextField } from "@mui/material";
import MessageSuccess from "./MessageSuccess";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const initialStateBuyer = {
  name: "",
  lastName: "",
  phone: "",
  email: "",
};

const Checkout = () => {
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

  const [buyer, setBuyer] = useState(initialStateBuyer);
  // Este estado está destinado a guardar el id de la compra
  const [purchaseID, setPurchaseID] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const items = carrito;
    const date = new Date();
    const total = precioTotal;
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "orders"), {
      buyer,
      items,
      date,
      total,
    });
    setPurchaseID(docRef.id);
    setBuyer(initialStateBuyer);
    setCarrito([]);
    setPrecioTotal(0);
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <div style={styles.containerShop}>
            <h1>Checkout</h1>
            <form className="FormContainer" onSubmit={onSubmit}>
              <TextField
                placeholder="Name"
                style={{ margin: 10, width: 400 }}
                name="name"
                value={buyer.name}
                onChange={handleOnChange}
              />
              <TextField
                placeholder="Last Name"
                style={{ margin: 10, width: 400 }}
                name="lastName"
                value={buyer.lastName}
                onChange={handleOnChange}
              />
              <TextField
                placeholder="Phone"
                style={{ margin: 10, width: 400 }}
                name="phone"
                value={buyer.phone}
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 15);
                }}
                onChange={handleOnChange}
              />
              <TextField
                placeholder="email"
                style={{ margin: 10, width: 400 }}
                name="email"
                value={buyer.email}
                onChange={handleOnChange}
              />
              <button className="btnASendAction">Send</button>
            </form>
            {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
          </div>
        </Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
};

export default Checkout;
