import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { LinearProgress } from "@mui/material";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [listaProductoDetalle, setListaProductoDetalle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Consulta a la db para armar array con el detalle del producto, de acuerdo al parámetro que viene del Route Link
  useEffect(() => {
    const getCryptos = async () => {
      const q = query(collection(db, "cryptos"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
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
        <div className="Loading">
          <LinearProgress color="secondary" />
          <h1>CARGANDO</h1>
        </div>
      ) : listaProductoDetalle ? (
        listaProductoDetalle.map((productoDetalle) => (
          <ItemDetail key={productoDetalle.id} detalles={productoDetalle} />
        ))
      ) : null}
    </>
  );
};

export default ItemDetailContainer;
