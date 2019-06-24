import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.js";
import "jquery"
import "bootstrap/dist/js/bootstrap.js";
import 'font-awesome/css/font-awesome.min.css';
import 'react-multi-carousel/lib/styles.css';

import share from '../images/share.jpeg'
import group from '../images/online classes.jpg'
import junge from '../images/junge.jpg'
import good from '../images/good.png'
import star from '../images/favourites.png'
import meetup from '../images/meetup.png'
import books from '../images/books.png'


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
                                    <h1>Expert Chefs</h1>
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque
                                        corrupti reiciendis.</p>
                                    <p><a href="/register" className="btn btn-white btn-primary">Get Started</a></p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img height="800px" className="d-block w-100" src={group} alt="Second slide"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h1>Delecious Food</h1>
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque
                                        corrupti reiciendis.</p>
                                    <p><a href="/register" className="btn btn-white btn-primary">Get Started</a></p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img height="800px" className="d-block w-100 " src={junge} alt="Third slide"/>
                                <div className="carousel-caption d-none d-md-block">
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

                <section className="section bg-light element-animate">

                    <SectionTitle title="Top Books" backText="Top"/>

                    <Carousel centerMode={true} focusOnSelect={true}
                              swipeable={false}
                              draggable={false}
                              showDots={true}
                              responsive={responsive}
                              ssr={true} // means to render carousel on server-side.
                              slidesToSlide={2}
                              infinite={true}
                              autoPlay={this.props.deviceType !== "mobile" ? true : false}
                              autoPlaySpeed={1000}
                              keyBoardControl={true}
                              customTransition="all .5"
                              transitionDuration={500}
                              containerClass="carousel-container"
                              removeArrowOnDeviceType={["tablet", "mobile"]}
                              deviceType={this.props.deviceType}
                              dotListClass="custom-dot-list-style"
                              itemClass="carousel-item-padding-40-px"
                    >

                        <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                "                        and make up the bulk of the\n" +
                                "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"}} />

                        <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                "                        and make up the bulk of the\n" +
                                "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"}} />

                        <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                "                        and make up the bulk of the\n" +
                                "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"}} />

                        <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                "                        and make up the bulk of the\n" +
                                "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"}} />

                        <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                "                        and make up the bulk of the\n" +
                                "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"}} />

                        <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                "                        and make up the bulk of the\n" +
                                "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"}} />

                    </Carousel>;
                </section>


                <section className="section myBg element-animate">

                    <SectionTitle title="Lastest Added Books" backText="Latest"/>

                    <Carousel centerMode={true} focusOnSelect={true}
                              swipeable={false}
                              draggable={false}
                              showDots={true}
                              responsive={responsive}
                              ssr={true} // means to render carousel on server-side.
                              slidesToSlide={2}
                              infinite={true}
                              autoPlay={this.props.deviceType !== "mobile" ? true : false}
                              autoPlaySpeed={1000}
                              keyBoardControl={true}
                              customTransition="all .5"
                              transitionDuration={500}
                              containerClass="carousel-container"
                              removeArrowOnDeviceType={["tablet", "mobile"]}
                              deviceType={this.props.deviceType}
                              dotListClass="custom-dot-list-style"
                              itemClass="carousel-item-padding-40-px"
                    >

                        <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                "                        and make up the bulk of the\n" +
                                "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"}} />

                        <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                "                        and make up the bulk of the\n" +
                                "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"}} />

                        <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                "                        and make up the bulk of the\n" +
                                "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"}} />

                        <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                "                        and make up the bulk of the\n" +
                                "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"}} />

                        <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                "                        and make up the bulk of the\n" +
                                "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"}} />

                        <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                "                        and make up the bulk of the\n" +
                                "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"}} />
                    </Carousel>;
                </section>

                <Footer/>
            </>
        );
    }
}
