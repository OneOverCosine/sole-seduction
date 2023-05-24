import ProductImages from "./ProductImages";
import ProductDescription from "./ProductDescription";
import { mockProductData } from '../../mockProducts';
const product = mockProductData
import './productPage.css';

const ProductPage = () => {

    const displayProductDetails = product.map(productItem => (
        <>
            <div className="product-page">
                <ProductImages 
                    key={productItem._id}
                    img={productItem.img}
                />
                
                <ProductDescription 
                    key={productItem.title}
                    title={productItem.title}
                    price={productItem.price}
                    description={productItem.description}
                    colours={productItem.colours}
                    sizes={productItem.sizes}
                    />
            </div>
        </>
        ));
           
    return (
        <>{displayProductDetails}</>       
        
    )
 
}

export default ProductPage;