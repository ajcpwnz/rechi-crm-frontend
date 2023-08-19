import React from 'react';
import {AppBar, Tabs, Tab, Toolbar} from '@mui/material'; 
import NotificationsIcon from '@mui/icons-material/Notifications';
import { DrawerComp } from '../DrawerComp/DrawerComp';

export const Header = () => {
    return (
        <>
<React.Fragment>
<AppBar sx={{background: "#FEFBFF"}}>
{/* {window.innerWidth < 480 && <DrawerComp/>} */}
          <Toolbar>
          {window.innerWidth < 480 && <DrawerComp/>}
<span style={{color: "#005AC1", fontSize: "24px", fontWeight: 700,
lineHeight: "40px"}}>rechi.crm</span>
<Tabs sx={{marginLeft: "auto"}}>
    <Tab label={<NotificationsIcon sx={{fill: "#44474F"}}/>}/>
</Tabs>
</Toolbar>   
</AppBar>
</React.Fragment>
        </>
    )
}