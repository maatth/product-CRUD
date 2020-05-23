const ProductRepository = require('../repositories/product')
const ProductModel = require('../models/product')

class Product {

    constructor() {
        this.productRepository = new ProductRepository()
    }

    async getById(id) {
        const [result] = await this.productRepository.findById(id)

        if (!result) {
            new Error("Aucun produit trouvé pour cet id")
            error.status = 400
            throw error
        }

        return new ProductModel(result.id, result.name)
    }

    async getAll() {
        const results = await this.productRepository.findAll()
        const products = []; 
        results.forEach(result => {
            const productModel = new ProductModel(result.id, result.name)
            products.push(productModel)
        });
        return products
    }

    async deleteById(id) {
        const [result] = await this.productRepository.findById(id);
        if (!result) {
            const error = new Error("Aucun produit trouvé pour cet id");
            error.status = 400;
            throw error;
        }
        await this.productRepository.removeById(id)
        return id
    }

}

module.exports = Product