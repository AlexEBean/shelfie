import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Header extends Component {
    render() {
        const {edit, toggleEdit} = this.props
        return (
            <header>
                <div className = "header-box">
                    <h3>SHELFIE</h3>
                    <button 
                        onClick = { () => {
                            if (edit) {
                                toggleEdit()
                            }
                        }}
                    > 
                        <Link to="/">
                            Dashboard
                        </Link>
                    </button>
                    <button
                        onClick = { () => {
                            if (edit) {
                                toggleEdit()
                            }
                        }}
                    > 
                        <Link to="/add">
                            Add to Inventory
                        </Link>
                    </button>
                </div>
            </header>
        )
    }
}

export default Header
