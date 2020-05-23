const Router = require("express").Router
const ProductService = require("../../../../services/product")

module.exports = Router({ mergeParams: true }).delete(
    "/v1/products/:id",
    async (req, res, next) => {
        try {
            const productService = new ProductService()
            await productService.deleteById(req.params.id)
            res.status(205)
            res.json({ message: "Deleted successfully" });
        } catch (error) {
            next(error);
        }
    }
);