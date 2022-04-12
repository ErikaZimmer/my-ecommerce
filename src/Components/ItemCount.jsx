import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ItemCount(props){
    const [count, setCount] = useState(0);

    function addItem(){
        if(count < props.stock){
            setCount(count+1);
        }
    }

    function subsItem(){
        if(count > 0){
            setCount(count-1);
        }
    }

    return(
        <div className="itemCountSection"> 
            <Button variant="secondary" onClick={subsItem}>-</Button>
            <p>{count}</p>
            <Button variant="secondary" onClick={addItem}>+</Button>
        </div>
    )
}

export default ItemCount; 