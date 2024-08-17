import { Container, Row, Col } from "react-bootstrap";
import CartItem from "./CartItem";
import Card from 'react-bootstrap/Card';
import Navbar from "react-bootstrap/Navbar";

const Cart = (props) => {
    const {
        products,
        onIncreaseQty,
        onDecreaseQty,
        onItemRemove,
        getCartTotalPrice
    } = props;

    const colorIndex = Math.floor(Math.random() * (5 - 1 + 1)) + 1

    const color = [
        "bg-primary-subtle", 
        "bg-success-subtle", 
        "bg-warning-subtle", 
        "bg-info-subtle", 
        'bg-light-subtle',
        "bg-primary-subtle bg-gradient", 
        "bg-success-subtle bg-gradient", 
        "bg-warning-subtle bg-gradient", 
        "bg-info-subtle bg-gradient", 
        'bg-light-subtle bg-gradient',
    ];

    return (
        <>
            <Container className="bg-white">
                <Row className="g-2 justify-content-center">
                    <Col md={7}>
                        {products.map((item, index) => (
                            <CartItem
                                item={item}
                                key={index}
                                onIncreaseQty={onIncreaseQty}
                                onDecreaseQty={onDecreaseQty}
                                onItemRemove={onItemRemove}
                                itemColor={color[index]}
                            />
                        ))}
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title >Cart Total </Card.Title>
                                <Card.Text className="fs-5">
                                    $<span className="text-dark">{getCartTotalPrice()}</span>
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