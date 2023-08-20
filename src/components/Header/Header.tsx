import React from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material'
import { DrawerComp } from '../drawer-comp/DrawerComp'

export const Header = () => {
  return (
    <>
      <React.Fragment>
        <AppBar sx={{ background: '#3888FF' }}>
          <Toolbar>
            {window.innerWidth < 480 && <DrawerComp/>}
            <Typography style={{
              color: '#FFF', fontSize: '24px', fontWeight: 700,
              lineHeight: '40px'
            }}>rechi.crm</Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </>
  )
}
