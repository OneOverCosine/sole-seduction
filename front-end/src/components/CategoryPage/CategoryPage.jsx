import axios from "axios";
import "./CategoryPage.css";
import { Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { useSearchParams, useParams } from 'react-router-dom'
import Filter from "../Filter/Filter";
import { useNavigate } from 'react-router-dom';
import FilterNew from "../Filter/FilterNew";

const CategoryPage = () => {
    const navigate = useNavigate();
    const [productInfo, setProductInfo] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_REACT_APP_DB_URL}categories/${searchParams.toString()}`)
            .then(res => {
                setProductInfo(res.data.products);
                setCategories(formatCategories(res.data.categories));
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    // Link to product page
    const goToProduct = (productId) => {
        navigate(`/product/${productId}`)
    }

    const displayProducts = () => {
        return productInfo.map((product, index) => {
            return (
                <Col key={index}>
                    <Card className='product-card m-1' key={product.id} onClick={() => goToProduct(product._id)}>
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

    console.log(`Categories: ${JSON.stringify(categories, null, 2)}`)

    const formatCategories = categoryData => {
        let formatted = { Gender: [], Brand: [], Colour: [] };
        for (let i = 0; i < categoryData.length; i++) {
            formatted[categoryData[i]["type"]].push(categoryData[i]["name"]);
        }
        return formatted;
    }

    return (
        <>
            {/* <Filter /> */}
            <FilterNew categories={categories} />
            <Row className="p-2" xs={2} md={4}>
                {displayProducts()}
            </Row>
        </>
    )
}

export default CategoryPage;