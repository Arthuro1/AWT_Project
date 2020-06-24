import React, {Component} from 'react';

export default class SectionTitle extends Component {
  render() {
    return (
      <div className="clearfix mb-5 pb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-auto col-md-12 text-center heading-wrap">
              <h2>{this.props.title}</h2>
              <span className="back-text">{this.props.backText}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
