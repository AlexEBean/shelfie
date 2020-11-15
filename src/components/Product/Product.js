import React, { Component } from 'react'

class Product extends Component {
    render() {
    const {product_id, image_url, name, price} = this.props.product
        return (
            <div className = "product">
                <img src = {image_url} alt = {name}/>
                <h1>Name: {name}</h1>
                <h1>Price: ${price}</h1>
                <button className = "X"
                    onClick = { () => {
                        this.props.deleteProduct(product_id)
                    }}
                >
                    Delete
                    </button>
                <button 
                    onClick = { () => {
                        this.props.toggleEdit()
                        this.props.inventory.product_id = product_id
                        console.log(this.props.edit)
                    }}
                >
                    Edit
                </button>
            </div>
        )
    }
}

export default Product
