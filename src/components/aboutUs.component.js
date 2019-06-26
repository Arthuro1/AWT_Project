import React, { Component } from 'react';
import Header from "./header.component";
import Footer from "./footer.component";
import image from '../images/online classes.jpg'
import SectionTitle from "./sectionTitle.component";

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <Header/>
                <section className="home-slider-loop-false inner-page owl-carousel">
                    <div className="slider-item myBgimage" >

                        <div className="container">
                            <div className="row slider-text align-items-center justify-content-center">
                                <div className="col-md-8 text-center col-sm-12 element-animate">
                                    <h1>About Us</h1>

                                </div>
                            </div>
                        </div>

                    </div>

                </section>

                <div className="section container-fluid bg-light">
                    <div className="row">
                        <div className="col-lg-6">

                        </div>

                        <div className="col-lg-6 pl-2 pl-lg-5">
                            <h2 className="mb-5">History</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est soluta blanditiis velit doloremque corrupti aliquid ducimus consectetur ea nobis dolorem, id quibusdam praesentium consequuntur modi eligendi, sunt suscipit ullam iure nesciunt tempore. Itaque placeat, libero aliquam odio ex voluptas.</p>
                            <p>Vel vitae, assumenda blanditiis nemo in vero reprehenderit asperiores distinctio exercitationem aliquid, quam velit explicabo neque. Sapiente provident sequi omnis itaque eaque voluptatum vel. Accusamus deserunt atque eligendi mollitia voluptates eum libero, ratione id labore. Magnam porro dolorem aspernatur, dolor?</p>

                            <p className="mb-5">Vel vitae, assumenda blanditiis nemo in vero reprehenderit asperiores distinctio exercitationem aliquid, quam velit explicabo neque. Sapiente provident sequi omnis itaque eaque voluptatum vel. Accusamus deserunt atque eligendi mollitia voluptates eum libero, ratione id labore. Magnam porro dolorem aspernatur, dolor?</p>

                        </div>
                    </div>
                </div>

                <section className="section myBg">

                    <SectionTitle title="Group Members" backText="Members"/>
                    <div className="container">
                        <div className="row">
                            <div className="major-caousel js-carousel-1 owl-carousel">
                                <div>
                                    <div className="media d-block media-custom text-center">
                                        <a href="adoption-single.html"><img src="img/person_1.jpg"
                                                                            alt="Image Placeholder"
                                                                            className="img-fluid"/></a>
                                        <div className="media-body">
                                            <h3 className="mt-0 text-black">Mellisa Howard</h3>
                                            <p className="lead">CEO, Co-Founder</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="media d-block media-custom text-center">
                                        <a href="adoption-single.html"><img src="img/person_2.jpg"
                                                                            alt="Image Placeholder"
                                                                            className="img-fluid"/></a>
                                        <div className="media-body">
                                            <h3 className="mt-0 text-black">Mike Richardson</h3>
                                            <p className="lead">CEO, Co-Founder</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="media d-block media-custom text-center">
                                        <a href="adoption-single.html"><img src="img/person_3.jpg"
                                                                            alt="Image Placeholder"
                                                                            className="img-fluid"/></a>
                                        <div className="media-body">
                                            <h3 className="mt-0 text-black">Charles White</h3>
                                            <p className="lead">CEO, Co-Founder</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="media d-block media-custom text-center">
                                        <a href="adoption-single.html"><img src="img/person_1.jpg"
                                                                            alt="Image Placeholder"
                                                                            className="img-fluid"/></a>
                                        <div className="media-body">
                                            <h3 className="mt-0 text-black">Mellisa Howard</h3>
                                            <p className="lead">CEO, Co-Founder</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="media d-block media-custom text-center">
                                        <a href="adoption-single.html"><img src="img/person_2.jpg"
                                                                            alt="Image Placeholder"
                                                                            className="img-fluid"/></a>
                                        <div className="media-body">
                                            <h3 className="mt-0 text-black">Mike Richardson</h3>
                                            <p className="lead">CEO, Co-Founder</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="media d-block media-custom text-center">
                                        <a href="adoption-single.html"><img src="img/person_3.jpg"
                                                                            alt="Image Placeholder"
                                                                            className="img-fluid"/></a>
                                        <div className="media-body">
                                            <h3 className="mt-0 text-black">Charles White</h3>
                                            <p className="lead">CEO, Co-Founder</p>
                                        </div>
                                    </div>
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
