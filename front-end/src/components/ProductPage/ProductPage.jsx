import ProductImages from "./ProductImages";
import ProductDescription from "./ProductDescription";
import './productPage.css';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../../sole_seduction.product_data.js';

const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(products.find(product => product._id == productId));
    }, [productId]);

    if (!product) {
        return <p>Loading...</p>;
    }

    const displayProductDetails = (
        <div className="product-page" key={product._id}>
            <ProductImages img={product.img} />
            <ProductDescription
                id={product._id}
                model={product.model}
                price={product.price}
                description={product.description}
                colours={product.colours}
                sizes={product.sizes}
            />
        </div>
    )

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