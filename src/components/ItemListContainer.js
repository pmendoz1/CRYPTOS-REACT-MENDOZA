import '../App.css';
import ItemList from "./ItemList";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ItemListContainer = ({ greetings }) => {

    const [lista, setLista] = useState([]);

    useEffect( () => {
    const data = new Promise((resolve, reject) => {
        const arrayItems = axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
            setTimeout(()=>{
            resolve(arrayItems);
            },2000);
        });
        data.then( data => setLista(data.data));
        data.catch( err => console.log(err));
    }, []);
    return (
        <>
        <div>
            <h1>{greetings}</h1>
        </div>
        <div className="ItemListContainer">
            <ItemList items={lista} />
        </div>
        </>
    );
}


export default ItemListContainer;