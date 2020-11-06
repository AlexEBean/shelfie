import React, { Component } from 'react'

class Product extends Component {
    render() {
    const {imageURL, name, price} = this.props.inventory

        return (
            <div className = "product">
                <img src = {`${imageURL}`}/>
                <h1>Name: {name}</h1>
                <h1>Price: ${price}</h1>
            </div>
        )
    }
}

export default Product
