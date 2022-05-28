import React, { createContext, useState } from "react";

// Creamos en contexto
export const CartContext = createContext();

// Estado para inicializar el carrito
const carritoVacio = [];

// Creamos el componente provider (ItemsProvider)
export const ItemsProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoVacio);

  //Función para agregar items al carrito
  const addItem = (item, quantity) => {
    setCarrito((carritoViejo) => [
      ...carritoViejo,
      { id: item.id, cantidad: quantity },
    ]);
  };
  // Función para verificar si el producto existe antes de ser agregado al carrito
  const isInCart = (productId) => {
    return carrito.some((e) => e.id === productId);
  };
  // Función para remover productos del carrito
  const removeItem = (itemId) => {
    const carritoNew = carrito.slice();
    const index = carrito.findIndex((object) => {
      return object.id === itemId;
    });
    carritoNew.splice(index, 1);
    setCarrito(carritoNew);
  };

  const clear = () => {
    setCarrito([]);
  };
  //RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER

  return (
    <CartContext.Provider
      value={[carrito, setCarrito, addItem, isInCart, removeItem, clear]}
    >
      {children}
    </CartContext.Provider>
  );
};
