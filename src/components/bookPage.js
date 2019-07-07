import React, {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";

import * as actions from "../actions";
import Header from "./header";
import Footer from "./footer";
import Book from "../images/book.jpg";
import SectionTitle from "./sectionTitle";
import "../chatBox.css";

class BookPage extends Component {


    render() {
        return(
            <div>
                <Header/>
                <section className="section bg-light">
                    <div className="container-fluid">
                        <div className="">
                                <SectionTitle title="Book" backText="Book"/>
                                <div className="card container-fluid mb-3 px-2 myBg" >
                                    <div className="row no-gutters">
                                        <div className="my-3 mx-3 col-md-3 ">
                                            <img src={Book} className="card-img" alt="..."/>
                                        </div>
                                        <div className="col-md-8 my-3 mx-3 table-responsive-sm">
                                            <table className="table table-striped">
                                                <tbody>
                                                <tr>
                                                    <th scope="row">Title</th>
                                                    <td>Mark</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Subtitle</th>
                                                    <td>Jacob</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Authors</th>
                                                    <td>Larry</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Publisher</th>
                                                    <td>Larry</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Published Date</th>
                                                    <td>Larry</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Rating</th>
                                                    <td>Larry</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Page Count</th>
                                                    <td>Larry</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="container mb-3">
                                            <b>Description</b>
                                        </div>
                                    </div>
                                </div>
                                <div className=" comment_block myBg">
                                    <div className="create_new_comment">
                                        <div className="user_avatar">
                                            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/73.jpg" alt="..."/>
                                        </div>
                                        <div className="input_comment">
                                            <input type="text" placeholder="Join the conversation.."/>
                                        </div>
                                    </div>


                                    <div className="new_comment">
                                        <ul className="user_comment">
                                            <div className="user_avatar">
                                                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/73.jpg" alt="..."/>
                                            </div>
                                            <div className="comment_body">
                                                <p>Gastropub cardigan jean shorts, kogi Godard PBR&B lo-fi locavore. Organic chillwave vinyl Neutra.
                                                    Bushwick Helvetica cred freegan, crucifix Godard craft beer deep v mixtape cornhole Truffaut master
                                                    cleanse pour-over Odd Future beard. Portland polaroid iPhone.
                                                </p>
                                            </div>

                                            <div className="comment_toolbar">
                                                <div className="comment_details">
                                                    <ul>
                                                        <li><i className="fa fa-clock-o fa-2x"/> 13:94</li>
                                                        <li><i className="fa fa-calendar fa-2x"/> 04/01/2015</li>
                                                        <li><i className="fa fa-pencil fa-2x"/> <span className="user">John Smith</span></li>
                                                    </ul>
                                                </div>
                                                <div className="comment_tools">
                                                    <ul>
                                                        <li><i className="fa fa-reply fa-2x"/></li>
                                                        <li><i className="fa fa-heart love fa-2x"/></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <li>
                                                <div className="user_avatar">
                                                    <img src="https://s3.amazonaws.com/uifaces/faces/twitter/manugamero/73.jpg" alt="..."/>
                                                </div>
                                                <div className="comment_body">
                                                    <p>
                                                        <div className="replied_to">
                                                            <p><span className="user">John Smith:</span>
                                                                Gastropub cardigan jean shorts, kogi Godard PBR&B lo-fi locavore.
                                                                Organic chillwave vinyl Neutra. Bushwick Helvetica cred freegan,
                                                                crucifix Godard craft beer deep v mixtape cornhole Truffaut master
                                                                cleanse pour-over Odd Future beard. Portland polaroid iPhone.
                                                            </p>
                                                        </div>
                                                        That's exactly what I was thinking!
                                                    </p>
                                                </div>

                                                <div className="comment_toolbar">
                                                    <div className="comment_details">
                                                        <ul>
                                                            <li><i className="fa fa-clock-o fa-2x"/> 14:52</li>
                                                            <li><i className="fa fa-calendar fa-2x"/> 04/01/2015</li>
                                                            <li><i className="fa fa-pencil fa-2x"/>
                                                                <span className="user">Andrew Johnson</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="comment_tools">
                                                        <ul>
                                                            <li><i className="fa fa-reply fa-2x"/></li>
                                                            <li><i className="fa fa-heart fa-2x love">
                                                                    <span className="love_amt"> 4</span>
                                                                </i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
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
