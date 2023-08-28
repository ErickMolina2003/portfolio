import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function NavBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position='fixed'
          style={{ background: 'transparent', boxShadow: 'none' }}
        >
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1 }}
              style={{ color: '#red' }}
              className='navbar-title'
            >
              Erick Molina
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
