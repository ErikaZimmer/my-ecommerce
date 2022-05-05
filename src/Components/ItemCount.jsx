import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../Contexts/CartContext";

function ItemCount(props){
    const [count, setCount] = useState(1);
    const { addItemCart } = useContext(CartContext);

    function addItem(){setCount(count+1);}
    function subsItem(){setCount(count-1);}

    function buyItem(product, count) {
        setCount(1);
        addItemCart(product, count);
    }

    return(
        <>
            <div className="itemCountSection"> 
                <Button variant="secondary" onClick={subsItem} disabled={(count === 1 || props.product.stock === 0)?true:false}>-</Button>
                <p>{count}</p>
                <Button variant="secondary" onClick={addItem} disabled={(count === props.product.stock || props.product.stock === 0)?true:false}>+</Button>
            </div>
            <Button 
                variant="primary" 
                onClick={() => buyItem(props.product, count)} 
                disabled={(props.product.stock === 0)?true:false}>
                    Agregar al carrito
            </Button>

        </>
    )
}

export default ItemCount; 


