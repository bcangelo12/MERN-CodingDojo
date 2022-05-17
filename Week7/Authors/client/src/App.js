import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./view/Main";
import Form from "./components/AuthorForm";
import Update from "./components/Update";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Main />} path="/" default />
                    <Route element={<Form />} path="/new" />
                    <Route element={<Update />} path="/edit/:id" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
