import React, { useState } from 'react';
import { Box, Typography, Button, ButtonGroup } from '@mui/material';
import { AppBar, Toolbar, InputBase, IconButton, Stack,Container,Grid,Link,TextField,Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ListIcon from '@mui/icons-material/List';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4'; 
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AppleLogo from '/src/assets/apple.png'; 
import Android from '/src/assets/android.png';
import { useNavigate } from 'react-router-dom';
import content from '../assets/content.png'; 
import UserCountAnimation from '../components/Count.jsx'; 
import Topmovie from '../components/Topmovies.jsx';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import  { useEffect } from 'react';
import axios from 'axios';
import LoginPage from '../pages/Login.jsx';

const HomePage = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const theme = useTheme(); // Access the current theme
const [searchQuery, setSearchQuery] = useState('');
const [searchResults, setSearchResults] = useState([]);
const [isSearching, setIsSearching] = useState(false);

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
 useEffect(() => {
  const searchMovies = async () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      setIsSearching(true);
      const response = await axios.get(
        'https://api.themoviedb.org/3/search/movie',
        {
          params: {
            api_key: '6bcf9695706af6ff6cdcd8803820e9e2',
            query: searchQuery,
            language: 'en-US',
            page: 1
          }
        }
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const debounceTimer = setTimeout(() => {
    searchMovies();
  }, 500);

  return () => clearTimeout(debounceTimer);
}, [searchQuery]);

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
        <AppBar position="fixed" sx={{ backgroundColor: darkMode ? 'rgb(3, 18, 24)' : '#ffffff', paddingX: 2 }}>
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
              <InputBase 
  placeholder="Search movies..." 
  sx={{ color: 'white', flex: 1 }}
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>
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
              
<Button
  onClick={() => {
    console.log('login button clicked');
    navigate('/login');
  }}
  sx={{
    color: darkMode ? 'white' : 'black',
    fontWeight: 'bold',
    paddingX: 2,
    paddingY: 1,
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#00c98e',
      color: darkMode ? 'white' : 'black',
    },
  }}
>
  Login
</Button>
  
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
    gap: 4,
    '& .MuiButtonGroup-grouped': {
      border: 'none',
      borderRadius: '10px',
    },
  }}
