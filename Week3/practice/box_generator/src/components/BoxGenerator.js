import React, { useState } from "react";

const BoxGen = (props) => {
    const { boxProps, setBoxProps } = props;
    const [color, setColor] = useState("");

    const createBox = (e) => {
        e.preventDefault();
        setBoxProps([...boxProps, color]);
    };

    return (
        <form onSubmit={createBox} style={{ margin: "10px" }}>
            <div>
                <label>Color: </label>
                <input
                    type="text"
                    name="color"
                    onChange={(e) => setColor(e.target.value)}
                />
            </div>
            <input type="submit" value="Add Color" />
        </form>
    );
};

export default BoxGen;
