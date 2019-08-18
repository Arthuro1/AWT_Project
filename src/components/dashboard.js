import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {ReactSpinner} from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';

import * as actions from '../actions';
import Header from './header';
import Footer from './footer';
import SectionTitle from './sectionTitle';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './card';
import DropdownLecture from './dropdowns';

const responsive = {
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 5,
    slidesToSlide: 5
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1,
    slidesToSlide: 1
  },
};

const wheel = () => (
  <div>
    <ReactSpinner />
  </div>
);

class Dashboard extends Component {
  // initialize our state
  state = {
    topRatedBooks: [],
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };

  componentWillMount() {
    if (this.props.isAuthentificated) {
      this.props.getDataFromDb();
    }
  }

  render() {
    const array = this.props.data;
    const booksResult = this.props.searchResults;
    let component;
    let bookComponent;

    if (!booksResult[0]) {
      bookComponent = wheel();
    } else {
      bookComponent = (
        <Carousel
          centerMode={false}
          focusOnSelect={true}
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          slidesToSlide={2}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={2000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          partialVisbile={false}
        >

          {Array.from(this.props.searchResults).map((_, i) =>
              <Card data={this.props.searchResults[i]} />
          )}
        </Carousel>
      );
    }

    if (!array[0]) {
      component = wheel();
    } else {
      component = (
          <Carousel
              centerMode={false}
              focusOnSelect={true}
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              slidesToSlide={2}
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={2000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={['tablet', 'mobile']}
              deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              partialVisbile={false}
          >

          {Array.from(this.props.data).map((_, i) =>
              <Card data={this.props.data[i]} />
          )}
        </Carousel>
      );
    }
    return (
      <div>
        <Header />
        <section className="section myBg">
          <DropdownLecture />
        </section>
        <section className="myBg">{bookComponent}</section>
        <section className="section bg-light">
          <SectionTitle title="Top Books" backText="Top" />
          {component}
        </section>

        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthentificated: state.auth.isAuthentificated,
    data: state.dataRequest.data,
    searchResults: state.search.data,
    selectedBook: state.book.oneBook,
    errorMessage: state.dataRequest.errorMessage,
  };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  )
)(Dashboard);
