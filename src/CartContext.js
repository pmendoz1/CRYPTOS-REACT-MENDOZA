import React, { createContext, useState } from "react";

// Creamos en contexto
export const CartContext = createContext();

// Estado para inicializar el carrito
const carritoVacio = [];
const sinPrecio = 0;

// Creamos el componente provider (ItemsProvider)
export const ItemsProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoVacio);
  const [precioTotal, setPrecioTotal] = useState(sinPrecio);

  //Función para agregar items al carrito y sumarlos al precio total
  const addItem = (item, quantity) => {
    setCarrito((carritoViejo) => [
      ...carritoViejo,
      {
        id: item.symbol,
        price: item.current_price,
        image: item.image,
        cantidad: quantity,
      },
    ]);
    setPrecioTotal(
      (precioViejo) => precioViejo + item.current_price * quantity
    );
  };
  // Función para verificar si el producto existe antes de ser agregado al carrito
  const isInCart = (productId) => {
    return carrito.some((e) => e.id === productId);
  };
  // Función para remover productos del carrito y restarlo del precio total
  const removeItem = (itemId) => {
    const carritoNew = carrito.slice();
    const index = carrito.findIndex((object) => {
      return object.id === itemId;
    });
    carritoNew.splice(index, 1);
    setPrecioTotal(
      (precioViejo) =>
        precioViejo - carrito[index].price * carrito[index].cantidad
    );
    setCarrito(carritoNew);
  };
  // Función para limpiar el carrito y el sumador de precio total
  const clear = () => {
    setCarrito([]);
    setPrecioTotal(sinPrecio);
  };
  //RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER

  return (
    <CartContext.Provider
      value={[
        carrito,
        setCarrito,
        addItem,
        isInCart,
        removeItem,
        clear,
        precioTotal,
        setPrecioTotal,
      ]}
    >
      {children}
    </CartContext.Provider>
  );
};
