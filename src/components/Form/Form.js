import React, { Component } from 'react'
import axios from "axios"


class Form extends Component {
    constructor(){
        super()
        this.state = {
            image_url: "",
            name: "",
            price: 0
        }
    }
   
    handleImageURL = (e) => {
        this.setState({
          image_url: e.target.value
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
            image_url: "",
            name: "",
            price: 0
        })
    }

    componentDidUpdate(prevProps){
        const {inventory} = this.props

        if (inventory !== prevProps.inventory) {
            this.setState(inventory)
        } 
    }

    addProduct = (image_url, name, price) => {
        axios
          .post("/api/inventory", { image_url, name, price })
          .then((res) => { 
            this.setState({
                name: res.data,
                price: res.data,
                image_url: res.data,
            })
            this.props.getInventory()
            this.resetValues()
        })
        .catch((err) => console.log(err))
    }       

    updateProduct = (image_url, name, price) => {
        axios
          .put(`/api/inventory/${this.props.inventory.product_id}`, { image_url, name, price })
          .then((res) => { 
            this.setState({
                name: res.data,
                price: res.data,
                image_url: res.data,
            })
            this.props.getInventory()
            this.resetValues()
        })
        .catch((err) => console.log(err))
    }       

    render() {
        const {image_url, name, price} = this.state

        return (
            <div className = "form">
                <input
                    onChange = {(e) => this.handleImageURL(e)}
                    placeholder = "Image URL"
                    value = {image_url}
                    name = "image_url"
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
                
                {this.props.edit
                ?
                    <button
                        onClick = { () => {
                            this.updateProduct(image_url, name, price)
                            this.props.toggleEdit()
                            console.log(this.props.inventory.product_id)
                        }}
                    >
                        Save Changes
                    </button>
                :
                    <button
                        onClick = { () => {
                            this.addProduct(image_url, name, price)
                        }}
                    >
                        Add to Inventory
                    </button>
                }
                
            </div>
        )
    }
}

export default Form
