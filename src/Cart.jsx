import { Container, Row, Col } from "react-bootstrap";
import CartItem from "./CartItem";
import Card from 'react-bootstrap/Card';
 
const Cart = (props) => {
    console.log("Cart", props);
    const {
        products, 
        onIncreaseQty,
        onDecreaseQty,
        onItemRemove,
        getCartTotalPrice
    } = props;
    return (
        <>
            <Container>
                <Row className="g-2 justify-content-center">
                    <Col md={7}>
                    {products.map((item, index) => (
                        <CartItem 
                            item={item} 
                            key={index} 
                            onIncreaseQty={onIncreaseQty} 
                            onDecreaseQty={onDecreaseQty}
                            onItemRemove={onItemRemove}
                        />
                    ))}
                    </Col>
                    <Col md={3}>
                        <Card
                            bg={'dark'}
                            text={'white'}
                            style={{ width: '18rem' }}
                            
                        >
                            <Card.Body>
                                <Card.Title >Cart Total </Card.Title>
                                <Card.Text className="fs-5">
                                    $<span className="text-warning">{getCartTotalPrice()}</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Cart;