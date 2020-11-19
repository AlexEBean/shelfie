import React, { Component } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"


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

    componentDidMount() {
        if (this.props.edit) {
            this.setState(this.props.inventory)
        }
    }

    componentDidUpdate(prevProps){
        const {inventory} = this.props

        if (inventory !== prevProps.inventory) {
            this.setState(inventory)
        } 
    }

    addProduct = () => {
        axios
          .post("/api/inventory", {...this.state})
          .then(() => { 
            this.props.getInventory()
            this.resetValues()
        })
        .catch((err) => console.log(err))
    }       

    updateProduct = () => {
        axios
          .put(`/api/inventory/${this.props.match.params.id}`, {...this.state})
          .then(() => { 
            this.props.getInventory()
            this.resetValues()
        })
        .catch((err) => console.log(err))
    }       

    render() {
        const {image_url, name, price} = this.state
        const {edit} = this.props

        return (
            <div className = "form">
                <h4>Image URL:</h4>
                <input
                    onChange = {(e) => this.handleImageURL(e)}
                    value = {image_url}
                    name = "image_url"
                />
                <h4>Product Name:</h4>
                <input
                    onChange = {(e) => this.handleProductName(e)}
                    value = {name}
                    name = "name"
                />
                <h4>Price:</h4>
                <input
                    onChange = {(e) => this.handlePrice(e)}
                    value = {price}
                    name = "price"
                />
                <button
                    onClick = { () => {
                        this.resetValues()
                        if (edit) {
                            this.props.toggleEdit()
                        }
                    }}
                >
                    <Link to = "/"
                        className = "link"
                    >
                        Cancel
                    </Link>
                </button>
                
                {edit
                ?
                    <button
                        onClick = { () => {
                            this.updateProduct(image_url, name, price)
                            this.props.toggleEdit()
                        }}
                    >
                        <Link to = "/"
                            className = "link"
                        >
                            Save Changes
                        </Link>
                    </button>
                :
                    <button
                        onClick = { () => {
                            this.addProduct(image_url, name, price)
                        }}
                    >
                        <Link to="/"
                            className = "link"
                        >
                            Add to Inventory
                        </Link>
                    </button>
                }
                
            </div>
        )
    }
}

export default Form
