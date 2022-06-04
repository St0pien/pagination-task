import { AppDispatch, RootState } from '..';
import { Product, ProductAction, ProductActions } from './types';

export const setProducts = (products: Product[]): ProductAction => {
  return {
    type: ProductActions.FETCH_PRODUCTS,
    payload: products
  };
};

export const setPage = (page: number): ProductAction => {
  return {
    type: ProductActions.SET_PAGE,
    payload: page
  };
};

export const setTotalPages = (pages: number): ProductAction => {
  return {
    type: ProductActions.SET_TOTAL_PAGES,
    payload: pages
  };
};

export const setLoading = (isLoading: boolean): ProductAction => {
  console.log(isLoading);
  return {
    type: ProductActions.SET_LOADING,
    payload: isLoading
  };
};

export const fetchProducts = (page: number = 1) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setPage(page));
    dispatch(setLoading(true));
    const url = new URL(process.env.REACT_APP_API as string);
    url.searchParams.append('page', `${page}`);
    const res = await (await fetch(url.toString())).json();

    const {
      data: products,
      total_pages: totalPages
    }: { data: Product[]; total_pages: number } = res;
    dispatch(setTotalPages(totalPages));
    dispatch(setProducts(products));
    dispatch(setLoading(false));
  };
};
