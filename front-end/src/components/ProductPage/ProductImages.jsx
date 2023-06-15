import { useState } from 'react';
import './productPage.css';

const ProductImages = (props) => {  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleThumbnail = (index) => {
        setCurrentImageIndex(index);

        const galleryImages = document.querySelectorAll(".gallery-image img");
        galleryImages[currentImageIndex].classList.remove("active");
        galleryImages[index].classList.add("active");    
    }

    return (
        <>
            <div className="images">
                <div className="main-image">
                    {props.img.length > 0 && (
                        <img src={`http://localhost:5173/${props.img[currentImageIndex]}`} alt="product image" />
                        // <img src={props.img[currentImageIndex]} alt="product image" />
                    )}   
                </div>

                <div className="gallery-image">
                    {
                        props.img && props.img.map((image, index) => (
                            <img src={`http://localhost:5173/${image}`} alt="thumbnail" onClick={ () => handleThumbnail(index) } key={index}/> 
                            // <img src={image} alt="thumbnail" onClick={() => handleThumbnail(index)} key={index} />     
                        ))
                    }
                </div>
            </div>
       </>
    )
}

export default ProductImages