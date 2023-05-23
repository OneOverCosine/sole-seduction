import ItemSummary from "./ItemSummary";

const CheckoutPage = () => {
    return (
        <>
            <h2>Shopping Cart</h2>
            <ItemSummary />
            <h4>SubTotal:<span className="cart-total"> £100</span></h4>
            <button>Checkout</button>

        </>
    )
}

export default CheckoutPage;