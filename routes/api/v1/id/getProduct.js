const Router = require("express").Router
const ProductService = require("../../../../services/product")

module.exports = Router({ mergeParams: true }).get(
    "/v1/products/:id",
    async (req, res, next) => {
        try {
            const productService = new ProductService()
            const product = await productService.getById(req.params.id)
            res.status(200)
            res.json(product)
        } catch (error) {
            next(error);
        }
    }
);