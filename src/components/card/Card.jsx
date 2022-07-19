import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

function Card({CardImage, name}) {
  return (
    <Box>
      <Link to='/details' style={{textDecoration : "none"}}>
      <CardMedia
        component="img"
        height="100%"
        image={CardImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="body1"
          align="center"
          component="div"
          color={"tomato"}
        >
          {name}
        </Typography>
        <Typography gutterBottom variant="h5" align="center" component="div" color={'black'}>
          Wearing this will make everyone love you
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          align="center"
          component="div"
          color="text.secondary"
        >
          It's Women love
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          quae minima necessitatibus ullam velit similique molestias magni odit.
        </Typography>
      </CardContent>
      </Link>
    </Box>
  );
}

export default Card
