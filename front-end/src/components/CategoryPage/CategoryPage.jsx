import axios from "axios";
import placeHolder from "../../assets/placeholder-image.jpg";
import "./CategoryPage.css";
import { Row, Col, Card } from "react-bootstrap";
import { mockProductData } from '../../mockProducts';
import { useEffect, useState } from 'react';

const CategoryPage = () => {
    const [categoryInfo, setCategoryInfo] = useState([]);


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_REACT_APP_DB_URL}categories`)
            .then(res => {
                setCategoryInfo(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    console.log("Category info:\n" + categoryInfo);

    // Need to understand how the styles/filters information will be provided before we add that functionality
    // Sample data

    const products = mockProductData;

    // Link to product page
    const goToProduct = () => { }

    const displayProducts = () => {
        return products.map((product, index) => {
            return (
                <Col key={index}>
                    <Card className='product-card m-1' onClick={goToProduct}>
                        <Card.Img variant='top' src={product.img[0]} />
                        <Card.Body>
                            <Card.Title>{product.brand}</Card.Title>
                            <Card.Subtitle>{product.model}</Card.Subtitle>
                            <Card.Text>£{product.price}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    }

    return (
        <Row className="p-2" xs={2} md={4}>
            {displayProducts()}
        </Row>
    )
}

export default CategoryPage;