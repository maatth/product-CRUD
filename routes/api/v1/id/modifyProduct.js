const Router = require("express").Router
const ProductService = require("../../../../services/product")
const Product = require("../../../../models/product");

module.exports = Router({ mergeParams: true }).put(
    "/v1/products/:id",
    async (req, res, next) => {
        try {
            const product = new Product(req.params.id, req.body.name);
            const productService = new ProductService();
            const modifiedProduct = await productService.modify(product);
            res.status(200);
            res.json(modifiedProduct);
        } catch (error) {
            next(error);
        }
    }
);