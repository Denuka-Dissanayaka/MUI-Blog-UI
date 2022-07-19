import { Box, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import {Facebook, Twitter, Instagram} from '@mui/icons-material';

function Footer() {
    const SocialBox = styled(Box) ({
        display: 'flex',
        gap: 10,
        color:'white',
        justifyContent:'center'
    })

  return (
    <Box sx={{background:'black', height:{md:'200px', xs:'auto'}}}>
      <Stack direction={{xs:'column', md:'row'}} p={7} gap={2}>
        <Box flex={1}>
            <Typography color={'white'} align={'center'}>
                Contact Us
            </Typography>
            <Typography color={'white'} align={'center'}>
                192/1
            </Typography>
            <Typography color={'white'} align={'center'}>
                Hiripitiya, Pannipitiya
            </Typography>
        </Box>
        <Box flex={1}>
            <Typography color={'white'} align={'center'}>
                Data Policy
            </Typography>
            <Typography color={'white'} align={'center'}>
                Cookies
            </Typography>
            <Typography color={'white'} align={'center'}>
                Data Safety
            </Typography>
        </Box>
        <Box flex={1}>
            <Typography color={'white'} align={'center'}>
                Categories
            </Typography>
            <Typography color={'white'} variant='body2' align={'center'}>
                Kids
            </Typography>
            <Typography color={'white'} variant='body2' align={'center'}>
                Women
            </Typography>
            <Typography color={'white'} variant='body2' align={'center'}>
                Men
            </Typography>
        </Box>
        <Box flex={1}>
            <Typography color={'white'}  align={'center'}>
                Follow Us
            </Typography>
            <SocialBox>
            <Facebook/>
            <Instagram/>
            <Twitter/>
        </SocialBox>
        </Box>
      </Stack>
    </Box>
  )
}

export default Footer
