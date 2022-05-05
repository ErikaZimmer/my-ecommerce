import React, { createContext, useEffect, useState } from "react"; 

export const CartContext = createContext();

function CartContextProvider ( {children} ) {

    let [carrito, setCarrtio] = useState([]);
    let [compraTotal, setCompraTotal] = useState(0);
    let [carritoSize, setCarritoSize] = useState(0);

    function addItemCart (product, cantidad) {
        console.log(product);
        let indexArr = isInList(product.id); 
        if (indexArr<0){
            setCarrtio([...carrito, {id:product.id, name:product.name, img:product.img, price:product.price, cantidad}]);
        } else {
            carrito[indexArr].cantidad += cantidad;
            setCarrtio([...carrito]);
        } 
    }

    function removeProduct (idProd){
        let indexArr = isInList(idProd); 
        carrito.splice(indexArr,1);
        setCarrtio([...carrito])
    }

    const clear = () => setCarrtio([]);

    function isInList (idProd) {
        return carrito.findIndex(producto => producto.id === idProd); 
    }

    function cartItems (carrito){
        let total = 0;
        for (var i = 0; i < carrito.length; i++) {
            total += carrito[i].cantidad;
        }
        setCarritoSize(total);
    }

    function cartTotal (carrito){
        let total = 0;
        for (var i = 0; i < carrito.length; i++) {
            total += carrito[i].cantidad * carrito[i].price;
            console.log(carrito[i].cantidad);
            console.log(carrito[i].price);
        }
        
        setCompraTotal(total);
        console.log(compraTotal);
    }
  
    useEffect(() => {
        cartTotal(carrito);
        cartItems(carrito);
    }, [carrito])

    
    return ( 
        <>
            <CartContext.Provider value={{carrito, addItemCart, removeProduct, clear, compraTotal, carritoSize}}>
                {children}
            </CartContext.Provider>
        </>
    )

}

export default CartContextProvider;