import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductForm = (props) => {
    const { products, setProducts } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/products", {
                title,
                price,
                description,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setTitle("");
                setPrice("");
                setDescription("");
                setProducts([...products, res.data]);
            })
            .catch((err) => console.log(err));
    };

    return (
        <Container className="col-6">
            <h1>Product Manager</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="my-3" controlId="title">
                    <Form.Label column sm={2}>
                        Title
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-3" controlId="price">
                    <Form.Label column sm={2}>
                        Price
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="number"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-3" controlId="description">
                    <Form.Label column sm={2}>
                        Description
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Button className="my-2" variant="primary" type="submit">
                    Create Product
                </Button>
            </Form>
        </Container>
    );
};

export default ProductForm;
