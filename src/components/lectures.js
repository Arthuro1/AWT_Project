import React, {Component} from "react";
import {Dropdown} from "semantic-ui-react";
import {compose} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions";

const lectureOptions = [
    { key: 'Peer to Peer Systems', text: 'Peer to Peer Systems', value: 'Peer to Peer Systems' },
    { key: 'Advanced Web Technologies', text: 'Advanced Web Technologies', value: 'Advanced Web Technologies' },
    { key: 'Distributed Systems', text: 'Distributed Systems', value: 'Distributed Systems' },
    { key: 'Cloud, Web & Mobile', text: 'Cloud, Web & Mobile', value: 'Cloud, Web & Mobile' },
];

class Lectures extends Component{
    constructor(props){
        super(props);
        this.getLecture = this.getLecture.bind(this);
    }

    async getLecture(event, data){
        console.log('selected lecture',data.value);
        await this.props.searchForLecture({filter: this.props.selectedFilter, lecture: data.value});
    }

    render(){
        return(
            <Dropdown onChange={this.getLecture}
                button
                className='icon mb-3 dropDownColor'
                floating
                labeled
                fluid
                selection
                icon='book'
                options={lectureOptions}
                text='Select Lecture'
            />
        );
    }
}

function mapStateToProps(state){
    return{
        selectedFilter: state.filter.selectedFilter
    }
}

export default compose(
    connect(mapStateToProps, actions)
)(Lectures)
