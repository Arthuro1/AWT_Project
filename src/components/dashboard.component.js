import React, { Component } from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {ReactSpinner} from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';

import * as actions from '../actions'
import Header from "./header.component";
import Footer from "./footer.component";
import SectionTitle from "./sectionTitle.component";
import Carousel from "react-multi-carousel";
import Card from "./card.component";

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

const wheel = ()=>(
    <div>
        <ReactSpinner />
    </div>
);

class Dashboard extends Component {

    // initialize our state
    state = {
        topRatedBooks:[],
        data: [],
        id: 0,
        message: null,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null,
    };

     componentWillMount() {
         this.props.getDataFromDb();
    }


        render() {
            const array = this.props.data;
            let component ;

            if (!array[0]) {
                component = wheel();
            } else {
                console.log("Author", this.props.data[1].author);
                component = <Carousel centerMode={true} focusOnSelect={true}
                                      swipeable={false}
                                      draggable={false}
                                      showDots={true}
                                      responsive={responsive}
                                      ssr={true} // means to render carousel on server-side.
                                      slidesToSlide={2}
                                      infinite={true}
                                      autoPlay={this.props.deviceType !== "mobile" ? true : false}
                                      autoPlaySpeed={2000}
                                      keyBoardControl={true}
                                      customTransition="all .5"
                                      transitionDuration={2000}
                                      containerClass="carousel-container"
                                      removeArrowOnDeviceType={["tablet", "mobile"]}
                                      deviceType={this.props.deviceType}
                                      dotListClass="custom-dot-list-style"
                                      itemClass="carousel-item-padding-40-px"
                >

                    <Card infos={{author: this.props.data[0].authors[0], numberOfVoters: this.props.data[0].size, title: this.props.data[0].title, text: this.props.data[0].description, image: this.props.data[0].thumbnail, rating: this.props.data[0].rating.average}} />
                    <Card infos={{author: this.props.data[1].authors[0], numberOfVoters: this.props.data[1].size, title: this.props.data[1].title, text: this.props.data[1].description, image: this.props.data[1].thumbnail, rating: this.props.data[1].rating.average}} />
                    <Card infos={{author: this.props.data[2].authors[0], numberOfVoters: this.props.data[2].size, title: this.props.data[2].title, text: this.props.data[2].description, image: this.props.data[2].thumbnail, rating: this.props.data[2].rating.average}} />
                    <Card infos={{author: this.props.data[3].authors[3], numberOfVoters: this.props.data[3].size, title: this.props.data[3].title, text: this.props.data[3].description, image: this.props.data[3].thumbnail, rating: this.props.data[3].rating.average}} />
                    <Card infos={{author: this.props.data[2].authors[4], numberOfVoters: this.props.data[4].size, title: this.props.data[4].title, text: this.props.data[4].description, image: this.props.data[4].thumbnail, rating: this.props.data[4].rating.average}} />
                    <Card infos={{author: this.props.data[2].authors[5], numberOfVoters: this.props.data[5].size, title: this.props.data[5].title, text: this.props.data[5].description, image: this.props.data[5].thumbnail, rating: this.props.data[5].rating.average}} />

                </Carousel>;
            }
        return (
            <div>
                <Header/>

                <section className="section bg-light">
                    <SectionTitle title="Top Books" backText="Top"/>
                    {component}
                </section>

                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        data: state.dataRequest.data,
        errorMessage: state.dataRequest.errorMessage
    }
}

export default compose(
    connect(mapStateToProps, actions)
)(Dashboard)
