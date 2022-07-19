import { Box, CardMedia, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import detailImage from '../../static/cardImage1.jpg'
import postImage from '../../static/men.jpg'
import RightBar from '../rightbar/RightBar'
function Details() {
  return (
    <Box>
      <Box sx={{
        backgroundImage: `url(${detailImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '350px'
      }}>
        <Typography align='center' color={'black'} variant='h2' sx={{fontWeight:900, padding:10}}>Clicked Post Title</Typography>
        
      </Box>
      <Container>
            <hr/>
            <Stack direction={{xs:'column', md:'row'}} spacing={{xs:1, sm:2, md:8}} mt={8}>
                <Box flex={3} sx={{padding:'18px 100px 100px 100px'}}>
                    <Typography m={4} align='center' color={'gray'} variant='body1' sx={{fontWeight:900}}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum iusto illo tempore sint placeat atque vel ratione iste, cum, deserunt numquam vitae quia enim, soluta autem! Nemo ut voluptatem minima soluta quaerat totam, vitae, illum quibusdam incidunt cupiditate aliquam ipsum!
                    </Typography>
                    <CardMedia component={'img'} height='300px' image={postImage} />
                    <Typography align='center' variant='h4' mt={2}>wait for it</Typography>
                    <Typography m={4} align='center' color={'gray'} variant='body1' sx={{fontWeight:900}}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum iusto illo tempore sint placeat atque vel ratione iste, cum, deserunt numquam vitae quia enim, soluta autem! Nemo ut voluptatem minima soluta quaerat totam, vitae, illum quibusdam incidunt cupiditate aliquam ipsum!
                    </Typography>
                </Box>
                <Box flex={1}>
                  <RightBar/>
                </Box>
            </Stack>
        </Container>
    </Box>
  )
}

export default Details
