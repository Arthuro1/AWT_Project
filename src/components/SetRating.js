import React, {Component} from 'react';
import Star from './Star';

class SetRating extends Component {
  state = {
    rating: 0,
  };
  SetRating(value) {
    this.setState({rating: value});
  }
  render() {
    let Stars = [];
    let maxRating = 5;

    for (let i = 0; i < maxRating; i++) {
      let selected = '';
      if (this.state.rating > i) {
        selected = 'selected';
      } else {
        selected = null;
      }
      Stars.push(
        <Star
          selected={selected}
          rating={() => this.SetRating(i + 1)}
          key={i}
        />
      );
    }
    return <ul className="course--stars"></ul>;
  }
}
export default SetRating;
