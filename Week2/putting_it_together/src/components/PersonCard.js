import React, { useState } from "react";

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props;
    const [stateAge, setStateAge] = useState(age);
    return (
        <div>
            <h1>
                {lastName}, {firstName}
            </h1>
            <p>Age: {stateAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={() => setStateAge(stateAge + 1)}>
                Birthday Button for {firstName} {lastName}
            </button>
        </div>
    );
};

export default PersonCard;
