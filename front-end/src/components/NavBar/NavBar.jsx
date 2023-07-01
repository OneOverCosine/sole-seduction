import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import basket from '../../assets/basket.svg';
import { ShopContext } from '../../context/ShopContext';

const NavBar = () => {

    const context = useContext(ShopContext);
    const cartSize = Object.keys(context.cartItems).length;

    return (
        <>
            <Navbar className='fixed-top p-2' expand="lg" bg="dark" variant="dark">
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
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/categories?gender=Men">Men</Nav.Link>
                            <Nav.Link href="/categories?gender=Women">Women</Nav.Link>
                            <Nav.Link className='text-danger' href="#sale">Sale</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Link className='link-light' to="/checkout">
                        <img
                            alt="basket icon"
                            src={basket}
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