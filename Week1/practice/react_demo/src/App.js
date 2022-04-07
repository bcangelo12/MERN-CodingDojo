import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hello from "./components/Hello";

function App() {
    return (
        <div className="App">
            <Header />
            <Hello name="Brendan" />
            <Hello name="Lauren" />
            <Hello name="Hannah" />
        </div>
    );
}

export default App;
