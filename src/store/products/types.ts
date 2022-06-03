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
}

export enum ProductActions {
  FETCH_PRODUCTS = 'FETCH',
  NEXT_PAGE = 'NEXT',
  PREVIOUSE_PAGE = 'PREVIOUSE'
}

export type ProductAction = PayloadAction<Product[]> | AnyAction;
