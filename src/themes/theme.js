import { createTheme } from '@mui/material';

// Definir varios temas personalizados
  const lightTheme = createTheme({
    palette: {
    mode: 'light',
    primary: {
        main: '#1976d2',
    },
    background: {
        default: '#f5f5f5',
    },
    },
  });
  
  const darkTheme = createTheme({
    palette: {
    mode: 'dark',
    primary: {
        main: '#90caf9',
    },
    background: {
        default: '#121212',
    },
    },
  });
  
  const customTheme1 = createTheme({
    palette: {
    primary: {
        main: '#673ab7',
    },
    secondary: {
        main: '#ff5722',
    },
    background: {
        default: '#e0f7fa',
    },
    },
  });
  
  const customTheme2 = createTheme({
    palette: {
      primary: {
        main: '#8bc34a',
      },
      secondary: {
        main: '#cddc39',
      },
      background: {
        default: '#f1f8e9',
      },
    },
  });

export { lightTheme,darkTheme,customTheme1,customTheme2 }