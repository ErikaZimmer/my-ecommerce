import React, { useEffect, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { CartContext } from "../../Utils/CartContext";
import BuyButton from "../BuyButton";

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
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Mi Carrito</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                { emptyBag ? (
                        <>
                            <span>No hay productos en el carrito</span>
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
                            <p>{compraTotal}</p>
                            <BuyButton/>
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