import React, { Children, createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider (children) {

    const [carrito, setCarrtio] = useState([]);

    const addToCart = (count) => console.log("Add"+count);
    const removeToCart = (item) => console.log(item);
    const removeProductCart = (item) => console.log(item);
    const buyAll = () => setCarrtio([]);
    const deleteAll = () => setCarrtio([]);

    return ( 
        <>
            <CartContext.Provider value={{addToCart, removeToCart, removeProductCart, buyAll, deleteAll}}>
                {Children}
            </CartContext.Provider>
        </>
    )

}

export default CartContextProvider;