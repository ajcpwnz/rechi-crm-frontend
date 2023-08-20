import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom'
import { Comments } from '../../components/Comments.tsx'

export const SingleRequestPage = () => {
  const { id } = useParams();

  if(!id) {
    return null
  }

  return <Box sx={{display: 'flex'}}>
    <div style={{flexGrow: 1}}></div>
    <Comments id={id} />
  </Box>
}
