import React, { Component } from 'react';
import {Link} from "react-router-dom";

import brand from "../images/hash.png";

import HeaderDropdownMenu from "./headerDropdownMenu";

export default class Header extends Component {
    constructor(props){
        super(props);
        this.logOut = this.logOut.bind(this);
    }

    logOut () {
        console.log("log out called");
        this.props.logOut();
    }

    render() {
        return (
            <header role="banner">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow py-0">
                    <div className="container">
                        <Link to={'/'} > <div className="navbar-brand d-flex">
                            <img height="35" src={brand} alt="logo"/>
                            <h4 className="ml-2">BookiZ</h4>
                        </div></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navCollapse" aria-controls="navCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navCollapse">
                            <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link"> <i className="fa fa-home"></i> Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/about_us'} className="nav-link"> <i className="fa fa-address-card"/> About Us</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item cta-btn dropdown">
                                    <Link to={''} className="nav-link dropdown-toggle btn btn-primary" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-user"/> My Account</Link>
                                    <HeaderDropdownMenu />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

