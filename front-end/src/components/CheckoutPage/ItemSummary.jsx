
//'Number' converts the string input to a number

import { useContext } from "react";
import {ShopContext} from '../../context/ShopContext'

const ItemSummary = (props) => {
    const { _id, model, img, price } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)
    return (
        <>
            <div className="cartItem">
                <img src={img[0]}  />
                <div className="description">
                    <p> {model} </p>
                    <p> £{price} </p>
                    <div className="countHandler">
                        <button onClick={() => removeFromCart(_id)}> - </button>
                        <input value={cartItems[_id]?.quantity} onChange={(e) => updateCartItemCount(Number(e.target.value), _id)} /> 
                        <button onClick={() => addToCart(_id)}> + </button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ItemSummary