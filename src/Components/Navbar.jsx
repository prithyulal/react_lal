import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography>MY APP</Typography>&nbsp;&nbsp;
            <Button variant='contained' color='success'>
                <Link to={'/'} style={{teaxtDecoration:"none",color:"white"}}>View Data</Link>
                </Button> &nbsp;&nbsp;
            <Button variant='contained' color='error'>
            <Link to={'/add'} style={{teaxtDecoration:"none",color:"white"}}>Add Data</Link>
                </Button>&nbsp;&nbsp;
                <Button variant='contained' color='error'>
            <Link to={'/edit'} style={{teaxtDecoration:"none",color:"white"}}>Edit Data</Link>
                </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
