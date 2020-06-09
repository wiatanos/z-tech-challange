import { UPDATE_SEARCH_PARAMS } from '../actions/actionTypes';

const initialState = {
    'params': {
        'algorithm': 'NEAREST',
        'lat': '0',
        'long': '0',
        'now': new Date().toISOString('ISO-8601')
    }
};

export const searchParamsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_PARAMS:
            return {
                'params': action.params
            };
        default:
        return state;
    }
};
