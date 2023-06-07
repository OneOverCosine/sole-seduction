import axios from "axios";
import "./CategoryPage.css";
import { Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { useSearchParams, useParams } from 'react-router-dom'
import Filter from "../Filter/Filter";

const CategoryPage = () => {
    const [productInfo, setProductInfo] = useState([]);
    const [searchParams] = useSearchParams();
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        //console.log(`Search params: ${filters.toString()}`)
        axios.get(`${import.meta.env.VITE_REACT_APP_DB_URL}categories/${filters.toString()}`)
            .then(res => {
                setProductInfo(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    // Link to product page 
    const goToProduct = () => { }

    const getFilters = (selectedFilters) => {
        // this seems to lag behind the value in Filter...
        setFilters(selectedFilters);
        console.log(`Filters in Category: ${filters}`)
    }

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
            <Filter getFilters={getFilters} />
            <Row className="p-2" xs={2} md={4}>
                {displayProducts()}
            </Row>
        </>
    )
}

export default CategoryPage;