import React, { Component } from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import GoogleLogin from "react-google-login"
import FacebookLogin from "react-facebook-login"

import CustomInput from "./customInput.component";
import Header from "./header.component";
import Footer from "./footer.component";
import * as actions from "../actions";
import SectionTitle from "./sectionTitle.component";

class Register extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    async onSubmit(formData){
        console.log('on submit');
        console.log(formData);
        await this.props.register(formData);
        if(!this.props.errorMessage){
            this.props.history.push('/dashboard');
        }
    }
    responseGoogle(res){
        console.log('responseGoogle', res);
    }

    responseFacebook(res){
        console.log('responseFacebook', res);
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <div>
                <Header/>
                <div className="section myBg container-fluid">
                    <SectionTitle title="Get Started" backText="Register"/>
                    <div className="container Modal">
                        <div className="logo">
                        <i className="fa fa-hashtag" aria-hidden="true"></i>
                        <span>  </span>
                        </div>
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                            <fieldset>
                                <Field
                                    name="name"
                                    type="text"
                                    id="name"
                                    label="Name"
                                    placeholder="e.g Paul"
                                    component={CustomInput}
                                />
                            </fieldset>
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

                            {this.props.errorMessage?
                            <div className="alert alert-danger">
                                {this.props.errorMessage}
                            </div>: null}

                            <button type="submit" className="btn btn-primary">Log In</button>
                        </form>
                        <div className='social-signin'>
                            <FacebookLogin
                                appId="637927660040610"
                                autoLoad={true}
                                textButton="Facebook"
                                fields="name,email,picture"
                                callback={this.responseFacebook}
                                cssClass="fb"
                            />

                            <GoogleLogin
                                clientId="934511799147-nkrh1n4getm2kpf5lntfthkkur1lvv7l.apps.googleusercontent.com"
                                buttonText="Google"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                calssName="gg"
                            />
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        errorMessage: state.auth.errorMessage
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form: 'register'})
)(Register)
