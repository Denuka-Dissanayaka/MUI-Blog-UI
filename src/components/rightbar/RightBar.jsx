import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import Image1 from '../../static/image1.jpg'; 
import Image2 from '../../static/image2.jpg'; 
import Image3 from '../../static/image3.jpg'; 
import Image4 from '../../static/image4.jpg'; 
import React from 'react'
import Card from '../card/Card';

function RightBar() {
  return (
    <Box>
        <Typography align='center' bgcolor={'black'} color='white'>Most Popular</Typography>
      <List sx={{ width: "100%", height:'100%', maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar sx={{height: 80, width: 80}} alt="Remy Sharp" src={Image1} />
          </ListItemAvatar>
          <ListItemText
            sx={{paddingLeft: '10px'}}
            secondary={" — I'll be in your neighborhood doing errands this…"}
            />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar sx={{height: 80, width: 80}} alt="Remy Sharp" src={Image2} />
          </ListItemAvatar>
          <ListItemText
            sx={{paddingLeft: '10px'}}
            secondary={" — I'll be in your neighborhood doing errands this…"}
            />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar sx={{height: 80, width: 80}} alt="Remy Sharp" src={Image3} />
          </ListItemAvatar>
          <ListItemText
            sx={{paddingLeft: '10px'}}
            secondary={" — I'll be in your neighborhood doing errands this…"}
            />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar sx={{height: 80, width: 80}} alt="Remy Sharp" src={Image4} />
          </ListItemAvatar>
          <ListItemText
            sx={{paddingLeft: '10px'}}
            secondary={" — I'll be in your neighborhood doing errands this…"}
            />
        </ListItem>
        <Divider variant='inset' component={'li'} />
      </List>
      <Typography align='center' bgcolor={'black'} color='white'>About Us</Typography>
      <Card CardImage={Image4}/>
    </Box>
  );
}

export default RightBar
