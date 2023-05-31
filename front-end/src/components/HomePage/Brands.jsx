import React from 'react';
import placeHolder from '../../assets/placeholder-image.jpg';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

const Brands = () => {

    const navigate = useNavigate();

    const brands = [
        {
            name: 'Balenciaga',
            image: placeHolder
        },
        {
            name: 'Gucci',
            image: placeHolder
        },
        {
            name: 'Adidas',
            image: placeHolder
        },
        {
            name: "Doc Marten's",
            image: placeHolder
        },
        {
            name: 'Prada',
            image: placeHolder
        }
    ];

    const goToBrand = () => {
        // Redirect to category page with params '/brandname'
        navigate('/')
    }

    const displayBrands = () => {
        return brands.map((brand, index) => {
            return (
                <Col key={index}>
                    <Card className='card m-1' onClick={goToBrand} style={{ "cursor": "pointer" }} >
                        <Card.Img variant='top' src={brand.image} />
                        <Card.Title>{brand.name}</Card.Title>
                    </Card>
                </Col >
            )
        })
    }

    return (
        <Row className='p-2' xs={2} md={4}>
            {displayBrands()}
        </Row>
    )
}

export default Brands;