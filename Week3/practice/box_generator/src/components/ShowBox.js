import React, { useState } from "react";

const ShowBox = (props) => {
    const { boxProps } = props;
    return (
        <div>
            {boxProps.map((color, index) => (
                <div
                    key={index}
                    style={{
                        display: "inline-block",
                        margin: "10px",
                        height: "100px",
                        width: "100px",
                        backgroundColor: color,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default ShowBox;
