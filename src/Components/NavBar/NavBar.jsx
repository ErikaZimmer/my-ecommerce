import React from 'react';
import "./NavBar.css";
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';

function NavBar(){
    return <>
        <Navbar bg="light" expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#">Dulces delicias</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="about">Sobre nosotros</Nav.Link>
                        <NavDropdown title="Shop" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="products">Ver todos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="sweet">Dulces</NavDropdown.Item>
                            <NavDropdown.Item href="salt">Salados</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="https://walink.co/825d69" target="_blank">Contacto</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Buscar producto"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>
                    <CartWidget/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default NavBar; 