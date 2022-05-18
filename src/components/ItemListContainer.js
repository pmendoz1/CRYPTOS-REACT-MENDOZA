import '../App.css';
import ItemList from "./ItemList";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greetings }) => {
    let categoryId = useParams()
    const [listaProductos, setListaProductos] = useState([]);
    useEffect( () => {
        // Definimos promesa para consulta a la API de CoinGecko
    const consultaAPI = new Promise((resolve, reject) => {
        // Armamos array de acuerdo a si viene o no parametro en Route Link
        const arrayProductos = !categoryId.id ? axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd') : axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=${categoryId.id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
            setTimeout(()=>{
                // Resolvemos la promesa con el contenido de arrayProductos
            resolve(arrayProductos);
            },2000);
        }, []);
        // Llenamos el estado de listaProductos con el resultado de la consulta de la API
        consultaAPI.then( productos => setListaProductos(productos.data));
        consultaAPI.catch( err => console.log(err));
    },[categoryId.id]);
    return (
        <>
        <div className='titulo'>
            <h2>{greetings}</h2>
        </div>
        <div className="ItemListContainer">
            <ItemList items={listaProductos} />
        </div>
        </>
    );
}


export default ItemListContainer;