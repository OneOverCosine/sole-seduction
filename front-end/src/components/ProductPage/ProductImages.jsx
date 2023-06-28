import { useState } from 'react';
import './productPage.css';
import placeholder from '../../assets/placeholder-image.jpg'

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
                        <img src={placeholder} alt="product image" />
                        // <img src={props.img[currentImageIndex]} alt="product image" />
                    )}
                </div>

                <div className="gallery-image">
                    {
                        props.img && props.img.map((image, index) => (
                            <img src={placeholder} alt="thumbnail" onClick={() => handleThumbnail(index)} key={index} />
                            // <img src={image} alt="thumbnail" onClick={() => handleThumbnail(index)} key={index} />     
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ProductImages