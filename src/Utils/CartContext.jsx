import React, { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider ( {children} ) {

    const [carrito, setCarrtio] = useState([]);

    function addItemCart (id, cantidad) {
        setCarrtio(...carrito, {id, cantidad});
        setActive(true) ;
    }
    console.log({carrito}); 
    const removeItemCart = (item) => console.log(carrito);
    const removeProduct = (item) => console.log(item);
    const clear = () => setCarrtio([]);
    const isInCart = (idProd) => (carrito.find(idProd))? true:false ;


    const [activeButton, setActive] = useState(false);

    return ( 
        <>
            <CartContext.Provider value={{addItemCart, removeItemCart, removeProduct, clear, isInCart, activeButton}}>
                {children}
            </CartContext.Provider>
        </>
    )

}

export default CartContextProvider;