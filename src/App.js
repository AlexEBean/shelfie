import React, {Component} from 'react'
import Header from "./components/Header/Header"
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'

import "./App.css"

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [{
        name: "Bacon",
        imageURL: "",
        price: 5
      },
      {
        name: "SayWhat",
        imageURL: "",
        price: 8
      }]
    }
  }

  render() {
    const {inventory} = this.state
    return (
      <div>
        <Header/>
        <Dashboard
          inventory = {inventory}
          key = {inventory.id} 
            />

        <Form/>
      </div>
    )
  }
}

export default App
