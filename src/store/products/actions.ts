import { AppDispatch, RootState } from '..';
import { appendURL } from '../../utils';
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
  return {
    type: ProductActions.SET_LOADING,
    payload: isLoading
  };
};

export const fetchProducts = (page: number = 1) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setPage(page));
    dispatch(setLoading(true));
    const url = appendURL(
      process.env.REACT_APP_API as string,
      'page',
      page.toString()
    );
    const res = await (await fetch(url as string)).json();

    const {
      data: products,
      total_pages: totalPages
    }: { data: Product[]; total_pages: number } = res;
    dispatch(setTotalPages(totalPages));
    dispatch(setProducts(products));
    dispatch(setLoading(false));
  };
};

export const filterProducts = (id: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    dispatch(setPage(0));
    const url = appendURL(
      process.env.REACT_APP_API as string,
      'id',
      id.toString()
    );
    const res = await fetch(url as string);
    if (res.status === 200) {
      const product = await res.json();
      dispatch(setProducts([product.data]));
    } else {
      dispatch(setProducts([]));
    }
    dispatch(setLoading(false));
  };
};
