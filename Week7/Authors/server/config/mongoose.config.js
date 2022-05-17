const mongoose = require("mongoose");
const authorsDB = "authorsDB";

mongoose
    .connect(`mongodb://localhost/${authorsDB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(`Connected to MongoDB ${authorsDB}`);
    })
    .catch((err) => {
        console.log("DB connection failed", err);
    });
