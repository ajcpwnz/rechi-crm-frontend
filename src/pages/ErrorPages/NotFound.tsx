import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';

export default function NotFound() {
  return (
    <>
     <Header/>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h1" style={{ color: 'black' }}>
          404
        </Typography>
        <Typography variant="h6" style={{ color: 'black' }}>
          The page you’re looking for doesn’t exist.
        </Typography>
        <Button style={{ marginTop: '10px' }} component={Link} to="/admin" variant="contained">To main Page</Button>
      </Box>
    </>
  );
}
