import { SET_POC } from '../actions/actionTypes';

const initialState = {
    'poc': ''
};

export const pocReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POC:
            return {
                'poc': action.poc
            };
        default:
        return state;
    }
};
