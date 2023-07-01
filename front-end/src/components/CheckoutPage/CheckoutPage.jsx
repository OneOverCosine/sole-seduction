import ItemSummary from "./ItemSummary";
import { ShopContext } from '../../context/ShopContext'
import { useContext } from "react";
import { Link } from "react-router-dom";
import './checkoutPage.css';

// import { mockProductData } from '../../mockProducts';
// const product = mockProductData

const CheckoutPage = () => {

    const { cartItems, products } = useContext(ShopContext)
    // const subtotal = getSubtotal()

    const getSubtotal = () => {

        let subtotal = 0;
        for (const key in cartItems) {
            const item = cartItems[key];
            const itemInfo = products.find((product) => product._id === item.itemId);
            if (itemInfo) {
                subtotal += item.quantity * itemInfo.price;
            }
        }

        return subtotal;
    }

    const subtotal = getSubtotal()

    return (

        <div className="cart">
            <div>
                <h2>Your cart items</h2>
            </div>

            <div className="cartItems">
                {products.length > 0 && products.map((productItem) => {
                    return (
                        <ItemSummary
                            data={productItem}
                            key={productItem._id}
                            products={products}
                            getSubtotal={getSubtotal}
                        />
                    )
                })}
            </div>

            <div className="checkout">
                <h3>Subtotal: £{subtotal.toFixed(2)}</h3>
                <Link to="/categories"><button>Continue Shopping</button></Link>
                <button>Checkout</button>
            </div>
        </div>

    )
}

export default CheckoutPage;