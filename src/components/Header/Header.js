import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Header extends Component {
    render() {
        return (
            <header>
                <div className = "header-box">
                    <h3>SHELFIE</h3>
                    <button> 
                        <Link to="/">
                            Dashboard
                        </Link>
                    </button>
                    <button> 
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
