import React from 'react'
import { AppBar, Toolbar} from '@mui/material'
import { DrawerComp } from '../drawer-comp/DrawerComp'
import logo from './logo.svg'

export const Header = () => {
  return (
    <>
      <React.Fragment>
        <AppBar sx={{ background: '#3888FF', boxShadow: 'none' }}>
          <Toolbar>
            {window.innerWidth < 480 && <DrawerComp/>}
            <img src={logo} alt="RECHI.CRM" style={{ width: '152px', height: 'auto' }}/>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </>
  )
}
