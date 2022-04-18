import "./App.css";
import React, { useState } from "react";
import BoxGen from "./components/BoxGenerator";
import ShowBox from "./components/ShowBox";

function App() {
    const [boxProps, setBoxProps] = useState([]);
    return (
        <>
            <div className="App">
                <BoxGen boxProps={boxProps} setBoxProps={setBoxProps} />
                <ShowBox boxProps={boxProps} />
            </div>
        </>
    );
}

export default App;
