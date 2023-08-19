import React from 'react'
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { DrawerComp } from '../drawer-comp/DrawerComp'

export const Header = () => {
  return (
    <>
      <React.Fragment>
        <AppBar sx={{ background: '#FEFBFF' }}>
          <Toolbar>
            {window.innerWidth < 480 && <DrawerComp/>}

            <span style={{
              color: '#005AC1', fontSize: '24px', fontWeight: 700,
              lineHeight: '40px'
            }}>rechi.crm</span>
            <Tabs value={0} sx={{ marginLeft: 'auto' }}>
              <Tab label={<NotificationsIcon sx={{ fill: '#44474F' }}/>} value={0}/>
            </Tabs>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </>
  )
}
