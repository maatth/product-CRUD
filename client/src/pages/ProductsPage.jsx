import React, { useState, useEffect } from 'react';
import ProductAPI from "../services/ProductAPI"
import { Link } from "react-router-dom"

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

    useEffect(() => {fetchProducts()}, [])

    const handleDelete = async id => {
        const productsClone = [...products];
        setProducts(products.filter((product) => product.id !== id));
        
        try {
            await ProductAPI.delete(id)
        } catch (error) {
            console.log(error.response);
            setProducts(productsClone); //get old data back if fail
        }
        console.log("Product deleted !");
    };

    return (
        <>
            <h1>Liste de produits</h1>
            <Link to="/products/new" className="btn btn-primary mb-3">
                Créer un produit
            </Link>
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
                        <td><Link to={ "/products/" + product.id }>
                            {product.name}
                        </Link> </td>
                        <td>
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(product.id)}
                            >
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