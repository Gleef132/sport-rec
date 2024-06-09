'use client';
import { createTheme } from '@mui/material';

export const MyTheme = createTheme({
  palette: {
    primary: {
      main: '#06082C'
    },
    secondary: {
      main: '#F1F3F7'
    },
    text: {
      primary: '#9395B8',
      secondary: '#06082C'
    }
  },
  typography: {
    allVariants: {
      color: '#9395B8',
      fontFamily: 'var(--font-inter)'
    }
  },

  breakpoints: {
    values: {
      xs: 320,
      sm: 500,
      md: 900,
      lg: 1024,
      xl: 1192
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '0 16px !important'
        }
      },
      defaultProps: {
        maxWidth: 'xl'
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: '10px',
          height: '40px',
          padding: '10px 24px',
          textTransform: 'none',
          ':hover': {
            boxShadow: 'none'
          },
          ':focus': {
            boxShadow: 'none'
          },
          ':disabled': {
            boxShadow: 'none',
            backgroundColor: '#CCCFDA',
            color: '#9395B8'
          }
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#CCCFDA',
          width: '24px',
          height: '24px',
          borderRadius: '7px'
        }
      }
    }
  }
});
