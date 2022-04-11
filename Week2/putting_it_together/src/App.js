import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
    return (
        <div className="App">
            <PersonCard
                firstName="Brendan"
                lastName="Angelo"
                age={27}
                hairColor="Brown"
            />
            <PersonCard
                firstName="Hannah"
                lastName="Mullen"
                age={26}
                hairColor="Brown"
            />
        </div>
    );
}

export default App;
