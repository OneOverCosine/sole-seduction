import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/logo.png';

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt="sole seduction logo a shoe with a heart"
                            src={logo} // Stolen from the internet
                            height="30"
                            className="d-inline-block align-top"
                        />
                        Sole Seduction
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Men" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    Sport
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Formal
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something else</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Women" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    Sport
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Formal
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something else</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='text-danger' href="#sale">Sale</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar