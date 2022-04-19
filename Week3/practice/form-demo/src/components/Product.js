import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useState } from "react";
const Product = (props) => {
    const { product, products, setProducts } = props;
    console.log("PRODUCT:", product);
    const { name, price, category, image } = product;
    const handleClick = () => {
        console.log("clicked");
        // Math.random /// 0 - 0.9
        const randomNumber = Math.floor(Math.random() * 500);
        const newPrice = price - randomNumber;
        // Optional
        const updatedProducts = products.map((p) => {
            if (product.id === p.id) {
                p.price = newPrice;
            }
            return p;
        });
        setProducts(updatedProducts);
    };
    const handleDelete = () => {
        const filteredProducts = products.filter((p) => p.id !== product.id);
        setProducts(filteredProducts);
    };
    return (
        <Col className="mb-4">
            <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p> price:{price}</p>
                        <p>category: {category}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={handleClick}>
                        change price
                    </Button>
                    <Button
                        className="ms-4"
                        variant="danger"
                        onClick={handleDelete}
                    >
                        Delete Product
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;
