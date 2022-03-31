import React from "react";
import "./ProductsSection.css"
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function ProductsItem(props){
    return<>
        <Card style={{ width: '18rem' }} key={props.id}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                Precio: $ {props.price}
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    </>
} 

export default ProductsItem;