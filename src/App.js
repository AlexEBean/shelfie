import React, {Component} from 'react'
import Header from "./components/Header/Header"
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import axios from "axios"

import "./App.css"

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }
  }

  componentDidMount() {
    this.getInventory()
  }

  getInventory = () => {
    axios.get("/api/inventory")
      .then((res) => {
        this.setState({inventory: res.data });
      })
      .catch((err) => console.log(err))
  }

  render() {
    const {inventory} = this.state
    return (
      <body>
        <Header/>
        <div className = "main">
          <Dashboard
            inventory = {inventory}
            key = {inventory.id} 
            getInventory = {this.getInventory}
              />

          <Form
            getInventory = {this.getInventory}
          />
        </div>
      </body>
    )
  }
}

export default App
