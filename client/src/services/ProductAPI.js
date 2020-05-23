import axios from 'axios'

function findAll () {
    return axios.get("http://localhost:9000/api/v1/products")
}

function deleteProduct (id) {
    return axios.delete("http://localhost:9000/api/v1/products/" + id)
}

function add (product) {
    return axios.post("http://localhost:9000/api/v1/products/" + product.id, product);
}

export default {
    findAll,
    delete: deleteProduct,
    add
}