import React from 'react';
import {AppBar, Tabs, Tab, Toolbar} from '@mui/material'; 
import NotificationsIcon from '@mui/icons-material/Notifications';

export const Header = () => {
    return (
        <div>
<React.Fragment>
<AppBar sx={{background: "#FEFBFF"}}>
          <Toolbar>
<span style={{color: "#005AC1", fontSize: "24px", fontWeight: 700,
lineHeight: "40px"}}>rechi.crm</span>
<Tabs sx={{marginLeft: "auto"}}>
    <Tab label={<NotificationsIcon sx={{fill: "#44474F"}}/>}/>
</Tabs>
        </Toolbar>
</AppBar>
</React.Fragment>
        </div>
    )
}