import '../App.css';
import Item from "./Item";

function ItemList ({items}) {
    return(
        <>
        
        {items ? items.map(item => <Item key={item.id} item={item}/>) : null}
        
        </>
    )
}

export default ItemList;