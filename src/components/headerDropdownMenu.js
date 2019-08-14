import React, { Component } from 'react';

import avatar from '../images/avatar.jpg';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../actions";

class HeaderDropdownMenu extends Component {
    constructor(props){
        super(props);
        this.logOut = this.logOut.bind(this);
    }

    logOut () {
        console.log("log out called");
        this.props.logOut();
    }


    render() {

        let menuComponent;

        console.log('isauth', this.props.isAuthentificated);
        console.log('user', this.props.user);
        if(this.props.isAuthentificated && this.props.user){
            menuComponent =
                <div>
                    <div className="navbar-login">
                        <div className="row">
                            <div className="col-lg-4">
                                <p className="text-center">
                                    <img className="icon-size" src={avatar} alt="images"/>
                                </p>
                            </div>
                            <div className="col-lg-8">
                                <p className="text-left"><strong>{this.props.user?this.props.user.name: ""}</strong></p>
                                <p className="text-left small">{this.props.user?this.props.user.email: ""}</p>
                                <p className="text-left">
                                    <Link to="/" onClick={this.logOut} className="btn btn-outline-danger btn-block btn-sm"><i className="fa fa-sign-out"/>{"  "}Log out</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <hr/>

                    <div className="navbar-login navbar-login-session">
                        <div className="row">
                            <div className="col-lg-12">
                                <p>
                                    <a href="/dashboard" className="dropdown-item"><i className="fa fa-address-card "/>{"  "}My Profile</a>
                                    <a href="/change_password" className="dropdown-item"><i className="fa fa-undo"/>{"  "}Change Password</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        }else{
            menuComponent = <a className="dropdown-item" href="/login">
                <i className="fa fa-sign-in"/>
                {"  "}LogIn
            </a>
        }
        return (
            <div className="dropdown-menu" aria-labelledby="dropdown04">
                {menuComponent}
            </div>

        )
    }
}


function mapStateToProps(state){
    return {
        isAuthentificated: state.auth.isAuthentificated,
        user: state.auth.user,
    };
}

export default connect(mapStateToProps, actions)(HeaderDropdownMenu)
