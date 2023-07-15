import './checkoutpage.css'
import { useContext, useState } from "react";
import { ShopContext } from '../../context/ShopContext'
import { Link } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';

const ItemSummary = (props) => {
    const { _id, model, img, price } = props.data;
    const { cartItems, addToCart, removeFromCart, deleteFromCart } = useContext(ShopContext)

    const [show, setShow] = useState(false);

    const removeItem = item => {
        deleteFromCart(item);
        setShow(false);
    }

    const items = Object.values(cartItems).filter((item) => item.itemId === _id);

    return (
        <>
            {items.map((item, index) => (
                <div className="cartItem" key={index}>
                      <Link to={`/product/${item.itemId}`}><img src={img[0]} alt={model} /></Link>
                    <div className="description">
                      
                         <Link to={`/product/${item.itemId}`}><h4> {model} </h4></Link>
                      
                        <div className="d-flex">
                            <h6 className="align-self-center">Colour: &nbsp;</h6>
                            <div className='colour m-1 border border-dark' style={{
                                background: item.colour,
                            }}></div>
                        </div>
                        <h6>Size: {item.size}</h6>
                        <div className="d-flex ">
                            <h6 className="align-self-center">Quantity: {item.quantity} &nbsp;</h6>
                            <button className="btn btn-sm btn-dark m-1 py-0" onClick={() => { if (item.quantity > 1) removeFromCart(`${_id}-${item.colour}-${item.size}`) }}> - </button>
                            <button className="btn btn-sm btn-dark m-1 py-0" onClick={() => addToCart(_id, item.colour, item.size)}> + </button>
                            <button className="btn btn sm btn-danger m-1 py-0" onClick={() => setShow(true)}><i className="fa-regular fa-trash-can"></i></button>
                        </div>
                        <h5> £{price} </h5>



                        <Modal show={show} onHide={() => setShow(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Remove Item</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Are you sure you want to remove <strong>{model}</strong> from the cart?
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant='danger' onClick={() => removeItem(`${_id}-${item.colour}-${item.size}`)}>Remove Item</Button>
                                <Button variant="secondary" onClick={() => setShow(false)}>
                                    Cancel
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ItemSummary