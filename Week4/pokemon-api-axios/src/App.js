import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((res) => {
                setPokemon(res.data.results);
                // console.log(res.data.results);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="App">
            <ul>
                {pokemon.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
