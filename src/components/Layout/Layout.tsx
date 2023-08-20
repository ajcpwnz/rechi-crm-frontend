import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import Box from '@mui/material/Box';
import {RequestFormModeration} from '../../pages/RequestFormModeration/RequestFormModeration';

function Layout() {
  return (
    <>
      <Header />
      <Box sx={{paddingTop: '64px'}}>
        <Box sx={{padding: '10px'}}>
          <Outlet />  
          <RequestFormModeration />
        </Box>
      </Box>
    </>
  );
}

export default Layout;
