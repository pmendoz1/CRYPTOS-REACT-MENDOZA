import '../App.css';

const ItemListConteiner = ({ greetings }) => {
    return (
        <>
        <div>
            <h1>{greetings}</h1>
        </div>
        <div className="ItemListConteiner">
            <h2>AQUÍ PONDREMOS UNA LISTA DE CRYPTOS</h2>
        </div>
        </>
    );
}

export default ItemListConteiner;
