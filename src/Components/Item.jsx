import React from "react";
import "./ItemList/ItemList.css"
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Item(props){

    return(
        <>
            <Link to={`/producto/${props.item.id}`} >
                <Card style={{ width: '18rem'}} key={props.item.id}>
                    <Card.Img variant="top" src={props.item.img} />
                    <Card.Body>
                        <Card.Title>{props.item.name}</Card.Title>
                        <Card.Text>
                        Precio: $ {props.item.price}
                        </Card.Text>
                    </Card.Body>
                </Card>   
            </Link>
        </>
    )
} 

export default Item;