import React, { useState, useEffect } from 'react';
import ProductAPI from "../services/ProductAPI"

const ProductsPage = () => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await ProductAPI.findAll()
            setProducts(response.data)
        } catch (error) {
            console.log(error.data)
        }
    }

    useEffect(() => fetchProducts(), [])

    return (
        <>
          <h1>Liste de produits</h1>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th />
              </tr>
            </thead>
            <tbody>
                { products.map((product) => (
                    <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>
                        <button className="btn btn-sm btn-danger">
                        Supprimer
                        </button>
                    </td>
                    </tr>
                )) }
            </tbody>
          </table>
        </>
      );
}
 
export default ProductsPage;