import { AppBar, Toolbar, Typography,Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='button' sx={{ flexGrow: 1}} align='left'>BLOG APP</Typography>
                <Button variant='text'><Link to='/home'>Home</Link></Button>
                <Button variant='text'><Link to='/add'>Add</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar