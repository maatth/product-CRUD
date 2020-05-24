import axios from 'axios'

function findAll () {
    return axios.get("/api/v1/products")
}

function deleteProduct (id) {
    return axios.delete("/api/v1/products/" + id)
}

function add (product) {
    return axios.post("/api/v1/products/" + product.id, product);
}

function getbyId (id) {
    return axios.get("/api/v1/products/" + id);
}

function put (product) {
    return axios.put("/api/v1/products/" + product.id, product);
}

export default {
    findAll,
    delete: deleteProduct,
    add,
    getbyId,
    put
}