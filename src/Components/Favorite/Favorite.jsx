import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";

function Favorite(){  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <>
            <Button variant="dark" onClick={handleShow}>
            <img className='menuIcon' src="https://img.icons8.com/pastel-glyph/40/000000/hearts---v1.png" alt="Icono de Favoritos"/>
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Mis Favoritos</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    prueba
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Favorite;