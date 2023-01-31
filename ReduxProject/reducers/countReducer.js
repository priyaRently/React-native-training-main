import { COUNTER_CHANGE } from "../constants";

const initialState={
    count:0
};

const countReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'COUNT_INCREASE':
            return {
                ...state,
                count: state.count+1,
            };
        case 'COUNT_DECREASE':
            return {
                ...state,
                count: state.count-1,
            }    
        default:
            return state;
    }
}

export default countReducer;