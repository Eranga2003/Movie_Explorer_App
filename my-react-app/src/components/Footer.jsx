import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
  TextField,
  Button,
  Stack
} from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import android from '/src/assets/android.png'; 
import apple from '/src/assets/apple.png';

const Footer = ({ darkMode }) => {
  const year = new Date().getFullYear();
  
  return (
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
                src={apple}
                alt="App Store" 
                sx={{ 
                  height: 40, 
                  borderRadius: 1,
                  cursor: 'pointer' 
                }}
              />
              <Box 
                component="img" 
                src={android}
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
            © {year} LoonsMovie. All rights reserved.
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
  );
};

export default Footer;