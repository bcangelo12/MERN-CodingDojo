const mongoose = require("mongoose");
const projectDB = "projectDB";

mongoose
    .connect(`mongodb://localhost/${projectDB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(`Connected to MongoDB ${projectDB}`);
    })
    .catch((err) => {
        console.log("DB connection failed", err);
    });
