// Location.js
import React, { useState } from 'react';
import { MenuItem, Select, FormControl } from '@mui/material';

export default function Location() {
  const [selectedCity, setSelectedCity] = useState('');
  const cities = ["Adana", "Ankara", "Antalya", "..."]; 

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <Select
        value={selectedCity}
        onChange={handleCityChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="">
          <em>Şehir Seçin</em>
        </MenuItem>
        {cities.map((city) => (
          <MenuItem key={city} value={city}>{city}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}