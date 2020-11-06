import React, { Component } from 'react'

class Product extends Component {
    render() {
    const {product_id, imageURL, name, price} = this.props.product

        return (
            <div className = "product">
                <img src = {`${imageURL}`}/>
                <h1>Name: {name}</h1>
                <h1>Price: ${price}</h1>
                <button className = "X"
                    onClick = { () => {
                        this.props.deleteProduct(product_id)
                    }}
                >
                    Delete
                    </button>
            </div>
        )
    }
}

export default Product
