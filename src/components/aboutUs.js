import React, { Component } from 'react';

import Header from "./header";
import Footer from "./footer";
import SectionTitle from "./sectionTitle";

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
                            <p>Look this beautiful photo!.</p>
                            <p>Yes, this is us! And we are the group ‘AWT# ‘ It’s really an interesting name, isn’t it? Before talking about this name, now let's just begin with us.
                                From the left to right, that’s Shahrzad Amini, Paul Meteng, Meijie Li, and Vidhya Vijayaraman. Just years ago, we all lived in different countries, that’s Iran, Kamerun, China and Indien.
                            </p>
                            <p>But now we are in the same group and have finished this project together, that’s really amazing. How can that come true?
                                That just because we took part in an amazing course ‘Advanced Web Technology ’ together! Yes, we are all the student from Duisburg-Essen university and of course, we learned computer engineering. And this website is our project in this course. </p>

                            <p className="mb-5">We began with the idea that wants to help new students more clearly to choose their courses and we thought books maybe a very good idea to help students know this subject well. </p>
                            <p>Most important is that you can share your inspirations here, so it also likes a communication platform for all the people who want to learn this subject.</p>
                            <p> So it's also very useful for the people who have learned this subject. And we also have many good ideas haven't made it come true, we may add it later.</p>
                            <p>At last, let talk about our interesting group name ‘AWT#’, you may have already guessed the meaning of ‘AWT ’, just the abbreviation of the name of our course ‘Advanced Web Technology’. And the why ‘#’? That just because “During react hands-on and lecture practice session we added # in code so we called our team as" hash".
                            </p>

                        </div>
                    </div>
                </div>

                <section className="section bg-light">

                    <SectionTitle title="Group Members" backText="Members"/>

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
