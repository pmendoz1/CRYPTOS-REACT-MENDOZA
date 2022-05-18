import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    let id = useParams();
    const [listaProductoDetalle, setListaProductoDetalle] = useState([]);
    useEffect( () => {
        // Definimos promesa para consulta a la API de CoinGecko para un producto específico
        const consultaAPIDetalle = new Promise((resolve, reject) => {
            // Armamos array con el detalle del producto, de acuerdo al parámetro que viene del Route Link
            const arrayProductoDetalle = axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id.id}`);
                setTimeout(()=>{
                    // Resolvemos la promesa con el contenido de arrayProductoDetalle
                resolve(arrayProductoDetalle);
                },2000);
            });
            // Llenamos el estado de listaProductoDetalle con el resultado de la consulta de la API
            consultaAPIDetalle.then( productoDetalle => setListaProductoDetalle(productoDetalle.data));
            consultaAPIDetalle.catch( err => console.log(err));
        }, [id.id]);
        // Mapeamos listaProductoDetalle y se lo mandamos a ItemDetail para renderizar el detalle del producto
    return (
        <>
        {listaProductoDetalle ? listaProductoDetalle.map(productoDetalle => <ItemDetail key={productoDetalle.id} detalles={productoDetalle}/>) : null}
        </>
    );
}

export default ItemDetailContainer;