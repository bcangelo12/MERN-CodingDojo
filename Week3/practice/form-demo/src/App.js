import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";
import Form from "./components/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "./components/Nav";
import { useState } from "react";
function App() {
    const [products, setProducts] = useState([]);
    return (
        <>
            <Nav />
            <Container>
                <Row>
                    <Col className="mb-4">
                        <Form products={products} setProducts={setProducts} />
                    </Col>
                </Row>
                <Row>
                    {products.map((product) => {
                        return (
                            <Product
                                key={product.id}
                                product={product}
                                products={products}
                                setProducts={setProducts}
                            />
                        );
                    })}
                </Row>
            </Container>
        </>
    );
}

export default App;
