import ProductImages from "./ProductImages";
import ProductDescription from "./ProductDescription";
import { mockProductData } from '../../mockProducts';
const product = mockProductData
import './productPage.css';
import { Link } from 'react-router-dom';

const ProductPage = () => {

    const displayProductDetails = product.map(productItem => (
        <>
            <div className="product-page" key={productItem._id}>
                <ProductImages 
                    // key={productItem._id}
                    img={productItem.img}
                />
                
                <ProductDescription 
                    // key={productItem.title}
                    id={productItem._id}
                    model={productItem.model}
                    price={productItem.price}
                    description={productItem.description}
                    colours={productItem.colours}
                    sizes={productItem.sizes}
                />
                

            </div>
        </>
        ));
           
    return (
        <>
            {displayProductDetails}
            <button className="go-to-cart">
                <Link to="/checkout">Go to Cart</Link>
            </button>
        </>       
        
    )
 
}

export default ProductPage;