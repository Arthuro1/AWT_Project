import React, {Component} from 'react';
import {connect} from 'react-redux';

export default OriginalComponent => {
  class MixedComponent extends Component {
    checkAuthentification() {
      if (!this.props.isAuthentificated && !this.props.jwtToken) {
        console.log('not authentificated');
        this.props.history.push('/login');
      }
    }

    componentDidMount() {
      this.checkAuthentification();
    }

    componentDidUpdate() {
      this.checkAuthentification();
    }
    render() {
      return <OriginalComponent {...this.props} />;
    }
  }

  function mapStatetoProps(state) {
    return {
      isAuthentificated: state.auth.isAuthentificated,
      jwtToken: state.auth.token,
    };
  }

  return connect(mapStatetoProps)(MixedComponent);
};
