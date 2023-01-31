import { COUNTER_CHANGE } from "../constants";
export const increment = () => {
    return {
        type: 'COUNT_INCREASE',
    }
}

export const decrement = () => {
    return{
        type: 'COUNT_DECREASE',
    }
}