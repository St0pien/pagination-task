import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar sx={{mx: 3}}>
          <Typography component="h1" variant="h4">
            Products app
          </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
