import React from 'react';
import "./NavBar.css";
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Favorite from '../Favorite/Favorite';
import { Link } from 'react-router-dom';
import CartWidgetContainer from '../CartWidget/CartWidgetContainer';


function NavBar(){
    return <>
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand className="justify-content-center" > Dulces delicias</Navbar.Brand>
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" sticky="top">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/">Home</Link>
                        <Link to="about">Sobre nosotros</Link>
                        <Link to="/categoria/Dulces">Dulces</Link>
                        <Link to="/categoria/Salados">Salados</Link>
                        <Link to="https://walink.co/825d69" target="_blank">Contacto</Link>
                    </Nav>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Form className="d-flex searchForm" >
                            <FormControl
                                type="search"
                                placeholder="Buscar producto"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Buscar</Button>
                        </Form>
                    <Favorite />
                    <CartWidgetContainer/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default NavBar; 