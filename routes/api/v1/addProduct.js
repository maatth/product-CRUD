const Router = require("express").Router
const ProductService = require("../../../services/product")
const ProductModel = require("../../../models/product")

module.exports = Router({ mergeParams: true }).post(
    "/v1/products",
    async (req, res, next) => {
        try {
            const product = new ProductModel(null, req.body.name)
            const productService = new ProductService()
            const addedProduct = await productService.add(product)
            res.status(201)
            res.json(addedProduct)
        } catch (error) {
            next(error);
        }
    }
);