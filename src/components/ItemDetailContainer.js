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

  // useEffect(() => {
  //   // Definimos promesa para consulta a la API de CoinGecko para un producto específico
  //   const consultaAPIDetalle = new Promise((resolve, reject) => {
  //     // Armamos array con el detalle del producto, de acuerdo al parámetro que viene del Route Link
  //     const arrayProductoDetalle = axios.get(
  //       `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id.id}`
  //     );
  //     setTimeout(() => {
  //       // Resolvemos la promesa con el contenido de arrayProductoDetalle
  //       resolve(arrayProductoDetalle);
  //     }, 2000);
  //   });
  //   // Llenamos el estado de listaProductoDetalle con el resultado de la consulta de la API
  //   consultaAPIDetalle.then((productoDetalle) =>
  //     setListaProductoDetalle(productoDetalle.data)
  //   );
  //   consultaAPIDetalle.catch((err) => console.log(err));
  // }, [id.id]);

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
