import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ProductList = (props) => {
    const { removeFromDom, products, setProducts } = props;
    const deleteProduct = (productId) => {
        axios
            .delete("http://localhost:8000/api/products/" + productId)
            .then((res) => {
                removeFromDom(productId);
            })
            .catch((err) => {
                console.log(
                    "Something went wrong trying to delete product",
                    err
                );
            });
    };

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log("Something went wrong with list", err);
            });
    }, []);

    return (
        <div>
            <h1>All Products:</h1>
            {products.map((product) => (
                <div key={product._id}>
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                    <br />
                    <Link to={`/products/edit/${product._id}`}>Edit</Link>
                    <Button
                        className="mx-2"
                        variant="danger"
                        onClick={(e) => {
                            deleteProduct(product._id);
                        }}
                    >
                        Delete
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
