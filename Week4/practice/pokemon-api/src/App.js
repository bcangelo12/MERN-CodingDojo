import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";

function App() {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((reponse) => reponse.json())
            .then((reponse) => setPokemon(reponse.results))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="App">
            <ul>
                {pokemon.map((pokemon, index) => {
                    return <li key={index}>{pokemon.name}</li>;
                })}
            </ul>
        </div>
    );
}

export default App;
