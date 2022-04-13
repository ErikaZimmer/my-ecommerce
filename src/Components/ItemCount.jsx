import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ItemCount(props, onAdd){
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
            <Button variant="primary" disabled={(props.stock === 0)?true:false} onClick={() => onAdd({count})}>Comprar</Button>
        </>
    )
}

export default ItemCount; 


