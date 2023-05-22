const ProductDescription = () => {

    return (  
        <>
        <div className="product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate eu. Sit amet porttitor eget dolor. Ultrices gravida dictum fusce ut placerat. Vitae congue eu consequat ac felis donec et odio pellentesque. Et pharetra pharetra massa massa ultricies. Netus et malesuada fames ac turpis egestas sed. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Fames ac turpis egestas maecenas. Id cursus metus aliquam eleifend mi. Risus pretium quam vulputate dignissim. Molestie ac feugiat sed lectus vestibulum mattis. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tincidunt augue interdum velit euismod in pellentesque massa placerat. Elementum facilisis leo vel fringilla est ullamcorper eget. Aliquam id diam maecenas ultricies.
        </div>
            
        <div className="product-colour">
            <h3>Colours</h3>
            <input type="radio" value="brown" name="colour-option" />Brown
            <input type="radio" value="black" name="colour-option" /> Black
        </div>
            
        <div className="product-size">
            <h3>Sizes</h3>
            <input type="radio" value="7" name="size-option" />7
            <input type="radio" value="8" name="size-option" />8
            <input type="radio" value="9" name="size-option" />9
            <input type="radio" value="10" name="size-option" />10
            <input type="radio" value="11" name="size-option" />11
            <input type="radio" value="12" name="size-option" />12     
        </div>
            
        <button className="add-to-cart-button">Add to Cart</button>
        </>
    )
}
export default ProductDescription