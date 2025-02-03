import React from 'react'

//Material ui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//Navegacion
import { useNavigate } from 'react-router-dom';

function NavbarIndexComponent({text,url}) {

  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              notepad
            </Typography>
            <Button onClick={ ()=> navigate(`/${url}`) } color="inherit">{text}</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default NavbarIndexComponent