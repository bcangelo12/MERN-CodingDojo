const express = require("express");
const app = express();
const PORT = 8000;

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
    res.send("This is a test");
});

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
