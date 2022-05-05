const Project = require("../model/project.model");

module.exports.getAllProjects = (req, res) => {
    Project.find()
        .then((allProjects) => res.json(allProjects))
        .catch((err) =>
            res.status(400).json({
                message: "Something went wrong pulling all Projects",
                error: err,
            })
        );
};

module.exports.getOneProject = (req, res) => {
    Project.findOne({ _id: req.params._id })
        .then((oneProject) => res.json(oneProject))
        .catch((err) =>
            res.status(400).json({
                message: "Something went wrong pulling selected Project",
                error: err,
            })
        );
};

module.exports.createProject = (req, res) => {
    Project.create(req.body)
        .then((newProject) => res.status(201).json(newProject))
        .catch((err) => {
            res.status(400).json({
                message: "Something went wrong trying to create Project",
                error: err,
            });
        });
};

module.exports.updateProject = (req, res) => {
    Project.updateOne({ _id: req.params._id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedProject) => res.json(updatedProject))
        .catch((err) => {
            res.status(400).json({
                message:
                    "Something went wrong trying to update selected Project",
                error: err,
            });
        });
};

module.exports.deleteProject = (req, res) => {
    Project.deleteOne({ _id: req.params._id })
        .then((project) => res.json(project))
        .catch((err) => {
            res.status(400).json({
                message:
                    "Something went wrong trying to delete selected Project",
                error: err,
            });
        });
};
