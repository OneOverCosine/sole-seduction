import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, Button, Modal } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import basket from '../../assets/basket.svg';
import { ShopContext } from '../../context/ShopContext';

const NavBar = () => {

    const context = useContext(ShopContext);
    const cartSize = Object.keys(context.cartItems).length;
    const [show, setShow] = useState(false);

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
                            <Nav.Link href="/categories">All Products</Nav.Link>
                            <Nav.Link className='text-danger' onClick={() => setShow(true)}>Sale</Nav.Link>
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

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Sale</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thanks for testing out our site!<br />
                    We don't have any sale items yet, we just liked the red link.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NavBar