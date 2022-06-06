import "../App.css";
import Item from "./Item";

function ItemList({ items }) {
  // Mapeamos la lista de productos que viene de ItemListContainer y se lo mandamos a Item para renderizar
  return (
    <>
      {items
        ? items.map((producto) => (
            <Item key={producto.symbol} item={producto} />
          ))
        : null}
    </>
  );
}

export default ItemList;
