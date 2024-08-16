import { Container, Row, Col } from "react-bootstrap";
import CartItem from "./CartItem";
import Card from 'react-bootstrap/Card';
import Navbar from "react-bootstrap/Navbar";

const Cart = (props) => {
    console.log("Cart", props);
    const {
        products,
        onIncreaseQty,
        onDecreaseQty,
        onItemRemove,
        getCartTotalPrice
    } = props;

    const color = ["bg-primary-subtle", "bg-success-subtle", "bg-warning-subtle", "bg-info-subtle", 'bg-light-subtle'];
    return (
        <>
            <Container className="bg-white">
                <Row className="g-2 justify-content-center">
                    <Col md={10}>
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
                    <Navbar sticky="bottom" className="bg-warning bg-gradient rounded-pill w-25 bg-opacity-75">
                        <Card.Body>
                            <Card.Title >Cart Total </Card.Title>
                            <Card.Text className="fs-5">
                                $<span className="text-dark">{getCartTotalPrice()}</span>
                            </Card.Text>
                        </Card.Body>
                    </Navbar>
                </Row>

            </Container>
        </>
    );
}

export default Cart;