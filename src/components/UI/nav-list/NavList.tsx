import Box from '@mui/material/Box'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { ReactComponentElement, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'
import { Icon, SvgIconTypeMap } from '@mui/material'
import { Home } from '@mui/icons-material'


interface MenuItemProps {
  to: string,
  label: string,
  active: boolean,
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string },
}


const Menu = styled(Box)({
  padding: '1rem',
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '12px',
  width: '240px',
  background: 'linear-gradient(180deg, #3888FF 2.81%, #335DB2 100%)',
  margin: '0'
})

const MenuLink = styled(NavLink)<{ active: boolean }>(({ active }) => ({
  display: 'flex',
  padding: '1rem',
  borderRadius: '20px',
  backgroundColor: active ? '#3362B9' : 'transparent',
  color: '#fff',
  textDecoration: 'none',
  '&:hover': {
    background: 'rgba(52, 96, 182, 0.06)',
    boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.10), -2px 10px 22px 0px rgba(0, 0, 0, 0.10), -7px 40px 40px 0px rgba(0, 0, 0, 0.09), -15px 89px 54px 0px rgba(0, 0, 0, 0.05), -27px 159px 64px 0px rgba(0, 0, 0, 0.01), -42px 248px 70px 0px rgba(0, 0, 0, 0.00)'
  },
  'boxShadow': active ? '0px 0px 0px 0px rgba(0, 0, 0, 0.10), -2px 10px 22px 0px rgba(0, 0, 0, 0.10), -7px 40px 40px 0px rgba(0, 0, 0, 0.09), -15px 89px 54px 0px rgba(0, 0, 0, 0.05), -27px 159px 64px 0px rgba(0, 0, 0, 0.01), -42px 248px 70px 0px rgba(0, 0, 0, 0.00)' : '',

}))

const MenuItem = ({ to, label, active, icon: Icon }: MenuItemProps) => {
  return (
    <MenuLink to={to} active={active}>
      <Icon sx={{ marginRight: '1rem' }}/>
      <p>{label}</p>
    </MenuLink>
  )
}

const menuItems = [
  {
    to: 'requests',
    label: 'Заявки',
    iconComponent: Home
  },
  {
    to: 'requests',
    label: 'Заявки',
    iconComponent: Home
  }
]

export const NavList: React.FC = () => {
  return (
    <Menu>
      {menuItems.map((item, idx) => (
        <MenuItem to={item.to} label={item.label} active={idx === 1} icon={item.iconComponent} key={item.to}/>
      ))}
    </Menu>
  )
}


