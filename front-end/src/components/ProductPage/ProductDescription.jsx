import "./productPage.css";
import { ShopContext } from "../../context/ShopContext";
import { useContext, useState } from "react";

const ProductDescription = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const [selectedColour, setSelectedColour] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const cartItemAmount = cartItems[props.id];

  const handleAddToCart = () => {
    addToCart(props.id, selectedColour, selectedSize);
  };

  const handleColorSelection = (colour) => {
    setSelectedColour(colour);
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="details">
      <div className="box">
        <div className="row">
          <h2>{props.model}</h2>
          <span>£{props.price}</span>
        </div>

        <div className="colours">
          {props.colours.map((colour) => (
            <button
              key={colour}
              style={{
                background: colour,
                border:
                  selectedColour === colour
                    ? "3px solid lightseagreen"
                    : "1px solid #333",
              }}
              onClick={() => handleColorSelection(colour)}
            ></button>
          ))}
        </div>

        <div className="sizes">
          {props.sizes.map((size) => (
            <button
              key={size}
              style={{
                border:
                  selectedSize === size ? "3px solid lightseagreen" : "none",
              }}
              onClick={() => handleSizeSelection(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <p className="description">{props.description}</p>

        <button
          className="cart-btn"
          disabled={!selectedColour && !selectedSize}
          onClick={handleAddToCart}
        >
          Add to cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>
      </div>
    </div>
  );
};
export default ProductDescription;
