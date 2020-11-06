import React, {Component} from 'react'
import Header from "./components/Header/Header"
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'

import "./App.css"

class App extends Component {
  constructor(){
    this.state = {
      inventory: [{
        name: "Bacon",
        imageURL: "",
        price: 5
      }]
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <Dashboard
          inventory = this.state.inventory 
        />
        <Form/>
      </div>
    )
  }
}

export default App
