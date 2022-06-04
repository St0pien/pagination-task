import React from 'react';
import AutoComplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useAppSelector } from '../store/hooks';

const Filter = () => {
  const products = useAppSelector(state => state.products.products);

  return (
    <div>
      <AutoComplete
        sx={{ mt: 10, width: 200 }}
        options={products.map(({ id }) => id.toString())}
        renderInput={(params) => (
          <TextField
          {...params}
          id="outlined-number"
          label="id"
          type="number"
        />
        )}
      />
    </div>
  );
};

export default Filter;
