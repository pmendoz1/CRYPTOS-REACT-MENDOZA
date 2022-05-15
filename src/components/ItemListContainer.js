import '../App.css';
import ItemList from "./ItemList";
import React, { useEffect, useState } from 'react';


const ItemListContainer = ({ greetings }) => {

    const [lista, setLista] = useState([]);

    useEffect( () => {
    const data = new Promise((resolve, reject) => {
        const arrayItems = [
            {id:1, title:"BTC", description:"Bitcoin", price:32300, pictureUrl:"https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg"},
            {id:2, title:"ETH", description:"Ethereum", price:3100, pictureUrl:"https://cdn.coinranking.com/rk4RKHOuW/eth.svg"},
            {id:3, title:"BNB", description:"Binance Coin", price:320, pictureUrl:"https://cdn.coinranking.com/B1N19L_dZ/bnb.svg"},
            {id:4, title:"HEX", description:"Hex Coin", price:467, pictureUrl:"https://cdn.coinranking.com/iseN4Am58/hex-vector.svg"},
        ]
            setTimeout(()=>{
            resolve(arrayItems);
            },2000);
        });
        data.then( data => setLista(data));
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