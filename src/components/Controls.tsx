import React, { ChangeEvent } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchProducts } from '../store/products/actions';

const Controls = () => {
  const { page, totalPages } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const handleChange = (_: ChangeEvent<unknown>, value: number) => {
    dispatch(fetchProducts(value));
  };

  return (
    <div>
      <Pagination
        page={page}
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`?page=${item.page}`}
            {...item}
          />
        )}
        count={totalPages}
      />
    </div>
  );
};

export default Controls;
