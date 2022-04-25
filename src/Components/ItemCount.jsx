import React, { useState, /*useContext*/ } from "react";
//import { CartContext } from "./CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ItemCount(props){
    const [count, setCount] = useState(1);
    const [active, setActive] = useState(false);

    //const { addToCart } = useContext(CartContext);
    function addToCart(cant){
        setActive(true);
        console.log("este numero "+cant);
    }

    function addItem(){setCount(count+1);}
    function subsItem(){setCount(count-1);}

    return(
        <>
            <div className="itemCountSection"> 
                <Button variant="secondary" onClick={subsItem} disabled={(count === 1 || props.product.product.stock === 0)?true:false}>-</Button>
                <p>{count}</p>
                <Button variant="secondary" onClick={addItem} disabled={(count === props.product.product.stock || props.product.product.stock === 0)?true:false}>+</Button>
            </div>
            <Button 
                variant="primary" 
                onClick={() => addToCart(count)} 
                style={active?{ display: 'none' }:{ display: 'inline' }}
                disabled={(props.product.product.stock === 0)?true:false}>
                    Agregar al carrito
            </Button>
            <Link to="/cart" >
                <Button 
                    variant="primary" 
                    style={active?{ display: 'inline' }:{ display: 'none' }}>
                        Comprar
                </Button>
            </Link>
        </>
    )
}

export default ItemCount; 


