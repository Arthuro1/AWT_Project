import React, { Component } from 'react';
import Header from "./header.component";
import {Field, reduxForm} from "redux-form";
import CustomInput from "./customInput.component";
import Footer from "./footer.component";
import {compose} from "redux";
import {connect} from "react-redux";
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
        await this.props.register(formData)
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
                                    name="firstName"
                                    type="text"
                                    id="firstName"
                                    label="Firstname"
                                    placeholder="e.g Paul"
                                    component={CustomInput}
                                />
                            </fieldset>
                            <fieldset>
                                <Field
                                    name="lastName"
                                    type="text"
                                    id="lastName"
                                    label="Lastname"
                                    placeholder="e.g Meteng"
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
                            <button className="fb" onClick={ this.props.onClick }><i className="fa fa-facebook" aria-hidden="true"></i></button>
                            <button className="gg" onClick={ this.props.onClick }><i className="fa fa-google" aria-hidden="true"></i></button>
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
