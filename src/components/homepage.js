import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.js";
import "jquery"
import "bootstrap/dist/js/bootstrap.js";
import 'font-awesome/css/font-awesome.min.css';
import 'react-multi-carousel/lib/styles.css';

import Header from "./header";
import Footer from "./footer";

import share from '../images/share.jpeg'
import group from '../images/online classes.jpg'
import AWTCLASS2019  from '../images/AWTCLASS2019.jpg'
import good from '../images/good.png'
import star from '../images/favourites.png'
import books from '../images/books.png'

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
                                <span className="display-4 text-black d-block mb-4"><img src={books} alt="default"/></span>
                                <h4 className="mb-4 text-primary">Finding Books</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae hic maiores. Velit
                                    nisi, reprehenderit, nobis officia.</p>
                            </div>
                            <div className="col-md-6 mb-4 mb-lg-0 col-lg-3 text-center">
                                <span className="display-4 text-black d-block mb-4"><img src={good} alt="default"/></span>
                                <h4 className="mb-4 text-primary">Advising Books</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae hic maiores. Velit
                                    nisi, reprehenderit, nobis officia.</p>
                            </div>
                            <div className="col-md-6 mb-4 mb-lg-0 col-lg-3 text-center">
                                <span className="display-4 text-black d-block mb-4"><img src={star} alt="default"/></span>
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
