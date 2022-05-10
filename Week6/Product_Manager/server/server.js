const express = require("express");
const cors = require("cors");
require("./config/mongoose.config");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

require("./routes/product.routes")(app);

// Old methodology, superseded by one line require line above
// const ProductRoutes = require("./routes/product.routes");
// ProductRoutes(app);

app.listen(PORT, () => {
    console.log(`Server up on ${PORT}`);
});
