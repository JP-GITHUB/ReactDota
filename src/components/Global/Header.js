import React, { Component } from 'react';
import { Link } from "react-router-dom";

import DotaLogo from '../../assets/images/logo_dota.png'

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={DotaLogo} className="logo-app" />
                <nav className="menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;