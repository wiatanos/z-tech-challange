import { combineReducers }      from 'redux';
import { addressReducer }       from './addressReducer';
import { searchParamsReducer }  from './searchParamsReducer';
import { pocReducer }           from './pocReducer'

export const Reducers = combineReducers({
    setAddress: addressReducer,
    setSearchParams: searchParamsReducer,
    setPoc: pocReducer
});