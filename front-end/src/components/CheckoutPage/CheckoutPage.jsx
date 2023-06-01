import ItemSummary from "./ItemSummary";
import {ShopContext} from '../../context/ShopContext'
import { useContext } from "react";
import './checkoutPage.css';

import { mockProductData } from '../../mockProducts';
const product = mockProductData

const CheckoutPage = () => {

    const { cartItems, getSubtotal } = useContext(ShopContext)
    const subtotal = getSubtotal()
   
    return (
        <>
            <div className="cart">
                <div>
                    <h1>Your cart items</h1>
                </div>

                <div className="cartItems">
                    {product.map((productItem) => {
                        if (cartItems[productItem._id] !== 0) {
                            return <ItemSummary data={productItem} key={productItem._id} />
                        } else {
                          return null;  
                        }
                    })}

                </div>

                <div className="checkout">
                    <h3>Subtotal: £{subtotal.toFixed(2)}</h3>
                    <button>Continue Shopping</button>
                    <button>Checkout</button>
                </div>
            </div>
        </>
    )
}

export default CheckoutPage;