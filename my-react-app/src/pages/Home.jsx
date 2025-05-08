import React, { useState } from 'react';
import { Box, Typography, Button, ButtonGroup } from '@mui/material';
import { AppBar, Toolbar, InputBase, IconButton, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ListIcon from '@mui/icons-material/List';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4'; 
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AppleLogo from '/src/assets/apple.png'; 
import Android from '/src/assets/android.png';

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const theme = useTheme(); // Access the current theme

  // Define dark and light themes
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#121212',
        paper: '#1D1D1D',
      },
      primary: {
        main: '#00e6a1',
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#ffffff',
        paper: '#f5f5f5',
      },
      primary: {
        main: '#00e6a1',
      },
    },
  });

  // Toggle between light and dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          background: darkMode
            ? 'radial-gradient(circle at center,rgb(4, 59, 56),rgb(1, 21, 18),rgb(3, 18, 24))'
            : '#f5f5f5',
          color: darkMode ? 'white' : 'black',
        }}
      >
        <AppBar position="static" sx={{ backgroundColor: darkMode ? 'rgb(3, 18, 24)' : '#ffffff', paddingX: 2 }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PlayCircleFilledWhiteIcon sx={{ color: '#00e6a1' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00e6a1' }}>
                LoonsMovie
              </Typography>
            </Box>

            {/* Search Bar */}
            <Box
              sx={{
                background: darkMode
                  ? 'linear-gradient(to right, #173f3b, #1f3e3d)'
                  : 'linear-gradient(to right, #c1c1c1, #d1d1d1)',
                borderRadius: 2,
                display: 'flex',
                left: '42%',
                position: 'absolute',
                transform: 'translateX(-50%)',
                
                alignItems: 'center',
                paddingX: 2,
                width: '40%',
                height: '70%',
              }}
            >
              <InputBase placeholder="Where to Stream Anything..." sx={{ color: 'white', flex: 1 }} />
              <SearchIcon sx={{ color: 'white' }} />
            </Box>

            {/* Right Side Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap:0.5 }}>
              <IconButton onClick={toggleDarkMode}>
                {darkMode ? (
                  <Brightness7Icon sx={{ color: 'white' }} />
                ) : (
                  <Brightness4Icon sx={{ color: 'black' }} />
                )}
              </IconButton>
              <IconButton>
                <PersonOutlineIcon
                  sx={{
                    color: darkMode ? 'white' : 'black',
                    px: 2,
                    py: 1,
                    borderRadius: '8px',
                    transition: '0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgb(97, 100, 99)',
                      color: 'rgb(255, 255, 255)',
                    },
                  }}
                />
              </IconButton>
              <Typography
                sx={{
                  color: darkMode ? 'white' : 'black',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  px: 2,
                  py: 1,
                  borderRadius: '8px',
                  transition: '0.3s ease',
                  '&:hover': {
                    backgroundColor: '#00c98e',
                    color: darkMode ? 'rgb(255, 255, 255)' : 'black',
                  },
                }}
              >
                Login
              </Typography>
              <Typography
                sx={{
                  color: darkMode ? 'white' : 'black',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: '0.3s ease',
                  px: 2,
                  py: 1,
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#00c98e',
                    color: darkMode ? 'rgb(255, 255, 255)' : 'black',
                  },
                }}
              >
                Sign Up
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#00e6a1',
                  color: 'black',
                  fontWeight: 'bold',
                  borderRadius: 1.5,
                  paddingX: 2,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#00c98e',
                  },
                }}
                startIcon={<ListIcon />}
              >
                Create A List
              </Button>
            </Box>
          </Toolbar>

          {/* Bottom nav links */}
          <Stack direction="row" spacing={4} sx={{ padding: 1, justifyContent: 'center' }}>
          


        

          <ButtonGroup
  disableElevation
  variant="contained"
  sx={{
   
    top: '30%',
    left: '50%',
    
    backgroundColor: 'transparent',
    // left: '20%',
    gap: 4,
    '& .MuiButtonGroup-grouped': {
      border: 'none ',
      borderRadius: '10px',
    },
  }}
>
  {['TV Shows', 'Movies', 'New, Coming, Leaving'].map((label, i) => (
    <Button
      key={i}
      sx={{
        textTransform: 'none',
        
        backgroundColor: darkMode ? 'transparent' : '#1e1e1e',
        fontWeight: 500,
        // fontWeight: 'bold',
        color: 'white',
        border: 'none',
        
        borderRadius: '10px',
        paddingX: 3,
        paddingY: 1,
        boxShadow: darkMode
          ? '0 2px 8px rgba(0,0,0,0.4)'
          : '0 2px 6px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: darkMode ? 'rgb(126, 126, 126)' : '#e0e0e0',
          color: darkMode ? '#00e6a1' : 'black',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        },
      }}
    >
      {label}
    </Button>
  ))}
</ButtonGroup>



  

          </Stack>
        </AppBar>

        {/* Main Content */}
        <Box
          sx={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" sx={{ color: darkMode ? 'white' : 'black', fontWeight: 'bold' }}>
            Your Ultimate Destination <br /> for Movie Lovers
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            top: '54%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          <Typography variant="h7" sx={{ color: darkMode ? 'rgb(165, 162, 162)' : 'black', fontWeight: 'bold' }}>
            Browse, search, and watch TV & Movies from over 300+ <br /> services across many regions
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#00e6a1',
            color: 'black',
            fontWeight: 'bold',
            borderRadius: 6,
            paddingX: 2,
            paddingY: 1,
            position: 'absolute',
            top: '65%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#00c98e',
            },
          }}
        >
          Explore Now
        </Button>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 
          ,top: '71%',
          left: '37%',
          position: 'absolute',
          
        }}>
<img src={AppleLogo} alt="Downlod apple app" style={{ height: 70,width: 200 }} />
</Box>
<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 
          ,top: '71%',
          left: '50%',
          position: 'absolute',
          
        }}>
<img src={Android} alt="Downlod apple app" style={{ height: 69,width: 190 }} />
</Box>
      </Box>
      
    </ThemeProvider>
  );
};

export default HomePage;
