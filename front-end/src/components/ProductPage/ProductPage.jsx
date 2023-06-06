import ProductImages from "./ProductImages";
import ProductDescription from "./ProductDescription";
// import { mockProductData } from '../../mockProducts';
// const product = mockProductData
import './productPage.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ProductPage = ({ props }) => {
    const { productId } = useParams();
    // const [product, setProduct] = useState([]);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_REACT_APP_DB_URL}products/product/${productId}`)
        .then(response => {
        setProduct(response.data);
    })
        .catch(error => {
        console.log(error);
        });
    }, [productId]);

    if (!product) {
    return <p>Loading...</p>; 
  }

    // const displayProductDetails = product.map(productItem => (
        // <>
            {/* <div className="product-page" key={productItem._id}> */}
                {/* <ProductImages 
                    // key={productItem._id}
                    img={productItem.img}
                />
                
                <ProductDescription 
                    // key={productItem.model}
                    id={productItem._id}
                    model={productItem.model}
                    price={productItem.price}
                    description={productItem.description}
                    colours={productItem.colours}
                    sizes={productItem.sizes}
                />
            </div>
        </> */}
        {/* )); */}
    
    console.log(product);
    
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