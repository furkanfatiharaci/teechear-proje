import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import SocialMedia from '../socialmedia/SocialMedia';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.dark', color: 'white', p: 6 }} component="footer">
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Açıklama
            </Typography>
            <Typography variant="subtitle1" color="inherit">
              Web sitenizin açıklaması veya misyonu burada yer alabilir.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Kurumsal
            </Typography>
            <Link href="#" color="inherit" underline="none">Hakkımızda</Link><br />
            <Link href="#" color="inherit" underline="none">İletişim</Link><br />
            <Link href="#" color="inherit" underline="none">Kariyer</Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Kategoriler
            </Typography>
            <Link href="#" color="inherit" underline="none">Teknoloji</Link><br />
            <Link href="#" color="inherit" underline="none">Sanat</Link><br />
            <Link href="#" color="inherit" underline="none">Spor</Link>
          </Grid>
          
            <Grid item xs={12} sm={3}>
            <SocialMedia/>
            </Grid>

          </Grid>
        
      </Container>
    </Box>
  );
}

export default Footer;
