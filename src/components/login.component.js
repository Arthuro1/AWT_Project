import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form'
import {connect} from "react-redux";
import {compose} from "redux";

import * as actions from '../actions'
import CustomInput from './customInput.component'
import Header from "./header.component";
import Footer from "./footer.component";


class Login extends Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(formData){
        console.log('on submit');
        console.log(formData);
        await this.props.login(formData)
    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <div>
                <Header/>
                <div className="section bg-light container-fluid">
                    <div className="Modal">
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                            <fieldset>
                                <Field
                                    name="email"
                                    type="text"
                                    id="email"
                                    label="Enter your email"
                                    placeholder="example@example.com"
                                    component={CustomInput}
                                />
                            </fieldset>
                            <fieldset>
                                <Field
                                    name="password"
                                    type="password"
                                    id="password"
                                    label="Enter your password"
                                    placeholder="password"
                                    component={CustomInput}
                                />
                            </fieldset>
                            <button type="submit" className="btn btn-primary">Log In</button>
                        </form>
                        <div className='social-signin'>
                            <button className="fb" onClick={ this.props.onClick }><i className="fa fa-facebook" aria-hidden="true"></i></button>
                            <button className="tw" onClick={ this.props.onClick }><i className="fa fa-google" aria-hidden="true"></i></button>
                        </div>
                        <a href='#'>Lost your password ?</a>
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
