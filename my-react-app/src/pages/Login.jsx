import React, { useState } from 'react';
import {
  Box, Button, TextField, Typography, Tabs, Tab, Divider, Stack, Paper,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';

export default function LoginPage() {
  const [tab, setTab] = useState(1); // 0: Sign Up, 1: Log In

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #0f2027, #203a43,rgb(22, 126, 102))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 400,
          width: '100%',
          p: 4,
          borderRadius: 4,
          bgcolor: 'rgba(255, 255, 255, 0.05)',
          color: '#fff',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
        }}
      >
        <Typography variant="h5" align="center" gutterBottom fontWeight="bold">
          Welcome back!
        </Typography>
        <Typography variant="body2" align="center" color="white" mb={3}>
          Login below.
        </Typography>

        {/* Social Login Buttons */}
        <Stack spacing={2} mb={3}>
          <Button
            fullWidth
            startIcon={<FacebookIcon />}
            sx={{
              bgcolor: 'rgb(27, 125, 245)',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 'bold',
              borderRadius: 2,
              py: 1.2,
              boxShadow: '0 4px 10px rgba(59, 89, 152, 0.4)',
              '&:hover': {
                bgcolor: '#334d84',
                boxShadow: '0 6px 12px rgba(59, 89, 152, 0.6)',
              },
            }}
          >
            CONTINUE WITH FACEBOOK
          </Button>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{
              textTransform: 'none',
              bgcolor: '#fff',
              color: '#000',
              fontWeight: 'bold',
              borderRadius: 2,
              py: 1.2,
              borderColor: '#ccc',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                bgcolor: '#f5f5f5',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                borderColor: '#aaa',
              },
            }}
          >
            LOGIN WITH GOOGLE
          </Button>

          <Button
            fullWidth
            startIcon={<AppleIcon />}
            sx={{
              bgcolor: '#000',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 'bold',
              borderRadius: 2,
              py: 1.2,
              boxShadow: '0 4px 10px rgba(0, 9, 4, 0.4)',
              '&:hover': {
                bgcolor: '#222',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.6)',
              },
            }}
          >
            LOGIN WITH APPLE
          </Button>
        </Stack>

        <Typography variant="caption" color="white" align="center" display="block" mb={3}>
          *We’ll send you welcome emails and never post.
        </Typography>

        {/* Tabs */}
        <Tabs
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          variant="fullWidth"
          textColor="white"
          indicatorColor="secondary"
          sx={{
            '& .Mui-selected': { color: 'rgb(164, 250, 17)' },
          }}
        >
          <Tab label="Sign Up" />
          <Tab label="Log In" />
        </Tabs>
        <Divider sx={{ my: 3, bgcolor: 'teal', height: 2 }} />

        {/* Form */}
        <Stack spacing={2} mb={2}>
          <TextField
            variant="standard"
            label="Email"
            fullWidth
            InputLabelProps={{ style: { color: '#bbb' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            variant="standard"
            label="Password"
            type="password"
            fullWidth
            InputLabelProps={{ style: { color: '#bbb' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
        </Stack>

        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: 'rgb(18, 199, 145)',
            color: '#fff',
            borderRadius: '50px',
            textTransform: 'none',
            py: 1,
            fontWeight: 'bold',
            '&:hover': {
              bgcolor: '#00897b',
            },
          }}
        >
          Log In
        </Button>

        <Typography
          variant="body2"
          color="gray"
          align="center"
          mt={2}
          sx={{ cursor: 'pointer', '&:hover': { color: '#fff' } }}
        >
          Forgot Password?
        </Typography>
      </Paper>
    </Box>
  );
}
