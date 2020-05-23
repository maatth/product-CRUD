import axios from 'axios'

function findAll () {
    return axios.get("http://localhost:9000/api/v1/products")
}

export default {
    findAll
}