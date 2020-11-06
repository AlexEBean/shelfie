import React, { Component } from 'react'


class Form extends Component {
    constructor(){
        super()
        this.state = {
            imgURL: "",
            name: "",
            price: 0
        }
    }
   
    handleImageURL(e) {
        this.setState({
          imageURL: e.target.value
        })
      }
    
    handleProductName(e) {
        this.setState({
          productName: e.target.value
        })
      }
    
    handlePrice(e) {
        this.setState({
          price: e.target.value
        })
      }

    resetValues () {
        this.setState({
            imgURL: "",
            name: "",
            price: 0
        })
    }

    render() {
        console.log(this.state.name)
        return (
            <div>
                Form
                <input
                    onChange = {(e) => this.handleImageURL(e)}
                    placeholder = "Image URL"
                />
                <input
                    onChange = {(e) => this.handleProductName(e)}
                    placeholder = "Product Name"
                />
                <input
                    onChange = {(e) => this.handlePrice(e)}
                    placeholder = "Price"
                />
                <button
                    onClick = { () => {
                        this.resetValues()
                    }}
                >
                    Cancel    
                </button>
                <button>
                    Add
                </button>
            </div>
        )
    }
}

export default Form
