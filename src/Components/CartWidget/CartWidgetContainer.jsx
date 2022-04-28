import React, { useContext, useEffect, useState } from 'react';
import CartWidget from './CartWidget';
import { CartContext } from "../../Utils/CartContext";
import CartItem from "../CartItem";

function CartWidgetContainer (props) {

    const { carrito } = useContext(CartContext);
    const [productsCart, setProductsCart] = useState([]);

    useEffect(() => {
      setProductsCart(carrito.map((item) => 
        <CartItem item={item} key={item.id}/>)
      ) 
    }, [carrito])



  return (
      <>
        <CartWidget productsCart={productsCart}/>
      </>
    
  )
}

export default CartWidgetContainer;