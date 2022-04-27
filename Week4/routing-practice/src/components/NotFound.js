import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <p>404 Not Found</p>
            <Link to="/home">Return Home</Link>
        </div>
    );
}

export default NotFound;
