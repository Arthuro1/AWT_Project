import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';

import * as actions from '../actions';
import CustomInput from './customInput';
import Header from './header';
import Footer from './footer';
import brand from '../images/hash.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(formData) {
    console.log('on submit');
    console.log(formData);
    await this.props.logIn(formData);
    if (!this.props.errorMessage) {
      console.log('go to dashboard');
      this.props.history.push('/dashboard');
    }
  }
  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <Header />
        <div className="section myBg container-fluid">
          <div className="Modal container">
            <div className="logo">
              <img height="90" src={brand} alt="logo" />
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

              {this.props.errorMessage ? (
                <div className="alert alert-danger">
                  {this.props.errorMessage}
                </div>
              ) : null}

              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage,
  };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({form: 'logIn'})
)(Login);
