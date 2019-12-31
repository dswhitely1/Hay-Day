import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import * as types from './products.types';
import {axiosWithNoAuth as axios} from "../utils/axiosConfig";

export const useProductActions = () => {
    const dispatch = useDispatch();

    const fetchProducts = useCallback(() => {
        dispatch({type: types.FETCH_PRODUCTS_START});
        axios().get('/sources').then(res => {
            dispatch({type: types.FETCH_PRODUCTS_SUCCESS, payload: res.data})
        }).catch(err => {
            dispatch({type: types.FETCH_PRODUCTS_FAILURE, payload: err.response});
        })
    }, [dispatch]);

    return {fetchProducts}
};
