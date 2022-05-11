import '../App.css';
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import React, { useState } from 'react';


const ItemListContainer = ({ greetings }) => {
    const arrayItems = [
        {id:1, title:"BTC", description:"Bitcoin", price:32300, pictureUrl:"https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg"},
        {id:2, title:"ETH", description:"Ethereum", price:3100, pictureUrl:"https://cdn.coinranking.com/rk4RKHOuW/eth.svg"},
        {id:3, title:"BNB", description:"Binance Coin", price:320, pictureUrl:"https://cdn.coinranking.com/B1N19L_dZ/bnb.svg"},
        {id:4, title:"HEX", description:"Hex Coin", price:467, pictureUrl:"https://cdn.coinranking.com/iseN4Am58/hex-vector.svg"},
    ]
const [lista, setLista] = useState([])

setTimeout(()=>{
setLista(arrayItems)
},2000)

    return (
        <>
        <div>
            <h1>{greetings}</h1>
        </div>
        <div className="ItemListContainer">
            <ItemCount stock={5} initial={1} />
            <ItemList items={lista} />
        </div>
        </>
    );
}
export default ItemListContainer;