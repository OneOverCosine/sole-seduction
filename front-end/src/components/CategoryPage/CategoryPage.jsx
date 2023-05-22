import placeHolder from '../../assets/placeholder-image.jpg';
import './CategoryPage.css';
import { Row, Col, Card } from 'react-bootstrap';

const CategoryPage = () => {

    // Need to understand how the styles/filters information will be provided before we add that functionality
    // Sample data
    const products = [
        {
            brand: 'Balenciaga',
            style: 'Fresh Creps',
            price: 74.99,
            image: placeHolder
        },
        {
            brand: 'Prada',
            style: 'Hightops',
            price: 174.99,
            image: placeHolder
        },
        {
            brand: 'Converse',
            style: 'Sneakers',
            price: 244.99,
            image: placeHolder
        },
        {
            brand: 'Adidas',
            style: 'Trainers',
            price: 94.99,
            image: placeHolder
        },
        {
            brand: 'Nike',
            style: 'Air Jordans',
            price: 712.99,
            image: placeHolder
        }
    ];

    // Link to product page
    const goToProduct = () => { }

    const displayProducts = () => {
        return products.map((product, index) => {
            return (
                <Col key={index}>
                    <Card className='product-card m-1' onClick={goToProduct} style={{ cursor: "pointer" }}>
                        <Card.Img variant='top' src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.brand}</Card.Title>
                            <Card.Subtitle>{product.style}</Card.Subtitle>
                            <Card.Text>£{product.price}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    }

    return (
        <Row className='p-2' xs={2} md={4}>
            {displayProducts()}
        </Row>
    )
}

export default CategoryPage;