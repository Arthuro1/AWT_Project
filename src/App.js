import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.js";
import "jquery"
import "bootstrap/dist/js/bootstrap.js";
import 'font-awesome/css/font-awesome.min.css';
import 'react-multi-carousel/lib/styles.css';

import brand from './images/hash.png'
import share from './images/share.jpeg'
import group from './images/online classes.jpg'
import junge from './images/junge.jpg'
import good from './images/good.png'
import star from './images/favourites.png'
import meetup from './images/meetup.png'
import books from './images/books.png'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Carousel from 'react-multi-carousel';
import Register from './components/register.component';
import MeetUp from './components/meetUp.component';
import AboutUs from './components/aboutUs.component';
import Card from "./components/card.component";


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

class App extends Component {

    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <header role="banner">
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow py-0">
                            <div className="container">
                                <Link to={'/'} > <div className="navbar-brand d-flex">
                                    <img height="35" src={brand} alt="logo"/>
                                    <h4 className="ml-2">BookiZ</h4>
                                </div></Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navCollapse" aria-controls="navCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navCollapse">
                                    <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                                        <li className="nav-item">
                                            <Link to={'/'} className="nav-link"> <i className="fa fa-home"></i> Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/meet_up'} className="nav-link"> <i className="fa fa-meetup"></i> Meet Up</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/about_us'} className="nav-link"> <i className="fa fa-address-card"/> About Us</Link>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item cta-btn">
                                            <Link to={'/login'} className="nav-link btn btn-primary"> <i className="fa fa-user"/> My Account</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>




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
                                        <p><a href="#" className="btn btn-white btn-primary">Get Started</a></p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img height="800px" className="d-block w-100" src={group} alt="Second slide"/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1>Delecious Food</h1>
                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque
                                            corrupti reiciendis.</p>
                                        <p><a href="#" className="btn btn-white btn-primary">Get Started</a></p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img height="800px" className="d-block w-100 " src={junge} alt="Third slide"/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque
                                            corrupti reiciendis.</p>
                                        <p><a href="#" className="btn btn-white btn-primary">Get Started</a></p>
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

                        <div className="clearfix mb-5 pb-5">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12 text-center heading-wrap">
                                        <h2>Top Books</h2>
                                        <span className="back-text">Top</span>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                            <div className="sched d-block d-lg-flex bg-transparent order-2 text mx-auto">
                                <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                        "                        and make up the bulk of the\n" +
                                        "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"}} />
                            </div>
                            <div className="sched d-block d-lg-flex bg-transparent text ">
                                <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                        "                        and make up the bulk of the\n" +
                                        "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"}} />
                            </div>
                            <div className="sched d-block d-lg-flex bg-transparent order-2 text mx-auto">
                                <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                        "                        and make up the bulk of the\n" +
                                        "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"}} />
                            </div>
                            <div className="sched d-block d-lg-flex bg-transparent text ">
                                <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                        "                        and make up the bulk of the\n" +
                                        "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"}} />
                            </div>
                            <div className="sched d-block d-lg-flex bg-transparent order-2 text mx-auto">
                                <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                        "                        and make up the bulk of the\n" +
                                        "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"}} />
                            </div>
                            <div className="sched d-block d-lg-flex bg-transparent text .ml-1">
                                <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                        "                        and make up the bulk of the\n" +
                                        "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"}} />
                            </div>
                        </Carousel>;
                    </section>


                    <section className="section myBg element-animate">

                        <div className="clearfix mb-5 pb-5">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12 text-center heading-wrap">
                                        <h2>Lastest Added Books</h2>
                                        <span className="back-text">Latest</span>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                            <div className="sched d-block d-lg-flex bg-transparent order-2 text mx-auto">
                                <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                        "                        and make up the bulk of the\n" +
                                        "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"}} />
                            </div>
                            <div className="sched d-block d-lg-flex bg-transparent text ">
                                <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                        "                        and make up the bulk of the\n" +
                                        "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"}} />
                            </div>
                            <div className="sched d-block d-lg-flex bg-transparent order-2 text mx-auto">
                                <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                        "                        and make up the bulk of the\n" +
                                        "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"}} />
                            </div>
                            <div className="sched d-block d-lg-flex bg-transparent text ">
                                <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                        "                        and make up the bulk of the\n" +
                                        "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"}} />
                            </div>
                            <div className="sched d-block d-lg-flex bg-transparent order-2 text mx-auto">
                                <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                        "                        and make up the bulk of the\n" +
                                        "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"}} />
                            </div>
                            <div className="sched d-block d-lg-flex bg-transparent text .ml-1">
                                <Card infos={{title: "Card title", text: "Some quick example text to build on the card title\n" +
                                        "                        and make up the bulk of the\n" +
                                        "                        card's content.", image: "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"}} />
                            </div>
                        </Carousel>;
                    </section>



                    <footer className="site-footer" role="contentinfo">
                        <div className="container">
                            <div className="row mb-5">
                                <div className="col-md-4 mb-5">
                                    <h3>About Us</h3>
                                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Voluptatibus et dolor blanditiis consequuntur ex voluptates perspiciatis omnis
                                        unde minima expedita.</p>
                                    <ul className="list-unstyled footer-link d-flex footer-social">
                                        <li><a href="#" className="p-2"><span className="fa fa-twitter"></span></a></li>
                                        <li><a href="#" className="p-2"><span className="fa fa-facebook"></span></a>
                                        </li>
                                        <li><a href="#" className="p-2"><span className="fa fa-linkedin"></span></a>
                                        </li>
                                        <li><a href="#" className="p-2"><span className="fa fa-instagram"></span></a>
                                        </li>
                                    </ul>

                                </div>
                                <div className="col-md-5 mb-5">

                                </div>
                                <div className="col-md-3 mb-5">
                                    <h3>Quick Links</h3>
                                    <ul className="list-unstyled footer-link">
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Terms of Use</a></li>
                                        <li><a href="#">Disclaimers</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-md-center text-left">
                                    <p>Copyright &copy; {new Date().getFullYear()} All rights reserved | This Project was made with { " "}
                                        <i className="fa fa-heart" aria-hidden="true"/> within the scope of the lecture <a
                                            href="#" target="_blank">Advanced Web Technology</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>

                    <Switch>
                        <Route exact path='/register' component={ Register } />
                        <Route path='/meet_up' component={ MeetUp } />
                        <Route path='/about_us' component={ AboutUs } />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
