import React from 'react'

//Material UI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//Use context theme
import { useThemeContext } from '../../context/ThemeContext';

function ChangeThemeComponent() {

    const { toggleTheme } = useThemeContext();

  return (
    <>
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>
                Cambiar entre Temas
            </Typography>
            
            <Box sx={{ marginBottom: 2 }}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => toggleTheme('light')}
                    sx={{ marginRight: 1 }}
                >
                    Tema Light
                </Button>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => toggleTheme('dark')}
                    sx={{ marginRight: 1 }}
                >
                    Tema Dark
                </Button>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => toggleTheme('custom1')}
                    sx={{ marginRight: 1 }}
                >
                    Tema Personalizado 1
                </Button>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => toggleTheme('custom2')}
                >
                    Tema Personalizado 2
                </Button>
            </Box>
        </Box>
    </>
  )
}

export default ChangeThemeComponent