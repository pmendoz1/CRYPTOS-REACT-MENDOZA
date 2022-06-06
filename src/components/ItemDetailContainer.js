import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [listaProductoDetalle, setListaProductoDetalle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Consulta a la db para armar array con el detalle del producto, de acuerdo al parámetro que viene del Route Link
  useEffect(() => {
    const getCryptos = async () => {
      const q = query(collection(db, "cryptos"), where("symbol", "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data() });
      });
      setListaProductoDetalle(docs);
    };
    getCryptos();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [id]);

  // Mapeamos listaProductoDetalle y se lo mandamos a ItemDetail para renderizar el detalle del producto
  return (
    <>
      {isLoading ? (
        <div>
          <h1>CARGANDO</h1>
        </div>
      ) : listaProductoDetalle ? (
        listaProductoDetalle.map((productoDetalle) => (
          <ItemDetail key={productoDetalle.symbol} detalles={productoDetalle} />
        ))
      ) : null}
    </>
  );
};

export default ItemDetailContainer;
