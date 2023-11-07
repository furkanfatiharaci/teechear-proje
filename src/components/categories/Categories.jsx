import React, { useState } from 'react';
import { MenuItem, Select, FormControl } from '@mui/material';

export default function Categories() {
  const [category, setCategory] = useState('');
  const categories = ["Sanat", "Müzik", "Spor", "..."]; 

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <Select
        value={category}
        onChange={handleCategoryChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="">
          <em>Kategori Seçin</em>
        </MenuItem>
        {categories.map((category) => (
          <MenuItem key={category} value={category}>{category}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
