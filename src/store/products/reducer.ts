import { ProductState, ProductAction, ProductActions } from './types';

const initialState: ProductState = {
  products: [],
  perPage: 5,
  page: 1
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
    default:
      return state;
  }
}
