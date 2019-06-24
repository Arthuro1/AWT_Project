import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

export default class Card extends Component {
    render() {
        return (
            <div className="card mb-2 sched d-block d-lg-flex text mx-2">
                <img className="card-img-top"
                     src={this.props.infos.image}
                     alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title"><a href="#">{this.props.infos.title}</a></h4>
                    <p className="card-text">{this.props.infos.text}</p>
                    <p className="sched-time">
                        <span><span className="fa fa-calendar"/> April 22, 2018</span> <br/>
                    </p>


                    <div className="card-footer d-inline-flex p-2">
                        <p className="card-text mr-3 pt-2">
                            <small className="text-muted"> Last updated 3 mins ago</small>
                        </p>
                        <StarRatings
                                rating={4.4}
                                starDimension="40px"
                                starSpacing="1px"
                                starRatedColor ="yellow"
                                starHoverColor="yellow"
                            />
                    </div>
                </div>
            </div>
        )
    }
}
