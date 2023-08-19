import { useParams } from 'react-router-dom'

export const SingleRequestPage = () => {
  let { id } = useParams();


  return <div>
    {id}
  </div>
}
