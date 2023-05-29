import ItemSummary from "./ItemSummary";
// import { mockProductData } from '../mockProducts';
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
                            return <ItemSummary data={productItem} />
                        }
                    })}

                </div>

                <div className="checkout">
                    <h3>Subtotal: £{subtotal}</h3>
                    <button>Continue Shopping</button>
                    <button>Checkout</button>
                </div>
            </div>

        </>
    )
}

export default CheckoutPage;