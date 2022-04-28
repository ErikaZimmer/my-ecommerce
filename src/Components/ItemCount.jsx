import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../Utils/CartContext";

function ItemCount(props){
    const [count, setCount] = useState(1);

    const { addItemCart } = useContext(CartContext);

    function addItem(){setCount(count+1);}
    function subsItem(){setCount(count-1);}

    function buyItem(id, cantidad) {
        setCount(1);
        console.log(id, cantidad);
        addItemCart(id, cantidad);
    }

    return(
        <>
            <div className="itemCountSection"> 
                <Button variant="secondary" onClick={subsItem} disabled={(count === 1 || props.product.product.stock === 0)?true:false}>-</Button>
                <p>{count}</p>
                <Button variant="secondary" onClick={addItem} disabled={(count === props.product.product.stock || props.product.product.stock === 0)?true:false}>+</Button>
            </div>
            <Button 
                variant="primary" 
                onClick={() => buyItem(props.product.product.id, count)} 
                disabled={(props.product.product.stock === 0)?true:false}>
                    Agregar al carrito
            </Button>

        </>
    )
}

export default ItemCount; 


