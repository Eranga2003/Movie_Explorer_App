import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, ButtonGroup, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';


import { createTheme, ThemeProvider } from '@mui/material/styles';  
// Rest of your existing imports...

const API_KEY = '6bcf9695706af6ff6cdcd8803820e9e2';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Topmovie = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
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

  // Movie Card Component
const MovieCard = ({ movie, darkMode }) => (
  <Grid item xs={6} sm={4} md={3} lg={2.4}>
    <Card
      sx={{
        width: '100%',
        height: 420, // fixed total height
        bgcolor: darkMode ? '#1D1D1D' : '#f5f5f5',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 5,
        },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="img"
        image={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        sx={{
          height: 300,
          objectFit: 'cover',
        }}
      />
      <CardContent
        sx={{
          height: 120, // fixed height to align cards
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 'bold',
            color: darkMode ? 'white' : 'black',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {movie.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: darkMode ? 'gray' : 'text.secondary' }}
        >
          ({new Date(movie.release_date).getFullYear()})
        </Typography>
      </CardContent>

      {/* Hover Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          opacity: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'opacity 0.3s ease-in-out',
          '&:hover': {
            opacity: 1,
          },
        }}
      >
        <Typography variant="h6" sx={{ mb: 1 }}>
          ⭐ {movie.vote_average.toFixed(1)} / 10
        </Typography>
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
          onClick={() =>
            window.open(`https://www.themoviedb.org/movie/${movie.id}`, '_blank')
          }
        >
          Watch Now
        </Button>
      </Box>
    </Card>
  </Grid>
);


  // Fetch Movies
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [topResponse, popularResponse] = await Promise.all([
          fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`),
          fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
        ]);

        const topData = await topResponse.json();
        const popularData = await popularResponse.json();

        setTopMovies(topData.results.slice(0, 10));
        setPopularMovies(popularData.results.slice(0, 10));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  // Rest of your existing code (themes, toggleDarkMode, etc.)...

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {/* Existing AppBar and First Section */}

      {/* Add Movie Sections before the UserCountAnimation */}
      <Box sx={{ 
        mt: 15,
        px: 4,
        py: 6,
        background: darkMode ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.9)'
      }}>
        {/* Top 10 Section */}
        <Typography variant="h4" sx={{ 
            mt  : 14,
          mb: 4,
          color: darkMode ? '#00e6a1' : 'black',
          fontWeight: 'bold'
        }}>
          TOP 10 THIS WEEK
        </Typography>
        <Typography variant="subtitle1" sx={{ 
          mb: 4,
          color: darkMode ? 'white' : 'text.secondary'
        }}>
          The most popular content across every service
        </Typography>
        
        <Grid container spacing={4}>
          {topMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} darkMode={darkMode} />
          ))}
        </Grid>

        {/* Popular Movies Section */}
        <Typography variant="h4" sx={{ 
          mt: 8,
          mb: 4,
          color: darkMode ? '#00e6a1' : 'black',
          fontWeight: 'bold'
        }}>
          POPULAR MOVIES
        </Typography>
        
        <Grid container spacing={4}>
          {popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} darkMode={darkMode} />
          ))}
        </Grid>
      </Box>

      {/* Existing UserCountAnimation Section */}
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
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1,
          top: '135%',
          left: '50%',
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}>
          
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Topmovie;