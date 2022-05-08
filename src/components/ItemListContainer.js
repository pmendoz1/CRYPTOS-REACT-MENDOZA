import '../App.css';
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greetings }) => {
    return (
        <>
        <div>
            <h1>{greetings}</h1>
        </div>
        <div className="ItemListContainer">
            <ItemCount stock={10} initial={1} />
            
        </div>
        </>
    );
}

export default ItemListContainer;
