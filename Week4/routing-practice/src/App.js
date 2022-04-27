import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, useParams } from "react-router-dom";
import Home from "./components/Home";
import Param from "./components/Param";
import NotFound from "./components/NotFound";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/:word" element={<Param />} />
                <Route path="/:word/:color/:bg" element={<Param />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
