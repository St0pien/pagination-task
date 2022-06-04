import React from 'react';
import { useAppSelector } from '../store/hooks';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';

const ProductTable = ({ loading }: { loading: boolean}) => {
  const products = useAppSelector((state) => state.products.products);

  return (
    <TableContainer
      sx={{width: '50vw', minWidth: 300, overflow: 'hidden' }}
      component={Paper}
    >
      <Table aria-label="products">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, i) => (
            <Slide
              key={product.id}
              direction="left"
              in={!loading}
              timeout={(i + 1) * 150}
            >
              <TableRow
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  background: product.color
                }}
              >
                <TableCell>{product.id}</TableCell>
                <TableCell align="right">{product.name}</TableCell>
                <TableCell align="right">{product.year}</TableCell>
              </TableRow>
            </Slide>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
