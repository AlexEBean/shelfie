import React, { Component } from 'react'
import Product from "../Product/Product"

class Dashboard extends Component {
    

    render() {
        const {inventory} = this.props
        const mappedInventory = inventory.map((el, i) => {
            return <Product
                        inventory = {el}
                        key = {i}            
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
