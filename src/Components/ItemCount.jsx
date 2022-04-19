import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ItemCount(props){
    const [count, setCount] = useState(props.initial);

    function addItem(){
        setCount(count+1);
    }

    function subsItem(){
            setCount(count-1);
    }
 
    return(
        <>
            <div className="itemCountSection"> 
                <Button variant="secondary" onClick={subsItem} disabled={(count === 1 || props.stock === 0)?true:false}>-</Button>
                <p>{count}</p>
                <Button variant="secondary" onClick={addItem} disabled={(count === props.stock || props.stock === 0)?true:false}>+</Button>
            </div>
            <Link to="/cart" >
                <Button variant="primary" onClick={() => props.onAdd({count})} disabled={(props.stock === 0)?true:false}>Comprar</Button>
            </Link>
        </>
    )
}

export default ItemCount; 


