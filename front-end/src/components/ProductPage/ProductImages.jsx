import loafers from '../../assets/product-page/mens-shoes-loafers.png';
import productplaceholder from '../../assets/product-page/gallery-placeholder.png';

const ProductImages = (props) => {            

    return (
        <>
            <div className="image">
                <img src={props.img} alt="product image" height={400} />
            
            </div>
    
       </>
    )
}

export default ProductImages