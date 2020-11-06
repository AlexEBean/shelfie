import React, { Component } from 'react'
import Product from "../Product/Product"
import axios from "axios"

class Dashboard extends Component {
    
    deleteProduct = (id) => {
        axios
          .delete(`/api/inventory/${id}`)
          .then((res) => {
            this.props.getInventory();
          })
          .catch((err) => console.log(err));
      }

    render() {
        const {inventory} = this.props
        const mappedInventory = inventory.map((product) => {
            return <Product
                        product = {product}
                        key = {product.product_id}
                        deleteProduct = {this.deleteProduct}           
                    />
        })
        return (
            <div className = "dashboard">
                {mappedInventory}
            </div>
        )
    }
}

export default Dashboard
