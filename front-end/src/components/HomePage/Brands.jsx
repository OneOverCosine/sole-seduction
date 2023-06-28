import React from 'react';
import placeHolder from '../../assets/placeholder-image.jpg';
import { useNavigate, Link } from 'react-router-dom';
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

    const displayBrands = () => {
        return brands.map((brand, index) => {
            return (
                <Col key={index}>
                    <Link className='link-dark' to={`/categories?brand=${brand.name}`}>
                        <Card className='card m-1' style={{ "cursor": "pointer" }} >
                            <Card.Img variant='top' src={placeHolder} />
                            <Card.Title className='text-center'>{brand.name}</Card.Title>
                        </Card>
                    </Link>
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