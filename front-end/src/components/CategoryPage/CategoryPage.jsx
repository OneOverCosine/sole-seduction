import axios from "axios";
import "./CategoryPage.css";
import { Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { useSearchParams, useParams } from 'react-router-dom'
import Filter from "../Filter/Filter";

const CategoryPage = () => {
    const [productInfo, setProductInfo] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        console.log("useEffect called");
        axios.get(`${import.meta.env.VITE_REACT_APP_DB_URL}categories/${searchParams.toString()}`)
            .then(res => {
                setProductInfo(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    // Link to product page 
    const goToProduct = () => { }

    const displayProducts = () => {
        return productInfo.map((product, index) => {
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
        <>
            <Filter />
            <Row className="p-2" xs={2} md={4}>
                {displayProducts()}
            </Row>
        </>
    )
}

export default CategoryPage;