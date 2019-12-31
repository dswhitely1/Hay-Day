import {useProductActions} from "./products/products.actions";

export const useActions = () => {
    const products = useProductActions();

    return {products};
};
