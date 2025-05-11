import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Button,
  IconButton,
  InputBase,
  AppBar,
  Toolbar,
  Stack,
  ButtonGroup,
  Grid,
  Container,
  Link,
  TextField,
  Divider,
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

const ComingSoon = () => {
    const navigate = useNavigate();
      
  const [darkMode, setDarkMode] = useState(true);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
const [searchResults, setSearchResults] = useState([]);
const [isSearching, setIsSearching] = useState(false);

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
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmNmOTY5NTcwNmFmNmZmNmNkY2Q4ODAzODIwZTllMiIsIm5iZiI6MTc0NjcyNDEwMi43LCJzdWIiOiI2ODFjZTUwNmY4ZmNlZDYwNWNiMWM5YWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8V2hzf7IdvfwwDoYPFFaaBVoOt8e1gCKNSA9OvXH670`
            }
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
      }
    };

    fetchMovies();
  }, []);
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

  return (
     <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw',
          background: darkMode
            ? 'radial-gradient(circle at center,rgb(4, 59, 56),rgb(1, 21, 18),rgb(3, 18, 24))'
            : '#f5f5f5',
          color: darkMode ? 'white' : 'black',
        }}
      >
        {/* Complete Navbar - Same as Movies Page */}
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
             <InputBase 
  placeholder="Search movies..." 
  sx={{ color: 'white', flex: 1 }}
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>
              <SearchIcon sx={{ color: 'white' }} />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <IconButton onClick={toggleDarkMode}>
                {darkMode ? <Brightness7Icon sx={{ color: 'white' }} /> : <Brightness4Icon sx={{ color: 'black' }} />}
              </IconButton>
              <IconButton>
                <PersonOutlineIcon sx={{ color: darkMode ? 'white' : 'black' }} />
              </IconButton>
              <Typography
                sx={{
                  color: darkMode ? 'white' : 'black',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  px: 2,
                  py: 1,
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#00c98e',
                    color: darkMode ? 'white' : 'black',
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
                  px: 2,
                  py: 1,
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#00c98e',
                    color: darkMode ? 'white' : 'black',
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
                        navigate('/tvshows'); 
                      }
                      if( label === 'Movies') {
                        navigate('/movies'); 
                      }
                      if( label === 'New, Coming, Leaving') {
                        navigate('/comingsoon'); 
                      }
                      if (label === 'Home') {
          navigate('/'); // ✅ correct route
        }
                      
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
                    '&:hover': {
                      backgroundColor: darkMode ? 'rgb(126, 126, 126)' : '#e0e0e0',
                      color: darkMode ? '#00e6a1' : 'black',
                    },
                  }}
                >
                  {label}
                </Button>
              ))}
            </ButtonGroup>
          </Stack>
        </AppBar>


  {/* Search Results Section */}
<Box sx={{ 
  
  padding: 4,
  display: 'flex',
  flexWrap: 'wrap',
  gap: 5,
  zIndex: 1,
  position: 'relative',
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
      <Typography variant="h5" sx={{ width: '100%', marginBottom: 2, color: '#00e6a1' }}>
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
    <Typography variant="h6" sx={{ width: '100%', color: '#00e6a1' }}>
      No results found for "{searchQuery}"
    </Typography>
  )}
</Box>


    {/* Coming Soon Movies Section */}
        <Box sx={{ padding: 4, marginTop: '100px' }}>
          <Typography variant="h4" sx={{ marginBottom: 4, fontWeight: 'bold', color: '#00e6a1' }}>
            Coming Soon Movies
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
            {movies.map((movie) => (
              <Box
                key={movie.id}
                sx={{
                  width: 240,
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
                        opacity: 1,
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ color: '#00e6a1', fontWeight: 'bold' }}>
                      Coming {new Date(movie.release_date).toLocaleDateString()}
                    </Typography>
                  </Box>
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
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      mt: 1,
                      lineHeight: 1.2,
                      height: 42,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {movie.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: '0.8rem', marginTop: '2px' }}>
                    Release Date: {new Date(movie.release_date).toLocaleDateString()}
                  </Typography>
                </Box>

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
                    onClick={() => alert(`Notify me about: ${movie.title}`)}
                  >
                    Notify Me
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

export default ComingSoon;