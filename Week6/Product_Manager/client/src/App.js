import "./App.css";
import React, { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm";

function App() {
    return (
        <div className="App">
            <ProductForm path="/" />
        </div>
    );
}

export default App;
