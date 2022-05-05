import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { CartContext } from "../../Contexts/CartContext";

function CartWidget(props){  
    const [show, setShow] = useState(false);
    const [emptyBag, setEmptyBag] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { carritoSize } = useContext(CartContext);
    const { clear } = useContext(CartContext);
    const { compraTotal } = useContext(CartContext);

    useEffect(() => {
        if(carritoSize === 0){
            setEmptyBag(true);
        } else {
            setEmptyBag(false);
        }
    }, [carritoSize])

    return ( 
        <>
            <Button className="menuButton" variant="dark" onClick={handleShow}>
                <img className="menuIcon" src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/40/000000/external-cart-supermarket-flatart-icons-lineal-color-flatarticons.png" alt="Icono de carrito"/>
                <Badge pill bg="warning">{carritoSize}</Badge>
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Mi Carrito</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                { emptyBag ? (
                        <>
                            <p>No hay productos en el carrito</p>
                            <Link to="/productos" onClick={handleClose}>Ver nuestros productos</Link>
                        </>
                    ) : (
                        <>
                            {props.productsCart}
                        </>
                    )
                }
                    
                </Offcanvas.Body>
                { emptyBag ? (
                        <>
                        </>
                    ) : (
                        <>
                            <p>Total: ${compraTotal}</p>
                            <Link to="/cart" onClick={handleClose}>
                                <Button 
                                    variant="primary" >
                                        Comprar
                                </Button>
                            </Link>
                            <Button 
                                variant="primary" 
                                onClick={() => clear()} >
                                    Vaciar Carrito
                            </Button>
                        </>
                    )
                }
            </Offcanvas>
        </>
    )
}

export default CartWidget;