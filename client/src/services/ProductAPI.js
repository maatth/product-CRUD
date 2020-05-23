import axios from 'axios'

function findAll () {
    return axios.get("http://localhost:9000/api/v1/products")
}

function deleteProduct (id) {
    return axios.delete("http://localhost:9000/api/v1/products/" + id)
}

export default {
    findAll,
    delete: deleteProduct
}