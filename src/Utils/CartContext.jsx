import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartContextProvider ( {children} ) {

    let [carrito, setCarrtio] = useState([]);
    let [compraTotal, setCompraTotal] = useState(0);

    function addItemCart (id, cantidad) {
        let indexArr = isInList(id); 
        if (indexArr<0){
            setCarrtio([...carrito, {id, cantidad}]);
        } else {
            carrito[indexArr].cantidad += cantidad;
        } 
    }

    function removeProduct (idProd){
        console.log("id: "+idProd);
        console.log(carrito);
        let indexArr = isInList(idProd); 
        console.log("indexArr " +indexArr);
        carrito.splice(indexArr,1);
    }

  

    const clear = () => setCarrtio([]);

    function isInList (idProd) {
        return carrito.findIndex(producto => producto.id === idProd); 
    }
  
    useEffect(() => {
        let suma = 0;
        for (var i = 0; i < carrito.length; i++) {
            suma += (carrito[i].cantidad * carrito[i].precio);
        }
        setCompraTotal(suma);
    }, [carrito])

    
    return ( 
        <>
            <CartContext.Provider value={{carrito, addItemCart, removeProduct, clear, compraTotal, carritoSize:carrito.length}}>
                {children}
            </CartContext.Provider>
        </>
    )

}

export default CartContextProvider;