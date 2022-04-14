import React, { useState } from "react";
import "./CartWidget.css";
import { Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";

function CartWidget(){  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <>
            <Button variant="light" onClick={handleShow}>
                <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/40/000000/external-cart-supermarket-flatart-icons-lineal-color-flatarticons.png" alt="Icono de carrito"/>
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Mi Carrito</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    prueba
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default CartWidget;