import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                setName(res.data.name);
            })
            .catch((err) => {
                console.log(
                    "Something went wrong pulling author info for editing",
                    err
                );
            });
    }, [id]);

    const updateAuthor = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/authors/${id}`, {
                name,
            })
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(
                    "Something went wrong when updating author info.",
                    err
                );
                setErrors(err.response.data.error.errors);
            });
    };

    return (
        <Container className="col-6">
            <h1>Favorite Authors</h1>
            <Link to={"/"}>Home</Link>
            <h3>Edit this Author:</h3>
            <Form onSubmit={updateAuthor}>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && (
                        <p className="text-danger">{errors.name.message}</p>
                    )}
                </Form.Group>
                <Button
                    className="my-2 mx-2"
                    variant="info"
                    onClick={(e) => navigate("/")}
                >
                    Cancel
                </Button>
                <Button className="my-2 mx-2" variant="success" type="submit">
                    Add Author
                </Button>
            </Form>
        </Container>
    );
};

export default Update;
