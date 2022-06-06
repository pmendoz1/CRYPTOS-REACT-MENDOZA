import "../App.css";
import ItemList from "./ItemList";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const ItemListContainer = ({ greetings }) => {
  const { id } = useParams();
  const [listaProductos, setListaProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Consulta a la db para llenar array listaProductos, de acuerdo al parámetro que viene del Route Link
  useEffect(() => {
    const getCryptos = async () => {
      let q = [];
      if (!id) {
        q = query(collection(db, "cryptos"));
      } else {
        q = query(collection(db, "cryptos"), where("ecosystem", "==", id));
      }
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data() });
      });
      setListaProductos(docs);
    };
    getCryptos();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div>
          <h1>CARGANDO</h1>
        </div>
      ) : (
        <>
          <div className="titulo">
            <h2>{greetings}</h2>
          </div>
          <div className="ItemListContainer">
            <ItemList items={listaProductos} />
          </div>
        </>
      )}
    </>
  );
};

export default ItemListContainer;
