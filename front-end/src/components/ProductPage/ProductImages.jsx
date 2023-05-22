import loafers from '../../assets/product-page/mens-shoes-loafers.png';
import productplaceholder from '../../assets/product-page/gallery-placeholder.png';

const ProductImages = () => {
 

    return (
        <>
            <img className='product-image' src={loafers} height={400} />
            <div className='product-gallery'>
                <img className='product-gallery-image' src={productplaceholder} height={120} />
                <img className='product-gallery-image' src={productplaceholder} height={120} />
                <img className='product-gallery-image' src={productplaceholder} height={120} />
            </div>
        
       </>
    )
}

export default ProductImages