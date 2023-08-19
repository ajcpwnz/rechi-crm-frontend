import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import Box from '@mui/material/Box';

function Layout() {
  return (
    <>
      <Header />
      <Box sx={{paddingTop: '64px'}}>
        <Box sx={{padding: '10px'}}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

export default Layout;
