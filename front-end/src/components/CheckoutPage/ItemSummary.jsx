
//'Number' converts the string input to a number

import { useContext } from "react";
import { ShopContext } from '../../context/ShopContext'
import { Link } from "react-router-dom";

const ItemSummary = (props) => {
    const { _id, model, img, price } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)

    const items = Object.values(cartItems).filter((item) => item.itemId === _id);

    return (
        <>
            {items.map((item, index) => (
                <div className="cartItem" key={index}>
                    <img src={img[0]} alt={model} />
                    <div className="description">
                        <h4> {model} </h4>
                        <Link to={`/product/${item.itemId}`}>Go to product</Link>
                        <div className="d-flex">
                            <h6 className="align-self-center">Colour: &nbsp;</h6>
                            <div className='colour m-1 border border-dark' style={{
                                background: item.colour,
                            }}></div>
                        </div>
                        <h6>Size: {item.size}</h6>
                        <div className="d-flex ">
                            <h6 className="align-self-center">Quantity: {item.quantity} &nbsp;</h6>
                            {/* <div className="countHandler"> */}
                            <button className="btn btn-sm btn-dark m-1" onClick={() => removeFromCart(`${_id}-${item.colour}-${item.size}`)}> - </button>
                            {/* <input
                                className="align-self-stretch m-1"
                                value={item.quantity}
                                onChange={(e) => updateCartItemCount(Number(e.target.value), `${_id}-${item.colour}-${item.size}`)} /> */}
                            <button className="btn btn-sm btn-dark m-1" onClick={() => addToCart(_id, item.colour, item.size)}> + </button>
                            {/* </div> */}
                        </div>
                        <h5> £{price} </h5>

                    </div>
                </div>
            ))}
        </>
    )
}

export default ItemSummary