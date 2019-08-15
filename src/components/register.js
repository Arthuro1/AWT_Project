import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

import CustomInput from './customInput';
import Header from './header';
import Footer from './footer';
import * as actions from '../actions';

import brand from '../images/hash.png';

class Register extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  async onSubmit(formData) {
    console.log('on submit');
    console.log(formData);
    await this.props.register(formData);
    if (!this.props.errorMessage) {
      console.log(' no error');
      this.props.history.push('/dashboard');
    }
    console.log('error');
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <Header />
        <div className="section myBg container-fluid">
          <div className="container Modal">
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div className="logo">
                <img height="90" src={brand} alt="logo" />
                <span>Bookiz</span>
              </div>
              <fieldset>
                <Field
                  name="name"
                  type="text"
                  id="name"
                  label="Name"
                  placeholder="e.g Paul Meteng"
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

              {this.props.errorMessage ? (
                <div className="alert alert-danger">
                  {this.props.errorMessage}
                </div>
              ) : null}

              <button type="submit" className="cta-btn btn btn-primary">
                register
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
    isAuthentificated: state.auth.isAuthentificated,
  };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({form: 'register'})
)(Register);
