import React from "react";
import { Card } from "react-bootstrap";
import TrashIcon from "./TrashIcon/TrashIcon";

function CartItem(props){

    const subTotal = props.item.cantidad * props.item.price;

    return(
        <>
          <Card border="primary" style={{ width: '100%' }}>
            <Card.Body>
            <Card.Title>{props.item.name}</Card.Title>
            <TrashIcon idProd={props.item.id} />
            <Card.Text>
                <p>Cantidad: {props.item.cantidad}</p>
                <p>$ {subTotal}</p>
            </Card.Text>
            </Card.Body>    
        </Card>
        </>
    )
}

export default CartItem;

