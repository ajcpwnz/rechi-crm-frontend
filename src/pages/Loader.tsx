import { Box } from '@mui/material'
import { styled } from '@mui/system'
import { Header } from '../components/Header/Header'
import icon from './favorite.svg'

const HeartIcon = styled('img')({
  animation: 'pulse 2s linear infinite'
})

export default function Loader({ show }: { show: boolean }) {
  return (
    <>
      <Header/>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
          position: 'absolute',
          zIndex: 9999999,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'linear-gradient(180deg, #3888FF 2.81%, #335DB2 100%)',
          opacity: show ? 1 : 0,
          pointerEvents: show ? 'all' : 'none',
          transition: 'opacity 1s ease'
        }}
      >
        <HeartIcon src={icon}/>
      </Box>
    </>
  )
}
