const poolPromise = require("../createDbConnectionPool")

class Product {

    async findAll() {
        try {
            const db = await poolPromise()
            return db.query("SELECT * FROM product")
        } catch (error) {
            error.status = 503
            throw error
        }
    }


}

module.exports = Product