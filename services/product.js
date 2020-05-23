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

    async add(product) {
        //Check if product don't exist yet
        const findByNameProducts = await this.productRepository.findByName(product.name);
        if( findByNameProducts.length !== 0) {
            const error = new Error("Le produit existe déjà");
            error.status = 400;
            throw error;
        }
        const productId = await this.productRepository.create(product.name);
        return await this.getById(productId);
    }

}

module.exports = Product