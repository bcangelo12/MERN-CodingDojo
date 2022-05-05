const ProductController = require("../controller/product.controller");

module.exports = (app) => {
    app.get("/api/products", ProductController.getAllProducts);
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products/:_id", ProductController.getOneProduct);
    app.put("/api/products/:_id", ProductController.updateProduct);
    app.delete("/api/products/:_id", ProductController.deleteProduct);
};
