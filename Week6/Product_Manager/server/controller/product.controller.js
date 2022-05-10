const Product = require("../model/product.model");

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then((allProducts) => res.json(allProducts))
        .catch((err) =>
            res.status(400).json({
                message: "Something went wrong pulling all Products",
                error: err,
            })
        );
};

module.exports.getOneProduct = (req, res) => {
    Product.findOne({ _id: req.params._id })
        .then((oneProduct) => res.json(oneProduct))
        .catch((err) =>
            res.status(400).json({
                message: "Something went wrong pulling selected Product",
                error: err,
            })
        );
};

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => res.status(201).json(newProduct))
        .catch((err) => {
            res.status(400).json({
                message: "Something went wrong trying to create Product",
                error: err,
            });
        });
};

module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate({ _id: req.params._id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedProduct) => res.json(updatedProduct))
        .catch((err) => {
            res.status(400).json({
                message:
                    "Something went wrong trying to update selected Product",
                error: err,
            });
        });
};

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params._id })
        .then((Product) => res.json(Product))
        .catch((err) => {
            res.status(400).json({
                message:
                    "Something went wrong trying to delete selected Product",
                error: err,
            });
        });
};
