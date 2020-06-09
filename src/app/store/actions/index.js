import { UPDATE_SEARCH_PARAMS, SET_ADDRESS, SET_POC } from './actionTypes';

export const setSearchParams = value => ({
    type: UPDATE_SEARCH_PARAMS,
    params: value
});

export const setAddress = value => ({
    type: SET_ADDRESS,
    address: value
});

export const setPoc = value => ({
    type: SET_POC,
    poc: value
});