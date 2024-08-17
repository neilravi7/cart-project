import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { IoCartOutline } from "react-icons/io5";



const Navigation = (props) => {
    const {getCartTotalItemCount, addNewProduct} = props;
    return (
        <>
            <Navbar expand="lg" className="bg-warning bg-gradient mb-3 ">
                <Container>
                    <Navbar.Brand href="#home">Cart-Project</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home"></Nav.Link>
                            <Nav.Link href="#link"></Nav.Link>
                            <Nav.Item>
                                <Button variant="dark" onClick={() => addNewProduct()}>
                                    Add Product
                                </Button>
                            </Nav.Item>
                            <Nav.Item>
                                <Button variant="">
                                    <IoCartOutline size={40} /> <Badge bg="dark">{getCartTotalItemCount()}</Badge>
                                </Button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );

}

export default Navigation;