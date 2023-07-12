import React from 'react';
import adidas from '../../assets/logos/adidas.jpg';
import prada from '../../assets/logos/prada.jpg';
import gucci from '../../assets/logos/Gucci.jpg';
import docmartens from '../../assets/logos/docmartens.jpg';
import balenciaga from '../../assets/logos/balenciaga-paris.jpg';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

const Brands = () => {

    const brands = [
        {
            name: 'Balenciaga',
            image: balenciaga
        },
        {
            name: 'Gucci',
            image: gucci
        },
        {
            name: 'Adidas',
            image: adidas
        },
        {
            name: "Doc Marten's",
            image: docmartens
        },
        {
            name: 'Prada',
            image: prada
        }
    ];

    const displayBrands = () => {
        return brands.map((brand, index) => {
            return (
                <Col key={index}>
                    <Link className='link-dark' to={`/categories?brand=${brand.name}`}>
                        <Card className='card m-1' style={{ "cursor": "pointer" }} >
                            <Card.Img className='img-fluid' variant='top' src={brand.image} />
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