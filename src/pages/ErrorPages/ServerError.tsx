import { Box, Typography } from '@mui/material';

export default function ServerError() {
  return (
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
        500 Server Error
      </Typography>
      <Typography variant="h6" style={{ color: 'black' }}>
        Oops, something went wrong
      </Typography>
      <Typography variant="h6" style={{ color: 'black' }}>
        Try to refresh this page or feel free to contact us if the problem persists
      </Typography>
    </Box>
  );
}