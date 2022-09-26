import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
//import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
//import DirectionsIcon from '@mui/icons-material/Directions';
/*<IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>*/

export default function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Movies"
        inputProps={{ 'aria-label': 'search movies' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
    </IconButton>
    </Paper>
  );
}