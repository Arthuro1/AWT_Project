import React, {Component} from 'react';


export default class PersonsCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="imgBx">
                    <img src={this.props.photo} alt="images"/>
                </div>
                <div className="details">
                    <h2>
                        {this.props.name}
                        <br/>
                        <span>{this.props.role}</span>
                    </h2>
                </div>
            </div>
        );
    }
}
