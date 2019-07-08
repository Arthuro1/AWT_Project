import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { withRouter } from 'react-router-dom';
import {compose} from "redux";
import {connect} from "react-redux";

import Book from '../images/book.jpg'
import * as actions from "../actions";


class Card extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.selectedBook(this.props.data);
        this.props.history.push('/book');
    }
    render() {
        return (
            <div width="18rem" className="card cardSize mb-2 sched d-block d-lg-flex text mx-3">
                <a href="#" onClick={this.handleClick}>
                    <img height="200px" className="card-img-top"
                         src={this.props.data.thumbnail?this.props.data.thumbnail:Book}
                         alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.data.title}</h4>
                        <p className="text-right blockquote-footer"> <cite>By {this.props.data.authors[0]?this.props.data.authors[0]: ""}</cite></p>

                        <div className="card-footer d-inline-flex p-2">
                            <StarRatings
                                    rating={this.props.data.rating.average}
                                    starDimension="40px"
                                    starSpacing="1px"
                                    starRatedColor ="yellow"
                                    starHoverColor="yellow"
                                />({this.props.data.numberOfvoter})
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

export default compose(
    withRouter,
    connect(null, actions)
)(Card)
