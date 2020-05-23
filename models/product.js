class Product {
    constructor(id, name) {
        if (typeof name !== 'string') {
            const error = new Error("Le nom doit être une chaine de caractère")
            error.status = 400
            throw error
        }
        if (name === '') {
            const error = new Error("Le nom doit être non vide")
            error.status = 400
            throw error
        }
        this.id = id
        this.name = name.trim()
    }
}

module.exports = Product