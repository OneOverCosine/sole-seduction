import React from 'react';
import placeHolder from '../../assets/placeholder-image.jpg'
import { Card, Row, Col, Image } from 'react-bootstrap';

const Categories = () => {

    // If we figure out how to pass these from the server they can be served as props here, so that they could be changed easily.
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
    }

    const displayBrands = () => {
        return brands.map((brand, index) => {
            return (
                <Col key={index}>
                    <Card onClick={goToBrand} style={{ cursor: "pointer" }}>
                        <Card.Img variant='top' src={brand.image} />
                        <Card.Title>{brand.name}</Card.Title>
                    </Card>
                </Col>
            )
        })
    }

    return (
        <Row className='mt-2' md={5}>
            {displayBrands()}
        </Row>
    )
}

export default Categories