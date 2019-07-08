import React, {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {reduxForm, Field} from "redux-form";
import Pusher from 'pusher-js';

import * as actions from "../actions";
import Header from "./header";
import Footer from "./footer";
import Book from "../images/book.jpg";
import SectionTitle from "./sectionTitle";
import "../chatBox.css";
import StarRatings from "react-star-ratings";
import CustomInput from "./customInput";
import CommentList from "./CommentList";

const style = {
    commentBox: {
        width:'80vw',
        margin:'0 auto',
        fontFamily:'Helvetica, sans-serif'
    },
    title: {
        textAlign:'center',
        textTransform:'uppercase'
    },
    commentList: {
        border:'1px solid #f1f1f1',
        padding:'0 12px',
        maxHeight:'70vh',
        overflow:'scroll'
    },
    comment: {
        backgroundColor:'#fafafa',
        margin:'10px',
        padding:'3px 10px',
        fontSize:'.85rem'
    },
    commentForm: {
        margin:'10px',
        display:'flex',
        flexFlow:'row wrap',
        justifyContent:'space-between'
    },
    commentFormAuthor: {
        minWidth:'150px',
        margin:'3px',
        padding:'0 10px',
        borderRadius:'3px',
        height:'40px',
        flex:'2'
    },
    commentFormText: {
        flex:'4',
        minWidth:'400px',
        margin:'3px',
        padding:'0 10px',
        height:'40px',
        borderRadius:'3px'
    },
    commentFormPost: {
        minWidth:'75px',
        flex:'1',
        height:'40px',
        margin:'5px 3px',
        fontSize:'1rem',
        backgroundColor:'#1e90ff',
        borderRadius:'3px',
        color:'#fff',
        textTransform:'uppercase',
        letterSpacing:'.055rem',
        border:'none'
    },
    updateLink: {
        textDecoration:'none',
        paddingRight:'15px',
        fontSize:'.7rem',
    },
    deleteLink: {
        textDecoration:'none',
        paddingRight:'15px',
        fontSize:'.7rem',
        color:'red'
    }
};

class BookPage extends Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    async onSubmit(formdata) {
        console.log("user",this.props.user);
        await this.props.postComment({ bookID: this.props.myBook.id, authorID: this.props.user.email, message: formdata.comment});
    }

    async componentDidMount() {
        console.log("book id", this.props.myBook);
        await this.props.getComment({bookID: this.props.myBook.id});
    }

    render() {
        const {handleSubmit} = this.props;
        console.log("all comments", this.props.allComments);
        return(
            <div>
                <Header/>
                <section className="section bg-light">
                    <div className="container-fluid">
                        <div className="">
                                <SectionTitle title="Book" backText="Book"/>
                                <div className="card container-fluid mb-3 px-2 myBg" >
                                    <div className="row no-gutters">
                                        <div className="my-3 mx-3 col-md-3">
                                            <img src={this.props.myBook.thumbnail?this.props.myBook.thumbnail:Book} className="cardSize card-img " alt="..."/>
                                        </div>
                                        <div className="col-md-8 my-3 mx-3 table-responsive-sm">
                                            <table className="table table-striped">
                                                <tbody>
                                                <tr>
                                                    <th scope="row">Title</th>
                                                    <td>{this.props.myBook.title}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Subtitle</th>
                                                    <td>{this.props.myBook.subtitle}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Authors</th>
                                                    <td>{this.props.myBook.authors}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Publisher</th>
                                                    <td>{this.props.myBook.publisher}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Published Date</th>
                                                    <td>{this.props.myBook.publishedDate}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Actual Rating</th>
                                                    <td><StarRatings
                                                            rating={this.props.myBook.rating.average}
                                                            starDimension="40px"
                                                            starSpacing="1px"
                                                            starRatedColor ="yellow"
                                                            starHoverColor="yellow"
                                                        />({this.props.myBook.numberOfvoter})
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Page Count</th>
                                                    <td>{this.props.myBook.pageCount?this.props.myBook.pageCount:""}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="container mb-5">
                                            <b>Description: </b>
                                            {  this.props.myBook.description}
                                        </div>
                                    </div>
                                </div>


                                <div className=" comment_block myBg">
                                    <h1>Comments</h1>
                                    <div className="create_new_comment">
                                        <div className="user_avatar">
                                            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/73.jpg" alt="..."/>
                                        </div>
                                        <div className="input_comment">
                                            <form style={ style.commentForm } onSubmit={handleSubmit(this.onSubmit)}>

                                                <fieldset>
                                                    <Field
                                                        name="comment"
                                                        type="text"
                                                        id="comment"
                                                        label=""
                                                        style={ style.commentFormText }
                                                        placeholder="Join the conversation.."
                                                        component={CustomInput}
                                                    />
                                                </fieldset>
                                                <input type='submit'style={ style.commentFormPost }value='Post' />
                                            </form>
                                        </div>
                                    </div>
                                    <CommentList chats={this.props.allComments}/>
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
        allComments: state.comment.comments,
        myBook: state.book.oneBook,
        user: state.auth.user,
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form: 'comment'})
)(BookPage)
