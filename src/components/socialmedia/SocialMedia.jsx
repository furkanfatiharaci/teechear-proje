// SocialMedia.js

import React from 'react';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SocialMedia() {
  return (
    <>
      <IconButton color="inherit" href="https://facebook.com">
        <FacebookIcon />
      </IconButton>
      <IconButton color="inherit" href="https://twitter.com">
        <TwitterIcon />
      </IconButton>
      <IconButton color="inherit" href="https://instagram.com">
        <InstagramIcon />
      </IconButton>
      <IconButton color="inherit" href="https://linkedin.com">
        <LinkedInIcon />
      </IconButton>
    </>
  );
}

export default SocialMedia;
