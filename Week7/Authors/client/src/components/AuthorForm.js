import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const AuthorForm = (props) => {
    const [errors, setErrors] = useState({});
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/authors", {
                name,
            })
            .then((res) => {
                console.log(res.data);
                setName("");
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.error.errors);
            });
    };
    return (
        <Container className="col-6">
            <h1>Favorite Authors</h1>
            <Link to={"/"}>Home</Link>
            <h3>Add a new Author:</h3>
            <Form onSubmit={handleSubmit}>
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

export default AuthorForm;
