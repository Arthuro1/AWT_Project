import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

import Book from '../images/book.jpg'

export default class Card extends Component {
    render() {
        return (
            <div width="18rem" className="card mb-2 sched d-block d-lg-flex text mx-3">
                <img height="500px" width="500px" className="card-img-top"
                     src={this.props.infos.image? this.props.infos.image: Book}
                     alt=""/>
                <div className="card-body">
                    <h4 className="card-title"><a href="/dashboard/book">{this.props.infos.title}</a></h4>
                    <p className="text-right blockquote-footer"> <cite>By {this.props.infos.author}</cite></p>

                    <div className="card-footer d-inline-flex p-2">
                        <StarRatings
                                rating={this.props.infos.rating}
                                starDimension="40px"
                                starSpacing="1px"
                                starRatedColor ="yellow"
                                starHoverColor="yellow"
                            />({this.props.infos.numberOfVoters})
                    </div>
                </div>
            </div>
        )
    }
}
