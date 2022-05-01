import '../App.css';

const ItemListContainer = ({ greetings }) => {
    return (
        <>
        <div>
            <h1>{greetings}</h1>
        </div>
        <div className="ItemListContainer">
            <h2>AQUÍ PONDREMOS UNA LISTA DE CRYPTOS</h2>
        </div>
        </>
    );
}

export default ItemListContainer;
