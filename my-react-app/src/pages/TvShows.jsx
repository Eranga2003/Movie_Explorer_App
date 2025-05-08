import react from 'react';
import { Box, Typography, Button, ButtonGroup } from '@mui/material';
import { AppBar, Toolbar, InputBase, IconButton, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ListIcon from '@mui/icons-material/List';


const TvShows=()=>{
return(
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        TV Shows
      </Typography>
      <Typography variant="body1">
        Here you can find a list of popular TV shows.
      </Typography>
    </Box>
  );
//           justifyContent: 'center',




}
export default TvShows;