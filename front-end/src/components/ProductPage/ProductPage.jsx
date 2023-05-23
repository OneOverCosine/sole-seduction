import ProductImages from "./ProductImages";
import ProductDescription from "./ProductDescription";
import { mockProductData } from '../../mockProducts';
const product = mockProductData



const ProductPage = () => {

    const displayProductDetails = product.map(productItem => (
         <>
            <ProductImages 
            key={productItem._id}
            img={productItem.img} 
            />
            
            <ProductDescription 
                key={productItem.title}
                title={productItem.title}
                description={productItem.description}
                price={productItem.price}
                colours={productItem.colours}
                sizes={productItem.sizes}
            />
        </>
        ));
           
    return (
        <>{displayProductDetails}</>       
        
    )
 
}

export default ProductPage;