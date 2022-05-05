import "./App.css";
import React, { useState, useEffect } from "react";
import ProjectForm from "./components/ProjectForm";

function App() {
    const [project, setProject] = useState([]);
    return (
        <div className="App">
            <ProjectForm project={project} setProject={setProject} />
        </div>
    );
}

export default App;
