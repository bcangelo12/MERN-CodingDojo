const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => res.json(allJokes))
        .catch((err) =>
            console.log("Something went wrong finding all jokes", err)
        );
};

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params._id })
        .then((oneJoke) => res.json(oneJoke))
        .catch((err) =>
            console.log("Something went wrong finding one joke", err)
        );
};

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then((newJoke) => res.json(newJoke))
        .catch((err) => console.log("Something went wrong creating joke", err));
};

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedJoke) => res.json(updatedJoke))
        .catch((err) => console.log("Something went wrong updating joke", err));
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then((result) => res.json(result))
        .catch((err) => console.log("Something went wrong deleting joke", err));
};

// module.exports = {
//     findAllJokes,
//     findOneJoke,
//     createJoke,
//     updateJoke,
//     deleteJoke,
// };
