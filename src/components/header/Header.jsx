import React from 'react';
import Slider from '../slider/Slider';
import Categories from '../categories/Categories';
import Date from '../date/Date';
import Location from '../location/Location';
import Grid from '@mui/material/Grid';


function Header() {
  // Etkinlik fotoğraflarının URL'lerini bir dizi olarak
  const eventImages = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    
  ];

  return (<>

<Grid container spacing={4} alignItems="center" justifyContent='center' justify="center">
      <Grid item xs={6} sm={2} >
        <Categories />
      </Grid>
      <Grid item xs={6} sm={2}>
        <Date />
      </Grid>
      <Grid item xs={6} sm={2}>
        <Location />
      </Grid>
    </Grid>
  <header>
      
     <Slider images={eventImages}/>
     
    </header>
   
  </>
    
  );
}

export default Header;
