const Router = require("express").Router
const ProductService = require("../../../services/product")

module.exports = Router({ mergeParams: true }).get(
    "/v1/products",
    async (req, res, next) => {
        try {
            const productService = new ProductService()
            const products = await productService.getAll()
            res.json(products)
        } catch (error) {
            next(error);
        }
    }
);