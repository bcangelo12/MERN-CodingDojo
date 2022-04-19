import React, { useState } from "react";
import { v4 } from "uuid";

function Form(props) {
    const { products, setProducts } = props;
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (e) => {
        // the default behavior of the form is to refresh the page
        e.preventDefault();
        if (name && price && category) {
            // if (name !== '' && price !== 0 && category !== '') {
            console.log("Form submitted", name, price, category);
            const product = {
                id: v4(),
                name: name,
                price: price,
                category: category,
                image: "http://via.placeholder.com/200x200",
            };
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
            {error && <p className="error">{error}</p>}
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                    border: "1px solid black",
                    padding: "10px",
                    margin: "10px auto",
                }}
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Product Name </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                        // console.log('EVENT', e);
                        // console.log('TARGET', e.target);
                        // console.log('VALUE', e.target.value);
                        setName(e.target.value);
                    }}
                />
                {/* {name && name.length < 5 && <p>Name must be at least 5 characters</p>} */}
                {name !== "" && name.length < 5 ? (
                    <p>Name must be at least 5 characters</p>
                ) : null}
                <label htmlFor="price">Product Price </label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label htmlFor="category">Product Category </label>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="">----</option>
                    <option value="phone">Phone</option>
                    <option value="laptop">Laptop</option>
                    <option value="tablet">Tablet</option>
                    <option value="watch">Watch</option>
                </select>
                <br />
                <input type="submit" />
            </form>
        </>
    );
}

export default Form;
