import React, { useEffect } from 'react';
import ProductAPI from "../services/ProductAPI"

const ProductsPage = () => {

    const fetchProducts = async () => {
        try {
            ProductAPI.findAll()
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
            <tr key={1}>
                  <td>1</td>
                  <td>"testname"</td>
                  <td>
                    <button className="btn btn-sm btn-danger">
                      Supprimer
                    </button>
                  </td>
                </tr>
            </tbody>
          </table>
        </>
      );
}
 
export default ProductsPage;