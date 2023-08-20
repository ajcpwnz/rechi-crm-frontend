import {useState, useEffect} from 'react'; 
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

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      
      <Box sx={{paddingTop: '64px'}}>
        <Box sx={{padding: '10px'}}>
          <Outlet />  
          <div style={{display: window.innerWidth > 480 ? "flex" : "block", gap: "32px"}}>
          <NavList/>
          <Outlet/>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default Layout;
