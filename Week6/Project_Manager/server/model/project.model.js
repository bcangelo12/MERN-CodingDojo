const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Project Title is required!"],
            minlength: [3, "Project Title must be at least 3 characters!"],
            maxlength: [30, "Project Title cannot be more than 30 characters!"],
        },
        price: {
            type: Number,
            required: [true, "Project Price is required!"],
        },
        description: {
            type: String,
            required: [true, "Project Description is required!"],
            minlength: [
                4,
                "Project Description must be at least 4 characters!",
            ],
        },
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
