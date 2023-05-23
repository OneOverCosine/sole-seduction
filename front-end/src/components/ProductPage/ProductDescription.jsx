const ProductDescription = (props) => {
    return (
        <div className="description">
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            <p>{props.description}</p>
            <p>{props.colours}</p>
            <p>{props.sizes}</p>
            
        </div>
    )

}
export default ProductDescription