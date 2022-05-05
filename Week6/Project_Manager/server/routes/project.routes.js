const ProjectController = require("../controller/project.controller");

module.exports = (app) => {
    app.get("/api/projects", ProjectController.getAllProjects);
    app.post("/api/projects", ProjectController.createProject);
    app.get("/api/projects/:_id", ProjectController.getOneProject);
    app.put("/api/projects/:_id", ProjectController.updateProject);
    app.delete("/api/projects/:_id", ProjectController.deleteProject);
};
