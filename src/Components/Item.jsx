import React, { useState } from "react";
import "./ItemList/ItemList.css"
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ItemCount from "./ItemCount";

function Item(props){
    const [carrito, setCarrito] = useState(1);

    function onAdd(dato){
        setCarrito(dato);
    }
    console.log(carrito);
    return<>
        <Card style={{ width: '18rem' }} key={props.id}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                Precio: $ {props.price}
                </Card.Text>
                <ItemCount stock={props.stock} initial={1} onAdd={onAdd}/>
                <br />
                <Button variant="primary" >Ver detalles</Button>

            </Card.Body>
        </Card>
    </>
} 

export default Item;