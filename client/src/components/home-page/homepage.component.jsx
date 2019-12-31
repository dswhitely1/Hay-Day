import React, {useContext, useEffect} from 'react';
import {ActionsContext} from "../../contexts/actions.context";
import {useSelector} from "react-redux";

function HomePage() {
    const {products: {fetchProducts}} = useContext(ActionsContext);
    const {isLoading, errors, data} = useSelector(state => state.products);

    useEffect(()=> {
        if (data.length === 0) {
            fetchProducts();
        }
    }, [])

    if (isLoading) {
        return <h1>Loading</h1>
    }

    return (
        <h1>Hello World</h1>
    )
}

export default HomePage
