import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import Box from '@mui/material/Box';
import { NavList } from '../UI/nav-list/NavList';

function Layout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header />

      <Box sx={{ paddingTop: '64px' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: '240px 1fr', backgroundColor: '#EFEFEF' }}>
            <NavList />
            <div style={{background: '#fff', height: 'calc(100vh - 64px)', overflowY: 'auto'}}>
              <Outlet />
            </div>
        </Box>
      </Box>
    </>
  );
}

export default Layout;
