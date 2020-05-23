import React from 'react';
import {useState, useEffect} from "react"
import Field from '../components/forms/Field'
import ProductAPI from '../services/ProductAPI'

const ProductPage = (props) => {

    const [product, setProduct] = useState({
        id: "",
        name: ""
    })

    const handleChange = ({currentTarget}) => {
        const { name, value } = currentTarget;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault()
        try {
            await ProductAPI.add(product)
        } catch (error) {
            const message = error.response.data.errors.message;
            console.log(message)
        }
    }

    return (<>
        <h1>Création d'un produit</h1> 
        <form onSubmit={ handleSubmit }>
            <Field 
                name= "name" 
                label= "Name" 
                value= {product.name} 
                onChange={e => handleChange(e)}
                error = ""
            />
            <div>
                <button className="btn btn-primary" type="submit">Save</button>
            </div>
        </form> </>);
}
 
export default ProductPage;