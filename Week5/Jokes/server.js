const express = require("express");
const app = express();
const PORT = 8000;

require("./config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const JokesRoutes = require("./routes/jokes.routes");
JokesRoutes(app);

app.listen(PORT, () => {
    console.log(`Server up on ${PORT}`);
});
