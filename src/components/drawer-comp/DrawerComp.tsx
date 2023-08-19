import React, { useState } from "react";
import {Drawer, List, ListItemButton, ListItemIcon, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

export const DrawerComp = () => {
  const [openDraw, setOpenDraw] = useState(false); 
    return (
        <>
      <React.Fragment>
<Drawer open={openDraw} onClose={() => setOpenDraw(false)}>
  <List>
    <ListItemButton>
<ListItemIcon>
<CloseIcon onClick={()=> setOpenDraw(!openDraw)}/>
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