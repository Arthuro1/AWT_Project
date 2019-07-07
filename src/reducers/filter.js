import {FILTER_SELECTED} from '../actions/types'


const DEFAULT_STATE = {
    selectedFilter: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case FILTER_SELECTED:
            console.log('reducer filter got called');
            return {...state, selectedFilter: action.payload};
        default:
            return state
    }
}
