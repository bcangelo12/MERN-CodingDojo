import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = (props) => {
    const { products, setProducts } = props;

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
                </div>
            ))}
        </div>
    );
};

export default ProductList;
