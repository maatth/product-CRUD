const ProductRepository = require('../repositories/product')
const ProductModel = require('../models/product')

class Product {

    async getAll() {
        const productRepository = new ProductRepository()
        results = await productRepository.findAll()
        const products = []; 
        results.forEach(result => {
            const productModel = new ProductModel(result.id, result.name)
            products.push(productModel)
        });
        return products
    }

}

module.exports = Product