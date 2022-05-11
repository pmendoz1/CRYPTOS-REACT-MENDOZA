import '../App.css';
import Item from "./Item";


function ItemList ({items}) {
    return(
        <Item item={items.map(u => u)}/>
    )
}

export default ItemList;