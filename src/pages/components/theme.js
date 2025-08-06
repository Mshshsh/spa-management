import {Box} from '@mui/material'
// theme.js
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#1976d2' },
          secondary: { main: '#dc004e' },
          background: { default: '#f5f5f5', paper: '#ffffff' },
        }
      : {
          primary: { main: '#90caf9' },
          secondary: { main: '#f48fb1' },
          background: { default: '#121212', paper: '#1e1e1e' },
        }),
  },
});

export const DynamicBackground = ({ darkMode }) => {
  const lightGradient = 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)';
  const darkGradient = 'linear-gradient(-45deg, #2c3e50, #4ca1af, #2c3e50, #4ca1af)';

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        background: darkMode ? darkGradient : lightGradient,
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
        '@keyframes gradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        transition: 'background 0.5s ease',
      }}
    />
  );
};