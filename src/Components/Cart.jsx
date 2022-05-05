import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import CartItem from "./CartItem";

function Cart(){
    const { carrito } = useContext(CartContext);
    const [productsCart, setProductsCart] = useState([]);

    useEffect(() => {
      setProductsCart(carrito.map((item) => 
        <CartItem item={item} key={item.id}/>)
      ) 
    }, [carrito])

    return (
        <>
            <h2>Mi carrito</h2>
            {productsCart}
        </>
    )
}


export default Cart;