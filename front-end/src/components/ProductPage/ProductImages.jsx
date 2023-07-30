import { useState } from "react";
import "./productPage.css";
import placeholder from "../../assets/placeholder-image.jpg";

const ProductImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    placeholder,
    placeholder,
    placeholder,
    placeholder,
    placeholder,
  ];

  const handleThumbnail = (index) => {
    setCurrentImageIndex(index);

    const galleryImages = document.querySelectorAll(".gallery-image img");
    galleryImages[currentImageIndex].classList.remove("active");
    galleryImages[index].classList.add("active");
  };

  return (
    <>
      <div className="images">
        <div className="main-image">
          {images.length > 0 && (
            <img src={images[currentImageIndex]} alt="product image" />
          )}
        </div>

        <div className="gallery-image">
          {images &&
            images.map((image, index) => (
              <img
                src={image}
                alt="thumbnail"
                onClick={() => handleThumbnail(index)}
                key={index}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductImages;
