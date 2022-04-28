import React from "react";
import { Card } from "react-bootstrap";
import TrashIcon from "./TrashIcon/TrashIcon";

function CartItem(props){

    return(
        <>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>id: {props.item.id}</Card.Title>
            <TrashIcon idProd={props.item.id} />
            <Card.Text>
                Cantidad: {props.item.cantidad}
            </Card.Text>
            </Card.Body>    
        </Card>
        </>
    )
}

export default CartItem;

