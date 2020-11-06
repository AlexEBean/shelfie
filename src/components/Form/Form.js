import React, { Component } from 'react'
import axios from "axios"

class Form extends Component {
    constructor(){
        super()
        this.state = {
            imageURL: "",
            name: "",
            price: 0
        }
    }
   
    handleImageURL = (e) => {
        this.setState({
          imageURL: e.target.value
        })
      }
    
    handleProductName = (e) => {
        this.setState({
          name: e.target.value
        })
      }
    
    handlePrice = (e) => {
        this.setState({
          price: e.target.value
        })
      }

    resetValues = () => {
        this.setState({
            imageURL: "",
            name: "",
            price: 0
        })
    }

    addProduct = (imageURL, name, price) => {
        axios
          .post("/api/inventory", { imageURL, name, price })
          .then((res) => { 
            this.setState({
                name: res.data,
                price: res.data,
                imageURL: res.data,
            })
            this.props.getInventory()
            this.resetValues()
        })
        .catch((err) => console.log(err))
    }       

    render() {
        const {imageURL, name, price} = this.state
        return (
            <div className = "form">
                <input
                    onChange = {(e) => this.handleImageURL(e)}
                    placeholder = "Image URL"
                    value = {imageURL}
                    name = "imageURL"
                />
                <input
                    onChange = {(e) => this.handleProductName(e)}
                    placeholder = "Product Name"
                    value = {name}
                    name = "name"
                />
                <input
                    onChange = {(e) => this.handlePrice(e)}
                    placeholder = "Price"
                    value = {price}
                    name = "price"
                />
                <button
                    onClick = { () => {
                        this.resetValues()
                    }}
                >
                    Cancel    
                </button>
                <button
                    onClick = { () => {
                        this.addProduct(imageURL, name, price)
                    }}
                >
                    Add to Inventory
                </button>
            </div>
        )
    }
}

export default Form
