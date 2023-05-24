import './productPage.css';

const ProductImages = (props) => {  

    const handleTab = () => {

    }

    return (
        <>
            <div className="images">
                <div className="main-image">
                    <img src={props.img[0]} alt="product image" />
                
                </div>

                <div className="gallery-image">
                    {
                        props.img.map(image => (
                            <img src={image} alt="thumbnail" onClick={ handleTab }/>
                            
                        ))
                    }
                </div>

            </div>
    
       </>
    )
}

export default ProductImages