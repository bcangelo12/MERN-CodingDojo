import PersonCard from "./components/PersonCard";
import "./App.css";

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
            <PersonCard
                firstName="Zach"
                lastName="Calilung"
                age={26}
                hairColor="Black"
            />
            <PersonCard
                firstName="John"
                lastName="Waggoner"
                age={26}
                hairColor="Red"
            />
        </div>
    );
}

export default App;
