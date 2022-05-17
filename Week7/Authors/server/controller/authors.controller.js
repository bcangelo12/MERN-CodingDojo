const Author = require("../model/authors.model");

module.exports = {
    getAllAuthors: (req, res) => {
        Author.find({})
            .then((authors) => {
                res.json(authors);
            })
            .catch((err) => {
                res.status(400).json({
                    message:
                        "Something went wrong pulling all Author information.",
                    error: err,
                });
            });
    },
    findAuthorById: (req, res) => {
        Author.findById({ _id: req.params._id })
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                res.status(400).json({
                    message:
                        "Something went wrong pulling selected Author's information.",
                    error: err,
                });
            });
    },
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then((newAuthor) => {
                res.status(201).json(newAuthor);
            })
            .catch((err) => {
                res.status(400).json({
                    message:
                        "Something went wrong trying to create new Author.",
                    error: err,
                });
            });
    },
    updateAuthor: (req, res) => {
        Author.findByIdAndUpdate({ _id: req.params._id }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedAuthor) => res.json(updatedAuthor))
            .catch((err) => {
                res.status(400).json({
                    message:
                        "Something went wrong trying to update selected Author.",
                    error: err,
                });
            });
    },
    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params._id })
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                res.status(400).json({
                    message:
                        "Something went wrong trying to delete selected Author.",
                    error: err,
                });
            });
    },
};
