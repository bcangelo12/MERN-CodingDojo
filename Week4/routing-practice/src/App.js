import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, useParams } from "react-router-dom";
import Home from "./components/Home";
import Param from "./components/Param";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/:word" element={<Param />} />
                <Route path="/:word/:color/:bg" element={<Param />} />
            </Routes>
        </div>
    );
}

export default App;
