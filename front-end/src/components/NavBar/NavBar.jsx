import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import basket from '../../assets/basket.svg';
import { ShopContext } from '../../context/ShopContext';

const NavBar = () => {

    const context = useContext(ShopContext);
    const cartSize = Object.keys(context.cartItems).length;

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className='fluid'>
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
                            <Nav.Link href="/categories?gender=Men">Men</Nav.Link>
                            <Nav.Link href="/categories?gender=Women">Women</Nav.Link>
                            {/* <NavDropdown title="Men" id="basic-nav-dropdown">
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
                            </NavDropdown> */}
                            <Nav.Link className='text-danger' href="#sale">Sale</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Link className='link-light' to="/checkout">
                        <img
                            alt="basket icon"
                            src={basket} // Stolen from the internet
                            height="20"
                            className="d-inline-block align-top"
                        />
                        &nbsp; &#40; {cartSize} &#41; &nbsp;
                    </Link>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar