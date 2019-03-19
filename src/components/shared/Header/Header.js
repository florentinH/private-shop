import React from 'react'
import logo from './logo.jpg'
import './Header.css'
import { Link } from 'react-router-dom'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';


const Header = () => {
    return (
        <div className="Header">
            <Link to="/">
                <img src={logo} alt="logo" className="Header-logo" />
            </Link>
            <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">PRIVATE SHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Accueil</Nav.Link>
                    <Nav.Link href="#link">Magasins</Nav.Link>
                    <NavDropdown title="Produits" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Produits</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>;
            </div>
        </div>
    )
}

export default Header