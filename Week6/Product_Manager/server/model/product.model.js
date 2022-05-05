const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Product Title is required!"],
            minlength: [3, "Product Title must be at least 3 characters!"],
            maxlength: [30, "Product Title cannot be more than 30 characters!"],
        },
        price: {
            type: Number,
            required: [true, "Product Price is required!"],
        },
        description: {
            type: String,
            required: [true, "Product Description is required!"],
            minlength: [
                4,
                "Product Description must be at least 4 characters!",
            ],
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
