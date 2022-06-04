import { ProductState, ProductAction, ProductActions } from './types';

const initialState: ProductState = {
  products: [],
  perPage: 5,
  page: 0,
  totalPages: 1,
  loading: false,
};

export default function productsReducer(
  state = initialState,
  action: ProductAction
): ProductState {
  switch (action.type) {
    case ProductActions.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case ProductActions.SET_PAGE:
      return {
        ...state,
        page: action.payload
      };
    case ProductActions.SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload
      };
    case ProductActions.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
}
