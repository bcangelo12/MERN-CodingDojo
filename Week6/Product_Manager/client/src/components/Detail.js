import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log("Something went wrong grabbing one product", err);
            });
    }, [id]);

    const deleteHandler = () => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(
                    "Something went wrong deleting selected product",
                    err
                );
            });
    };

    return (
        <div>
            <h2>Title: {product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to="/">Back to Home</Link>
            <Button onClick={deleteHandler} className="mx-2" variant="danger">
                Delete
            </Button>
        </div>
    );
};

export default Detail;
