import React, {Component} from 'react';

import Header from './header';
import Footer from './footer';
import SectionTitle from './sectionTitle';

import paul from '../images/paul.jpeg';
import shahrzad from '../images/shahrzad.jpg';
import meijie from '../images/Meijie.jpg';
import vidhu from '../images/Vidhu.jpg';
import groupselfii from '../images/groupselfii.jpg';
import PersonsCard from "./personsCard";

export default class AboutUs extends Component {
  render() {

    return (
      <div>
        <Header/>
        <section className="home-slider-loop-false inner-page owl-carousel">
          <div className="slider-item myBgimage">
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
          <SectionTitle title="#-GROUP" backText=""/>
          <div className="row">
            <div className="col-lg-6 bg-transparent grouppic">
              <img height="90%" width="95%" src={groupselfii} alt="images"/>
            </div>

            <div className="col-lg-6 pl-2 pl-lg-5">
              <h2 className="mb-5"><b>History</b></h2>
              <p>Look this beautiful photo!</p>
              <p>
                  Yes, this is us! And we are the group <b><i>#-GROUP</i></b>. It’s really an
                  interesting name, isn’t it? Before talking about this name,
                  let's just begin with us. From the left to right, that’s
                  <b><i> Shahrzad Amini</i></b>,  <b><i> Paul Meteng</i></b>, <b><i> Meijie Li</i></b> and <b><i> Vidhya Vijayaraman</i></b>.
              </p>
                <p>
                  A few years ago, we all lived in different countries which are respectively
                  Iran, Cameroon, China and India. But now we are in the same group and have finished this project
                  together, that’s really amazing. How could that come true? That
                  just because we took part in an amazing course <b><i> Advanced Web
                  Technology </i></b> together! Yes, we are all the student from
                  Duisburg-Essen university and we learn Computer
                  Engineering. And this website was the result of our project in this course.
              </p>

              <p className="mb-5">
                  The goal was to come up with an idea that would facilitate students's lives and help them during their studies. We created this platform where new students can easily find the right books for their studies.
                  In fact students can easily find the most recommended books for a particular subject based on the rating and comments of others. They can also rate and comment the books for others.
              </p>
              <p>
                  Finally, let's come back to the meaning of our interesting group name <b><i>#-GROUP</i></b>.
                  But why actually <b><i> ‘#’</i></b>? That is just because during the preparation of the React
                  hands-on session and lecture one of our group member, while copying some code from internet accidentally copied a #.
                  It is only later we realised that the hash didn't have any meaning in the code. At that time we had already pasted it in multiple places in our code.
                  It is from this hilarious situation that the name of our group came from, remembering us actually what copy-paste can cause.            </p>
            </div>
          </div>
        </div>

        <section className="section bg-light">
          <SectionTitle title="Group Members" backText="Members"/>
          <div className="row px-auto mx-5">
              <div className=" box col-lg-6 col-md-12 col-auto ">
                  <PersonsCard photo ={paul} name="Paul Meteng" role="Frontend & Backend"/>
                  <PersonsCard photo ={shahrzad} name="Shahrzad Amini" role="Frontend"/>
              </div>
              <div className="box col-lg-6 col-md-12 col-auto ">
                  <PersonsCard photo ={meijie} name="Meijie Li" role="Backend"/>
                  <PersonsCard photo ={vidhu} name="Vidhya Vijayaraman" role="Frontend"/>
              </div>
          </div>
        </section>

        <Footer/>
      </div>
    );
  }
}
