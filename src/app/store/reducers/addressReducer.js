import { SET_ADDRESS } from '../actions/actionTypes';

const initialState = {
    'address': ''
};

export const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADDRESS:
            return {
                'address': action.address
            };
        default:
        return state;
    }
};
