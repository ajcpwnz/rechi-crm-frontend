import Box from '@mui/material/Box'
import { ReactNode } from 'react'


interface PageContentProps {
  children: React.ReactNode;
  sideContent?: ReactNode
}
export const PageContent = ({ children, sideContent }: PageContentProps) => {
  return <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 300px' }}>
    <Box sx={{ padding: '1rem' }}>
      {children}
    </Box>
    <Box>
      {sideContent || null}
    </Box>
  </Box>
}
