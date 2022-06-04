import { AnyAction, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface ProductState {
  products: Product[];
  perPage: number;
  page: number;
  totalPages: number,
  loading: boolean
}

export enum ProductActions {
  FETCH_PRODUCTS = 'FETCH',
  SET_PAGE = 'SET_PAGE',
  SET_TOTAL_PAGES = 'SET_TOTAL_PAGE',
  SET_LOADING = 'SET_LOADING'
}

export type ProductAction = PayloadAction<Product[]> | PayloadAction<number> | PayloadAction<boolean> | AnyAction;
