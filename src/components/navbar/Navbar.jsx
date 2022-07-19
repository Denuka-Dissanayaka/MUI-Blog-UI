import React, { useState } from 'react'
import {AppBar, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from '@mui/material'
import {Facebook, Twitter, Instagram, Menu as MenuIcon} from '@mui/icons-material';

function Navbar() {

    const StyledToolbar = styled(Toolbar) ({
        display: 'flex',
        justifyContent: 'space-between'
    })

    const SocialBox = styled(Box) ({
        display: 'flex',
        gap: 10
    })

    const MenuBox = styled(Box) ({
        display: 'flex',
        gap: 30
    })

    const SearchBox = styled(Box) ({
        display: 'flex',
        gap: 5
    })

    const MenuItems = [
        {
            Id: 1,
            Name: 'Home',
            Link: '/'
        },
        {
            Id: 2,
            Name: 'Products',
            Link: '#'
        },
        {
            Id: 3,
            Name: 'Portfolio',
            Link: '#'
        },
        {
            Id: 4,
            Name: 'Blog',
            Link: '#'
        },
        {
            Id: 5,
            Name: 'Contact Us',
            Link: '#'
        },
    ]

    const [open, setOpen] = useState(false);

    const handleMenu = (e) => {
        setOpen(!open);
    }

  return (
    <AppBar sx={{background: 'black'}} position={'static'}>
      <StyledToolbar>
        <SocialBox>
            <Facebook/>
            <Instagram/>
            <Twitter/>
        </SocialBox>
        <MenuBox sx={{display: {xs: 'none', sm: 'none', md: 'flex'}}}>
            {MenuItems.map((item) => (
                <Typography key={item.Id} sx={{cursor:'pointer'}}>{item.Name}</Typography>
            ))}
        </MenuBox>
        <SearchBox>
            <InputBase placeholder='search' sx={{color: 'white'}}/>
            <MenuIcon sx={{color:'white', display: {xs: 'block', sm: 'block', md: 'none'}}} onClick={handleMenu}/>
        </SearchBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => {setOpen(!open)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{width: 350, height:'90vh'}}>
            {MenuItems.map((item) => (
                <MenuItem key={item.Id} sx={{cursor:'pointer'}} onClick={handleMenu}>{item.Name}</MenuItem>
            ))}
        </Box>
        
      </Menu> 
    </AppBar>
  )
}

export default Navbar
