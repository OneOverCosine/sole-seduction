
//'Number' converts the string input to a number

import { useContext } from "react";
import {ShopContext} from '../../context/ShopContext'

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
                        <p> {model} </p>
                        <p>Colour: {item.colour}</p>
                        <p>Size: {item.size}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p> £{price} </p>
                    <div className="countHandler">
                        <button onClick={() => removeFromCart(`${_id}-${item.colour}-${item.size}`)}> - </button>
                            <input
                                value={item.quantity}
                                onChange={(e) => updateCartItemCount(Number(e.target.value), `${_id}-${item.colour}-${item.size}`)} /> 
                        <button onClick={() => addToCart(_id, item.colour, item.size)}> + </button>
                    </div>
                </div>
            </div>
            ))}
        </>
    )
}

export default ItemSummary