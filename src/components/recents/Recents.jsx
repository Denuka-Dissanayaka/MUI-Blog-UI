import { Box,Grid } from '@mui/material'
import React from 'react'
import CardImage1 from '../../static/cardImage1.jpg'
import Shoes from '../../static/shoes.jpg'
import Bags from '../../static/bags.jpg'
import KidsFashion from '../../static/kidsfashions.jpg'
import Tshirt from '../../static/tshirt.jpg'
import Watch from '../../static/watch.jpg'
import Card from '../card/Card';
 
function Recents() {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{xs:1, sm:2, md:1}}>
        <Grid item>
          <Card CardImage={CardImage1} name='PERFUMES'/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card CardImage={Tshirt} name='T SHIRT'/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card CardImage={Shoes} name='SHOES'/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card CardImage={Bags} name='BAGS'/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card CardImage={Watch} name='WRIST-WATCHS'/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card CardImage={KidsFashion} name='KIDS FASHION'/>
        </Grid>
        
      </Grid>
    </Box>
  );
}

export default Recents
