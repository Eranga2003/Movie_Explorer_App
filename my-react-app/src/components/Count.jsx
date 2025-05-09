import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Grid, keyframes } from '@mui/material';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Custom hook to detect when component is in view
const useInView = (options) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isInView];
};

const CompactCounter = ({ value, label, shouldAnimate }) => {
  const [count, setCount] = useState(0);
  const [showPlus, setShowPlus] = useState(false);

  useEffect(() => {
    if (!shouldAnimate) return;

    let current = 0;
    const target = typeof value === 'string' ? parseInt(value) : value;
    const increment = target / 30;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        setShowPlus(true);
        clearInterval(timer);
      }
      setCount(Math.ceil(current));
    }, 50);

    return () => clearInterval(timer);
  }, [value, shouldAnimate]);

  return (
    <Grid item xs={4}>
      <Box sx={{ textAlign: 'center', px: 2 }}>
        <Typography variant="h3" sx={{
          fontWeight: 700,
          color: 'primary.main',
          fontSize: '2.5rem',
          lineHeight: 1.2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline'
        }}>
          {typeof value === 'string' ? value : count.toLocaleString()}
          {showPlus && (
            <Box component="span" sx={{
              fontSize: '1.2rem',
              color: 'success.main',
              ml: 0.5,
              animation: `${fadeIn} 0.5s forwards`
            }}>
              +
            </Box>
          )}
        </Typography>
        <Typography variant="subtitle2" sx={{
          color: 'text.secondary',
          fontSize: '0.9rem',
          mt: 1,
          fontWeight: 500
        }}>
          {label}
        </Typography>
      </Box>
    </Grid>
  );
};

const CountersSection = () => {
  const [containerRef, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <Box ref={containerRef} sx={{ 
      py: 4, 
      px: 2,
      maxWidth: 800,
      margin: '0 auto',
      border: 1,
      borderColor: 'divider',
      borderRadius: 4,
      backgroundColor: 'background.paper'
    }}>
      <Grid container spacing={2} justifyContent="center">
        <CompactCounter shouldAnimate={isInView} value={210} label="Total Users" />
        <CompactCounter shouldAnimate={isInView} value="15k" label="Total Downloads" />
        <CompactCounter shouldAnimate={isInView} value={110} label="Total Movies" />
      </Grid>
    </Box>
  );
};

export default CountersSection;