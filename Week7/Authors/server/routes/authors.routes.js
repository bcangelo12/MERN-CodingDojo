const AuthorController = require("../controller/authors.controller");

module.exports = (app) => {
    app.get("/api/authors", AuthorController.getAllAuthors);
    app.post("/api/authors", AuthorController.createAuthor);
    app.get("/api/authors/:_id", AuthorController.findAuthorById);
    app.put("/api/authors/:_id", AuthorController.updateAuthor);
    app.delete("/api/authors/:_id", AuthorController.deleteAuthor);
};
