import React, {Component} from "react";
import {Dropdown} from "semantic-ui-react";
import {compose} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions";

class Filter extends Component{
    constructor(props){
        super(props);
        this.getFilter = this.getFilter.bind(this);
    }

    getFilter(event, data){
        this.props.setFilter(data.children);
    }
    render(){
        return(
            <Dropdown text='Filter' onChange={this.getFilter} icon='filter' fluid floating labeled button className='icon dropDownColor'>
                <Dropdown.Menu>
                    <Dropdown.Header icon='tags' content='Filter by tag' />
                    <Dropdown.Item onClick={this.getFilter}>Best Ratings</Dropdown.Item>
                    <Dropdown.Item onClick={this.getFilter}>Most Rated</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default compose(
    connect(null, actions)
)(Filter)
