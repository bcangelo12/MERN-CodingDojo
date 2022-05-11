import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => {
                console.log(
                    "Something went wrong pulling product info for editing",
                    err
                );
            });
    }, [id]);

    const updateProduct = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/products/${id}`, {
                title,
                price,
                description,
            })
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => {
                console.log(
                    "Something went wrong when updating product info",
                    err
                );
            });
    };

    return (
        <Container className="col-6">
            <h1>Update this Product</h1>
            <Form onSubmit={updateProduct}>
                <Form.Group as={Row} className="my-3" controlId="title">
                    <Form.Label column sm={2}>
                        Title:
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
                        Price:
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
                        Description:
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
                <Button className="my-2" variant="info" type="submit">
                    Update Product
                </Button>
            </Form>
        </Container>
    );
};

export default Update;
