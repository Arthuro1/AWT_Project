import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form'
import {connect} from "react-redux";
import {compose} from "redux";

import * as actions from '../actions'
import CustomInput from './customInput.component'
import Header from "./header.component";
import Footer from "./footer.component";
import brand from "../images/hash.png";


class Login extends Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(formData){
        console.log('on submit');
        console.log(formData);
        await this.props.logIn(formData);
        if(!this.props.errorMessage){
            this.props.history.push('/dashboard');
        }
    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <div>
                <Header/>
                <div className="section myBg container-fluid">
                    <div className="Modal container">
                        <div className="logo">
                            <img height="90" src={brand} alt="logo"/>
                            <span>Bookiz</span>
                        </div>
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                            <fieldset>
                                <Field
                                    name="email"
                                    type="text"
                                    id="email"
                                    label="Email"
                                    placeholder="example@example.com"
                                    component={CustomInput}
                                />
                            </fieldset>
                            <fieldset>
                                <Field
                                    name="password"
                                    type="password"
                                    id="password"
                                    label="Password"
                                    placeholder="password"
                                    component={CustomInput}
                                />
                            </fieldset>
                            <button type="submit" className="btn btn-primary">Log In</button>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default compose(
    connect(null, actions),
    reduxForm({form: 'logIn'})
)(Login)
