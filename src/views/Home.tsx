import React, { useEffect } from 'react';
import ProductTable from '../components/ProductTable';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchProducts } from '../store/products/actions';
import Controls from '../components/Controls';
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {
  const location = useLocation();
  const page = parseInt(
    new URLSearchParams(location.search).get('page') as string
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useAppSelector((state) => state.products.loading);

  useEffect(() => {
    if (page) dispatch(fetchProducts(page));
    else if (location.pathname === '/') dispatch(fetchProducts());
    else navigate('');
  }, [dispatch, location, navigate, page]);

  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="column"
    >
      <Box sx={{ mt: 15, height: 50 }}>{loading ? <CircularProgress /> : null}</Box>
      <Box sx={{ mt: 5, height: 350 }}>
        <ProductTable loading={loading} />
      </Box>
      <Controls />
    </Grid>
  );
};

export default Home;
