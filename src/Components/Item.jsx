import React from "react";
import "./ItemList/ItemList.css"
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ItemCount from "./ItemCount";

function Item(props){
    
    return<>
        <Card style={{ width: '18rem' }} key={props.id}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                Precio: $ {props.price}
                </Card.Text>
                <ItemCount stock={props.stock} initial={1} />
            </Card.Body>
        </Card>
    </>
} 

export default Item;