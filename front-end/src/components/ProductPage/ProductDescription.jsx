import './productPage.css';

const ProductDescription = (props) => {
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

                <button className="cart-btn">Add to cart</button>
            </div>
        </div>
    )

}
export default ProductDescription