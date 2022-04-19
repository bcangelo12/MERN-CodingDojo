// rafce
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
        <div>
            <h2>{name}</h2>
            <p> price:{price}</p>
            <p>category: {category}</p>
            <img src={image} alt="" />
            {/* <button onClick={()=>handleClick()}>change price</button> */}
            <button onClick={handleClick}>change price</button>
            <button onClick={handleDelete}>Delete Product</button>
        </div>
    );
};

export default Product;
