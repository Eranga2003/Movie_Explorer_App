import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Button,
  ButtonGroup,
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Stack,
  Container,
  Grid,
  Link,
  Divider,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ListIcon from '@mui/icons-material/List';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import AppleLogo from '/src/assets/apple.png';
import Android from '/src/assets/android.png';
import { useNavigate } from 'react-router-dom';

const TvShows = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const [shows, setShows] = useState([]);

  const theme = useTheme();

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmNmOTY5NTcwNmFmNmZmNmNkY2Q4ODAzODIwZTllMiIsIm5iZiI6MTc0NjcyNDEwMi43LCJzdWIiOiI2ODFjZTUwNmY4ZmNlZDYwNWNiMWM5YWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8V2hzf7IdvfwwDoYPFFaaBVoOt8e1gCKNSA9OvXH670`
            }
          }
        );
        setShows(response.data.results);
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      }
    };

    fetchTVShows();
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          background: darkMode
            ? 'radial-gradient(circle at center,rgb(4, 59, 56),rgb(1, 21, 18),rgb(3, 18, 24))'
            : '#f5f5f5',
          color: darkMode ? 'white' : 'black',
        }}
      >
        {/* AppBar Section */}
        <AppBar position="fixed" sx={{ backgroundColor: darkMode ? 'rgb(3, 18, 24)' : '#ffffff', paddingX: 2 }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PlayCircleFilledWhiteIcon sx={{ color: '#00e6a1' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00e6a1' }}>
                LoonsMovie
              </Typography>
            </Box>

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

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
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

          {/* Navigation Tabs */}
          <Stack direction="row" spacing={4} sx={{ padding: 1, justifyContent: 'center' }}>
            <ButtonGroup
              disableElevation
              variant="contained"
              sx={{
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

        {/* Popular TV Shows Section */}
        <Box sx={{ padding: 4, 
          margin:'92px',
        }}>
          <Typography variant="h5" sx={{ marginBottom: 4, fontWeight: 'bold', color: '#00e6a1' }}>
            Popular TV Shows
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 5}}>
            {shows.map((show) => (
              <Box 
                key={show.id} 
                sx={{ 
                  width: 180, 
                  display: 'flex', 
                  flexDirection: 'column',
                  height: 420, // Set fixed height for all cards
                  justifyContent: 'space-between', // Distribute content evenly
                  position: 'relative',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: 270,
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      borderRadius: '8px',
                      '&:hover': {
                        opacity: 1
                      },
                      zIndex: 1
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#00e6a1',
                        fontWeight: 'bold',
                        textAlign: 'center'
                      }}
                    >
                      Watch Now
                    </Typography>
                  </Box>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${show.poster_path}`}
                    alt={show.name}
                    style={{ 
                      width: '100%', 
                      borderRadius: '8px',
                      height: 270, // Fixed height for all images
                      objectFit: 'cover'
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: darkMode ? 'white' : 'black',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      mt: 1,
                      lineHeight: 1.2,
                      height: 42, // Fixed height for title (approximately 2 lines)
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}
                  >
                    {show.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ 
                      color: darkMode ? '#ccc' : '#444', 
                      fontSize: '0.8rem', 
                      marginTop: '2px' 
                    }}
                  >
                    ⭐ {show.vote_average.toFixed(1)} / 10
                  </Typography>
                </Box>
                
                {/* Bottom Button - Always at bottom */}
                <Box sx={{ mt: 'auto' }}>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      color: '#00e6a1',
                      borderColor: '#00e6a1',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: '#00e6a1',
                        color: 'black',
                      },
                    }}
                    onClick={() => alert(`Show Trailer for: ${show.name}`)}
                  >
                    See Trailer
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        
        {/* Modern Footer */}
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

export default TvShows;