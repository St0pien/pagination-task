import { AppDispatch, RootState } from '..';
import { Product, ProductAction, ProductActions } from './types';

const setProducts = (products: Product[]): ProductAction => {
  return {
    type: ProductActions.FETCH_PRODUCTS,
    payload: products
  };
};

export const fetchProducts = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const url = process.env.REACT_APP_API as string;
    const productsObj: Product[] = (await(await fetch(url+getState().products.page)).json()).data
    console.log(productsObj);
    dispatch(setProducts(productsObj));
  };
};
