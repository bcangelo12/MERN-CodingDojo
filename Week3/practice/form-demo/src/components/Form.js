import React, { useState } from "react";
import Form from "react-bootstrap/form";
import Button from "react-bootstrap/button";
import Alert from "react-bootstrap/Alert";
import { v4 } from "uuid";
function ProductForm(props) {
    const { products, setProducts } = props;
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (e) => {
        // the default behavior of the form is to refresh the page
        e.preventDefault();
        if (name && price && category) {
            console.log("Form submitted", name, price, category, v4());

            const product = {
                id: v4(),
                name: name,
                price: price,
                category: category,
                image: "http://via.placeholder.com/200x200",
            };
            // CREATE
            setProducts([...products, product]);
            e.target.reset();
            setName("");
            setPrice("");
            setCategory("");
        } else {
            setError("you need to fill the form");
        }
    };
    return (
        <>
            {error && (
                <Alert variant="danger" className="error">
                    {error}
                </Alert>
            )}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Product Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Form.Text className="text-danger">
                        {name !== "" && name.length < 5 ? (
                            <p>Name must be at least 5 characters</p>
                        ) : null}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control
                        placeholder="Enter Price"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Product Category</Form.Label>
                    <Form.Select onChange={(e) => setCategory(e.target.value)}>
                        <option value="">----</option>
                        <option value="phone">Phone</option>
                        <option value="laptop">Laptop</option>
                        <option value="tablet">Tablet</option>
                        <option value="watch">Watch</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default ProductForm;
