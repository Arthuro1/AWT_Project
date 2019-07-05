import React, { Component } from 'react';

import Header from "./header.component";
import Footer from "./footer.component";
import SectionTitle from "./sectionTitle.component";

import paul from '../images/paul.jpeg';
import shahrzad from '../images/shahrzad.jpg'
import meijie from '../images/Meijie.jpg'
import vidhu from '../images/Vidhu.jpg'
import groupselfii from '../images/groupselfii.jpg'

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

                <div className="section container-fluid myBg">
                    <SectionTitle title="GROUP #" backText=""/>
                    <div className="row">
                        <div className="col-lg-6 bg-transparent grouppic">
                            <img height='90%' width='95%' src={groupselfii} alt="images"/>
                        </div>




                        <div className="col-lg-6 pl-2 pl-lg-5">
                            <h2 className="mb-5">History</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est soluta blanditiis velit doloremque corrupti aliquid ducimus consectetur ea nobis dolorem, id quibusdam praesentium consequuntur modi eligendi, sunt suscipit ullam iure nesciunt tempore. Itaque placeat, libero aliquam odio ex voluptas.</p>
                            <p>Vel vitae, assumenda blanditiis nemo in vero reprehenderit asperiores distinctio exercitationem aliquid, quam velit explicabo neque. Sapiente provident sequi omnis itaque eaque voluptatum vel. Accusamus deserunt atque eligendi mollitia voluptates eum libero, ratione id labore. Magnam porro dolorem aspernatur, dolor?</p>

                            <p className="mb-5">Vel vitae, assumenda blanditiis nemo in vero reprehenderit asperiores distinctio exercitationem aliquid, quam velit explicabo neque. Sapiente provident sequi omnis itaque eaque voluptatum vel. Accusamus deserunt atque eligendi mollitia voluptates eum libero, ratione id labore. Magnam porro dolorem aspernatur, dolor?</p>

                        </div>
                    </div>
                </div>

                <section className="section bg-light">

                    <SectionTitle title="Group Members" backText=""/>

                    <div className="box">
                        <div className="card">
                            <div className="imgBx">
                                <img src={paul} alt="images"/>
                            </div>
                            <div className="details">
                                <h2>Paul Meteng<br/><span>Frontend & Backend</span></h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx">
                                <img src={shahrzad} alt="images"/>
                            </div>
                            <div className="details">
                                <h2>Shahrzad Amini<br/><span>Frontend</span></h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx">
                                <img src={meijie} alt="images"/>
                            </div>
                            <div className="details">
                                <h2>Meijie Li<br/><span>Backend</span></h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx">
                                <img src={vidhu} alt="images"/>
                            </div>
                            <div className="details">
                                <h2>Vidhya Vijayaraman<br/><span>Frontend</span></h2>
                            </div>
                        </div>
                    </div>

                </section>

                <Footer/>
            </div>
        )
    }
}
