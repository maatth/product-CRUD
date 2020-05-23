import React from 'react';
import {useState, useEffect} from "react"
import Field from '../components/forms/Field'
import ProductAPI from '../services/ProductAPI'

const ProductPage = (props) => {

    const {id = "new"} =  props.match.params //"new" if "id" is empty

    const [isEditing, setIsEditing] = useState(false)

    const [product, setProduct] = useState({
        id: "",
        name: ""
    })

    const [errors, setErrors] = useState({
        id: "",
        name: ""
    })

    const fetchProduct = async id => {
        try {
            const data = await ProductAPI
                .getbyId(id)
                .then(response => response.data)
            setProduct(data)

        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        if(id === "new") {
            setIsEditing(false)
        } else {
            setIsEditing(true)
            fetchProduct(id)
        }
    }, [id])

    const handleChange = ({currentTarget}) => {
        const { name, value } = currentTarget;
        setProduct({ ...product, [name]: value })
    };

    const handleSubmit = async event => {
        event.preventDefault()
        try {
            isEditing ? await ProductAPI.put(product) : await ProductAPI.add(product)
            setErrors({})
        } catch (error) {
            const message = error.response.data.errors.message
            setErrors({...errors, name: message})
        }
       
    }

    return (<>
         {isEditing ? <h1>Edition d'un produit</h1> : <h1>Création d'un produit</h1>}
        <form onSubmit={ handleSubmit }>
            <Field 
                name= "name" 
                label= "Name" 
                value= {product.name} 
                onChange={e => handleChange(e)}
                error = {errors.name} 
            />
            <div>
                <button className="btn btn-primary" type="submit">Save</button>
            </div>
        </form> </>);
}
 
export default ProductPage;