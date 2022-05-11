import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProductForm from "./components/ProductForm";
import Main from "./view/Main";
import Detail from "./components/Detail";
import Update from "./components/Update";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Main />} path="/" default />
                    <Route element={<Detail />} path="/products/:id" />
                    <Route element={<Update />} path="/products/edit/:id" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
