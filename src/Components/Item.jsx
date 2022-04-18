import React, { useState } from "react";
import "./ItemList/ItemList.css"
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

function Item(props){
    const [carrito, setCarrito] = useState(1);

    function onAdd(dato){
        setCarrito(dato);
    }
    console.log(carrito);

    return<>
        <Card style={{ width: '18rem'}} key={props.item.id}>
            <Card.Img variant="top" src={props.item.img} />
            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>
                <Card.Text>
                Precio: $ {props.item.price}
                </Card.Text>
                <ItemCount stock={props.item.stock} initial={1} onAdd={onAdd}/>
                <br />
                <Link to={`/producto/${props.item.id}`} >
                    <Button variant="primary">
                        Ver detalle
                    </Button>
                </Link>
            </Card.Body>
        </Card>   
    </>
} 

export default Item;