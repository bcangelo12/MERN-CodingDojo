import React from "react";
import { useParams } from "react-router-dom";

function Param() {
    const { word, color, bg } = useParams();
    return (
        <div>
            {isNaN(word) ? (
                <p style={color ? { color: color, backgroundColor: bg } : null}>
                    The word is: {word}
                </p>
            ) : (
                <p>The number is: {word}</p>
            )}
        </div>
    );
}

export default Param;
