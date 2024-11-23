import React, { createContext, useState, useContext, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme , customTheme1 ,customTheme2 } from '../themes/theme';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = (valueTheme) => {
    setCurrentTheme(() => (
      valueTheme === 'ligth' ? lightTheme : 
      valueTheme === 'dark' ? darkTheme :
      valueTheme === 'custom1' ? customTheme1 :
      valueTheme === 'custom2' ? customTheme2 : lightTheme
    ));
  };

  const value = useMemo(() => ({ currentTheme, toggleTheme }), [currentTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={currentTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
