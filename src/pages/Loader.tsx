import { Box, Typography } from '@mui/material';
import { Header } from '../components/Header/Header';

export default function Loader() {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h3" style={{ color: 'black' }}>
          ...Loading
        </Typography>
      </Box>
    </>
  );
}