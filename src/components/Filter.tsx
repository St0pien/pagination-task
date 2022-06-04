import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { fetchProducts } from '../store/products/actions';
import { useAppDispatch } from '../store/hooks';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { appendURL } from '../utils';

const Filter = () => {
  const [id, setID] = useState<number | string>('');
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    const idParam = parseInt(search.get('id') as string);
    if (idParam) setID(idParam);
  }, []);

  const handleClick = () => {
    if (id) {
      const url = appendURL(
        window.location.origin,
        'id',
        id.toString(),
        false
      ) as URL;
      nav(url.search);
    } else {
      nav('/');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setID(value ? value : '');
  };

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      (e.target as HTMLInputElement).blur();
      handleClick();
    }
  };

  return (
    <div>
      <TextField
        onKeyDown={handleEnter}
        value={id}
        onChange={handleChange}
        id="outlined-search"
        label="Search by ID"
        type="number"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClick}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </div>
  );
};

export default Filter;
