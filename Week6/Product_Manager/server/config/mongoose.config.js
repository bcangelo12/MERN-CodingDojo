const mongoose = require("mongoose");
const productDB = "productDB";

mongoose
    .connect(`mongodb://localhost/${productDB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(`Connected to MongoDB ${productDB}`);
    })
    .catch((err) => {
        console.log("DB connection failed", err);
    });