>
  {['Home','TV Shows', 'Movies', 'New, Coming, Leaving'].map((label, i) => (
    <Button
      key={i}
      onClick={() => {
        if (label === 'TV Shows') {
          navigate('/tvshows'); // ✅ correct route
        }
        if( label === 'Movies') {
          navigate('/movies'); // ✅ correct route
        }
        if( label === 'New, Coming, Leaving') {
          navigate('/comingsoon'); // ✅ correct route
        }
        if (label === 'Home') {
          navigate('/'); // ✅ correct route
        }
        // You can add more conditions here for Movies, etc.
      }}
      sx={{
        textTransform: 'none',
        backgroundColor: darkMode ? 'transparent' : '#1e1e1e',
        fontWeight: 'bold',
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
        <Box sx={{ 
  marginTop: '120px',
  padding: 4,
  display: 'flex',
  flexWrap: 'wrap',
  zIndex: 1, // Add this
  position: 'relative', // Add this
  gap: 5,
   background: darkMode 
    ? 'rgba(3, 18, 24, 0.9)' 
    : 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  mx: 'auto',
  width: '95%',
  boxShadow: darkMode 
    ? '0 8px 32px rgba(0, 0, 0, 0.5)'
    : '0 8px 32px rgba(0, 0, 0, 0.1)'
}}>
  {isSearching && <Typography>Searching...</Typography>}
  
  {!isSearching && searchResults.length > 0 && (
    <>
      <Typography variant="h5" sx={{ width: '100%', marginBottom: 2 }}>
        Search Results for "{searchQuery}"
      </Typography>
      {searchResults.map((movie) => (
        <Box
          key={movie.id}
          sx={{
            width: 180,
            height: 420,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          {/* Use your existing movie card structure */}
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            style={{
              width: '100%',
              height: 270,
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {movie.title}
          </Typography>
          <Typography variant="body2">
            ⭐ {movie.vote_average.toFixed(1)} / 10
          </Typography>
        </Box>
      ))}
    </>
  )}

  {!isSearching && searchResults.length === 0 && searchQuery && (
    <Typography variant="h6" sx={{ width: '100%' }}>
      No results found for "{searchQuery}"
    </Typography>
  )}
</Box>

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

<Box
          sx={{
            position: 'absolute',
            top: '96%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" sx={{ color: darkMode ? 'white' : 'black', fontWeight: 'bold' }}>
           Showing Content From
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 
          ,top: '103%',
          left: '40%',
         
          position: 'absolute',
          
        }}>
<img src={content} alt="Downlod apple app" style={{ height: 50,width: 350 }} />
</Box>
      </Box>
      <Box
        sx={{
          height: '314vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          background: darkMode
            ? 'radial-gradient(circle at center,rgb(4, 59, 56),rgb(1, 21, 18),rgb(3, 18, 24))'
            : '#f5f5f5',
          color: darkMode ? 'white' : 'black',
        }}
        
      >
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 
          ,top: '135%',
          left: '50%',
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}>
<UserCountAnimation />

</Box>
<Topmovie/>{/* Modern Footer */}
        <Box 
          sx={{
            background: darkMode 
              ? 'linear-gradient(to bottom, rgb(3, 18, 24), rgb(1, 21, 18))'
              : 'linear-gradient(to bottom, #f5f5f5, #e0e0e0)',
            color: darkMode ? 'white' : '#333',
            pt: 6,
            pb: 3,
            position: 'relative',
          }}
        >
          {/* Decorative top border */}
          <Box 
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(to right, #00e6a1, #00c98e, #00e6a1)',
            }}
          />
          
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {/* Company Info */}
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <PlayCircleFilledWhiteIcon sx={{ color: '#00e6a1' }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00e6a1' }}>
                    LoonsMovie
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 2, color: darkMode ? '#ccc' : '#555' }}>
                  Your one-stop destination for finding where to stream your favorite movies and TV shows.
                </Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton size="small" sx={{ color: '#00e6a1' }}>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton size="small" sx={{ color: '#00e6a1' }}>
                    <TwitterIcon />
                  </IconButton>
                  <IconButton size="small" sx={{ color: '#00e6a1' }}>
                    <InstagramIcon />
                  </IconButton>
                  <IconButton size="small" sx={{ color: '#00e6a1' }}>
                    <YouTubeIcon />
                  </IconButton>
                </Stack>
              </Grid>
              
              {/* Quick Links */}
              <Grid item xs={6} sm={3} md={2}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Browse
                </Typography>
                <Stack spacing={1}>
                  {['TV Shows', 'Movies', 'New Releases', 'Coming Soon', 'Popular'].map((item) => (
                    <Link 
                      key={item}
                      underline="hover"
                      sx={{ 
                        color: darkMode ? '#ccc' : '#555',
                        '&:hover': { color: '#00e6a1' },
                        cursor: 'pointer',
                        fontSize: '0.9rem'
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </Stack>
              </Grid>
              
              {/* Help */}
              <Grid item xs={6} sm={3} md={2}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Help
                </Typography>
                <Stack spacing={1}>
                  {['About Us', 'FAQ', 'Contact Us', 'Privacy Policy', 'Terms of Use'].map((item) => (
                    <Link 
                      key={item}
                      underline="hover"
                      sx={{ 
                        color: darkMode ? '#ccc' : '#555',
                        '&:hover': { color: '#00e6a1' },
                        cursor: 'pointer',
                        fontSize: '0.9rem'
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </Stack>
              </Grid>
              
              {/* Newsletter */}
              <Grid item xs={12} sm={6} md={5}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Stay Updated
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: darkMode ? '#ccc' : '#555' }}>
                  Subscribe to our newsletter for updates on new releases and streaming options.
                </Typography>
                <Box
                  component="form"
                  sx={{
                    display: 'flex',
                    mb: 2,
                  }}
                >
                  <TextField
                    size="small"
                    placeholder="Your email address"
                    variant="outlined"
                    sx={{
                      flexGrow: 1,
                      mr: 1,
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'white',
                        color: darkMode ? 'white' : 'black',
                        '& fieldset': {
                          borderColor: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00e6a1',
                        },
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#00e6a1',
                      color: 'black',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: '#00c98e',
                      },
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>
                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                  <Box 
                    component="img" 
                    src={AppleLogo}
                    alt="App Store" 
                    sx={{ 
                      height: 40, 
                      borderRadius: 1,
                      cursor: 'pointer' 
                    }}
                  />
                  <Box 
                    component="img" 
                    src={Android}
                    alt="Google Play" 
                    sx={{ 
                      height: 40, 
                      borderRadius: 1,
                      cursor: 'pointer' 
                    }}
                  />
                </Stack>
              </Grid>
            </Grid>
            
            <Divider sx={{ my: 4, borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2" sx={{ color: darkMode ? '#999' : '#777' }}>
                © {new Date().getFullYear()} LoonsMovie. All rights reserved.
              </Typography>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={{ xs: 1, sm: 2 }} 
                sx={{ mt: { xs: 2, sm: 0 } }}
              >
                {['Privacy', 'Terms', 'Cookies', 'Licenses'].map((item) => (
                  <Link 
                    key={item}
                    underline="hover"
                    sx={{ 
                      color: darkMode ? '#999' : '#777',
                      '&:hover': { color: '#00e6a1' },
                      cursor: 'pointer',
                      fontSize: '0.8rem'
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Stack>
            </Box>
          </Container>
        </Box>
        
      </Box>
      
      
    </ThemeProvider>
  );
};

export default HomePage;
