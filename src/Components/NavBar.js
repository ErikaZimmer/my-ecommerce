import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function NavBarApp(){
    return <>
        <Navbar bg="light" expand="lg">
            <Container fluid>
            <Navbar.Brand href="#">Dulces delicias</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Sobre nosotros</Nav.Link>
                <NavDropdown title="Shop" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Dulces</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Salados</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                    Servicios
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="https://walink.co/825d69" target="_blank">
                    Contacto
                </Nav.Link>
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
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default NavBarApp; 