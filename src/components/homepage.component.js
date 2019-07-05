import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.js";
import "jquery"
import "bootstrap/dist/js/bootstrap.js";
import 'font-awesome/css/font-awesome.min.css';
import 'react-multi-carousel/lib/styles.css';

import share from '../images/share.jpeg'
import group from '../images/online classes.jpg'
import AWTCLASS2019  from '../images/AWTCLASS2019.jpg'
import good from '../images/good.png'
import star from '../images/favourites.png'
import meetup from '../images/meetup.png'
import books from '../images/books.png'
import Book from '../images/book.jpg'

import Carousel from 'react-multi-carousel';
import Card from "./card.component";
import SectionTitle from "./sectionTitle.component";
import Header from "./header.component";
import Footer from "./footer.component";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default class Homepage extends Component {

    render() {
        return (
            <>
                <Header/>

                <section className="">
                    <div className="carousel slide w-100 align-center" id="carouselExampleIndicators" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
                        </ol>
                        <div className="carousel-inner" >
                            <div className="carousel-item active">
                                <img height="800px" className="d-block w-100" src={share} alt="First slide"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h1>Lorem Ipsum</h1>
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque
                                        corrupti reiciendis.</p>
                                    <p><a href="/register" className="btn btn-white btn-primary">Get Started</a></p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img height="800px" className="d-block w-100" src={group} alt="Second slide"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h1>Lorem Ipsum</h1>
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque
                                        corrupti reiciendis.</p>
                                    <p><a href="/register" className="btn btn-white btn-primary">Get Started</a></p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img height="800px" className="d-block w-100 " src={AWTCLASS2019} alt="Third slide"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h1>Lorem Ipsum</h1>
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque
                                        corrupti reiciendis.</p>
                                    <p><a href="/register" className="btn btn-white btn-primary">Get Started</a></p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                           data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"/>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                           data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"/>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </section>


                <section className="section myBg element-animate">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mb-4 mb-lg-0 col-lg-3 text-center">
                                <span className="display-4 text-black d-block mb-4"><img src={books}/></span>
                                <h4 className="mb-4 text-primary">Finding Books</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae hic maiores. Velit
                                    nisi, reprehenderit, nobis officia.</p>
                            </div>
                            <div className="col-md-6 mb-4 mb-lg-0 col-lg-3 text-center">
                                <span className="display-4 text-black d-block mb-4"><img src={good}/></span>
                                <h4 className="mb-4 text-primary">Advising New Books</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae hic maiores. Velit
                                    nisi, reprehenderit, nobis officia.</p>
                            </div>
                            <div className="col-md-6 mb-4 mb-lg-0 col-lg-3 text-center">
                                <span className="display-4 text-black d-block mb-4"><img src={meetup}/></span>
                                <h4 className="mb-4 text-primary">Meeting Up</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae hic maiores. Velit
                                    nisi, reprehenderit, nobis officia.</p>
                            </div>
                            <div className="col-md-6 mb-4 mb-lg-0 col-lg-3 text-center">
                                <span className="display-4 text-black d-block mb-4"><img src={star}/></span>
                                <h4 className="mb-4 text-primary">Rating</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae hic maiores. Velit
                                    nisi, reprehenderit, nobis officia.</p>
                            </div>
                        </div>
                    </div>
                </section>





                <Footer/>
            </>
        );
    }
}
