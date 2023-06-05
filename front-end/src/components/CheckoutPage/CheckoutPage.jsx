import ItemSummary from "./ItemSummary";
import {ShopContext} from '../../context/ShopContext'
import { useContext } from "react";
import { Link } from "react-router-dom";
import './checkoutPage.css';

// import { mockProductData } from '../../mockProducts';
// const product = mockProductData

const CheckoutPage = () => {

    const { cartItems, getSubtotal, products } = useContext(ShopContext)
    const subtotal = getSubtotal()
   
    return (
        <>
            <div className="cart">
                <div>
                    <h1>Your cart items</h1>
                </div>

                <div className="cartItems">
                    {products.map((productItem) => {
                        if (cartItems[productItem._id]?.quantity > 0) {
                            return <ItemSummary data={productItem} key={productItem._id} />
                        } else {
                          return null;  
                        }
                    })}

                </div>

                <div className="checkout">
                    <h3>Subtotal: £{subtotal.toFixed(2)}</h3>
                    <Link to="/categories"><button>Continue Shopping</button></Link>
                    <button>Checkout</button>
                </div>
            </div>
        </>
    )
}

export default CheckoutPage;