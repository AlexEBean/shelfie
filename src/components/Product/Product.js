import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Product extends Component {
    render() {
    const {product_id, image_url, name, price} = this.props.product
        return (
            <div className = "product">
                <img src = {image_url} alt = {name}/>
                <h1>Name: {name}</h1>
                <h1>Price: ${price}</h1>
                <button className = "x"
                    onClick = { () => {
                        this.props.deleteProduct(product_id)
                    }}
                >
                    Delete
                    </button>
                <button 
                    onClick = { () => {
                        this.props.toggleEdit()
                    }}
                >
                    <Link to = {`/edit/${product_id}`}
                        className = "link"
                    >
                        Edit
                    </Link>
                </button>
            </div>
        )
    }
}

export default Product
