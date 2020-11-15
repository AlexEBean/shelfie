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
      inventory: [],
      edit: false
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

  toggleEdit = () => {
    this.setState({
        edit: !this.state.edit
    })
  } 

  render() {
    const {inventory, edit} = this.state
    return (
      <div className = "shelfie">
        <Header/>
        <div className = "main">
          <Dashboard
            inventory = {inventory}
            key = {inventory.id} 
            getInventory = {this.getInventory}
            edit = {edit}
            toggleEdit = {this.toggleEdit}
              />

          <Form
            getInventory = {this.getInventory}
            inventory = {inventory}
            edit = {edit}
            toggleEdit = {this.toggleEdit}
          />
        </div>
      </div>
    )
  }
}

export default App
