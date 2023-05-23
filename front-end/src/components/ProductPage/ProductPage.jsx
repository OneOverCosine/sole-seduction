import ProductImages from "./ProductImages";
import ProductDescription from "./ProductDescription";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


const ProductPage = () => {

    return (
        <>
            {/* <Container>
                <Row>
                    <Col sm={6}><ProductImages /></Col> 
                    <Col sm={6}><ProductDescription /></Col>
                </Row>
            </Container> */}

            <ProductImages />
            <ProductDescription />
        </>
    )
}

export default ProductPage;