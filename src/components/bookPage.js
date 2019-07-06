import React, {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions";
import {reduxForm} from "redux-form";
import Header from "./header";
import Footer from "./footer";
import Book from "../images/book.jpg";

class BookPage extends Component {


    render() {
        return(
            <div>
                <Header/>
                <section className="section bg-light">
                    <div className="card container mb-3 myBg" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={Book} className="card-img" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        <li>Author: </li>
                                        <li>Description: </li>

                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {

    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm()
)(BookPage)
