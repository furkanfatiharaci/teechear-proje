// SearchBar.jsx
import React, { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm); // Bu fonksiyon arama terimini üst bileşene gönderir
  };

  return (<>
  <Box sx={{
    display:'flex',
    borderRadius:'8px',
    backgroundColor:'white',
    border:'1px solid white',
    padding:'4px 4px',
    alignItems:'center'

  }}>
    <div>
      <InputBase
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="submit" aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </div>
    </Box>
    </>
    
  );
};

export default SearchBar;
