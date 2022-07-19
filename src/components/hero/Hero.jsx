import { Box, Typography } from '@mui/material'
import React from 'react'
import HeroImage from '../../static/heroimage.jpg'
 
function Hero() {
  return (
    <Box>
      <Typography variant="h3" align="center" sx={{ fontWeight: 900 }}>
        Fashions<b style={{ color: "red" }}>Blog</b>
      </Typography>
      <Typography variant="body2" align="center" sx={{ fontWeight: 100 }}>
        We make you look the better of you!
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundAttachment: 'fixed',
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 600,
          wdth: "100%",
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box sx={{width:{xs:'100%', sm:'50%', md:'40%'}, padding: {xs: 3, sm: 2, md: 20}}}>
          <Box sx={{ background: "white", opacity: "0.8" }}>
            <Typography variant="h6" color="tomato" align="center" pt={8}>
              Trending Styles
            </Typography>
            <Typography variant="h4" align="center">
              Life is Boring without Fashion
            </Typography>
            <Typography variant="body1" align="center" pb={8}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero
