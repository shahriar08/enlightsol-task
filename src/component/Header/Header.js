import React, { Component } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { DataContext } from '../ProductContext/Context';
import Menu from './bars-solid.svg'
import Close from './times-solid.svg'
import CartIcon from './cart.svg'
import logo from './shop-logo.png'
export class Header extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
        const {toggle} = this.state;
        const {cart} = this.context;
    return(

        <header>
        <div className="menu" onClick={this.menuToggle}>
            <img src={Menu} alt="" width="20"/>
        </div>
        <div className="logo">
            <h1><Link to="/"><img src={logo} alt="" width="120"/></Link></h1>
        </div>
        <nav>
            <ul className={toggle ? "toggle" : ""}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li className="close" onClick={this.menuToggle}>
                    <img src={Close} alt="" width="20"/>
                </li>
            </ul>
            <div className="nav-cart">
                <span>{cart.length}</span>
                <Link to="/cart">
                    <img src={CartIcon} alt="" width="20"/>
                </Link>
            </div>
        </nav>
    </header >
    )
}
}
export default Header;