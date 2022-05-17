import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    let id = useParams();
    const [listaDetail, setListaDetail] = useState([]);
    useEffect( () => {
        const dataDetail = new Promise((resolve, reject) => {
            const arrayItemDetail = axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id.id}`)
                setTimeout(()=>{
                resolve(arrayItemDetail);
                },2000);
            });
            dataDetail.then( dataDetail => setListaDetail(dataDetail.data));
            dataDetail.catch( err => console.log(err));
        }, []);
    return (
        <>
        {listaDetail ? listaDetail.map(item => <ItemDetail key={item.id} detalles={item}/>) : null}
        </>
    );
}

export default ItemDetailContainer;