import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import SearchBar from '../searchbar/SearchBar';
import SocialMedia from '../socialmedia/SocialMedia';

function Navbar({ onSearch }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Menü içeriği ve bileşenleri ortalamak için tek bir Box içinde yer alacak */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* SocialMedia bileşeni */}
            <Box sx={{ mr: 2 }}>
              <SocialMedia />
            </Box>

            {/* Menü butonları */}
            <Box sx={{ display: 'flex' }}>
              <Button color="inherit" sx={{ mx: 1 }}>
                Anasayfa
              </Button>
              <Button color="inherit" sx={{ mx: 1 }}>
                Etkinlik Detayları
              </Button>
              <Button color="inherit" sx={{ mx: 1 }}>
                Geçmiş Etkinlikler
              </Button>
            </Box>

            {/* SearchBar */}
            <Box sx={{ ml: 2 }}>
              <SearchBar onSearch={onSearch} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
