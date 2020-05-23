const poolPromise = require("../createDbConnectionPool")

class Product {

    async findById(id) {
        try {
            const db = await poolPromise
            return await db.query("SELECT * FROM product WHERE id = ?", [id])
        } catch (error) {
            error.status = 503
            throw error
        }
    }

    async findAll() {
        try {
            const db = await poolPromise
            return await db.query("SELECT * FROM product")
        } catch (error) {
            error.status = 503
            throw error
        }
    }

    async removeById(id) {
        try {
            const db = await poolPromise
            await db.query("DELETE FROM product WHERE id = ?", [id])
        } catch (error) {
            error.status = 503;
            throw error;
        }
    }


}

module.exports = Product