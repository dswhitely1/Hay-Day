import {createReducer} from "../utils/createReducer";
import * as types from './products.types';

const initialState = {
    isLoading: false,
    errors: null,
    data: []
};

const productActionStart = (state) => ({...state, isLoading: true, errors: null, data: []});
const productActionSuccess = (state, payload) => ({...state, isLoading: false, errors: null, data: payload});
const productActionFailure = (state, payload) => ({...state, isLoading: true, errors: payload, data: []});

export default createReducer(initialState, {
    [types.FETCH_PRODUCTS_START]: productActionStart,
    [types.FETCH_PRODUCTS_SUCCESS]: productActionSuccess,
    [types.FETCH_PRODUCTS_FAILURE]: productActionFailure
})
