import React, { useState } from "react";
import {Drawer, List, ListItemButton, ListItemIcon, IconButton, Box} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import { NavList } from "../UI/nav-list/NavList";

export const DrawerComp = () => {
  const [openDraw, setOpenDraw] = useState(false); 

  const toggleBurger = () => {
    setOpenDraw(!openDraw); 
  }

  const handleClick = () => {
    console.log('Button clicked!');
  };

    return (
        <>
      <React.Fragment>
<Drawer open={openDraw} onClose={() => setOpenDraw(false)} >
  <List>
    <ListItemButton>
<ListItemIcon>
<CloseIcon onClick={toggleBurger}/>
<Box
      sx={{ flexGrow: 1, display: 'flex', minHeight: '100%' }}
    >
    <NavList onClick={handleClick}/>
      </Box>
</ListItemIcon>
    </ListItemButton>
  </List>
</Drawer>
{window.innerWidth < 480 && <IconButton onClick={()=> setOpenDraw(!openDraw)}>
  <MenuIcon />
</IconButton>}
        </React.Fragment>    
        </>
    )
}



