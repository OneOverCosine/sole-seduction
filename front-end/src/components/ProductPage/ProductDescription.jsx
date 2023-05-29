import './productPage.css';
import {ShopContext} from '../../context/ShopContext'
import { useContext } from 'react';

const ProductDescription = (props) => {

    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[props.id]
    
    const handleAddToCart = () => {
        addToCart(props.id);
     };

    return (
        <div className="details">
            <div className="box">
                <div className="row">
                    <h2>{props.title}</h2>
                    <span>£{props.price}</span>
                </div>

                <div className="colours">
                    {
                        props.colours.map(colour => (
                            <button style={{background: colour}}></button>
                        ))
                    } 
                </div>

                <div className="sizes">
                    {
                        props.sizes.map(size => (
                            <button>{size}</button>
                        ))
                    }
                </div>
                       
                <p className="description">{props.description}</p>

                <button className="cart-btn" onClick={handleAddToCart}>
                    Add to cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
                </button>
            </div>
        </div>
    )

}
export default ProductDescription