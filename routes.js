const express = require("express");
const routes = express.Router();

const productController = require("./controllers/productController");

routes.get("/product", productController.index);
routes.get("/product/:id", productController.show);
routes.post("/product", productController.create);
routes.put("/product/:id", productController.update);
routes.delete("/product/:id", productController.destroy);

module.exports = routes;
