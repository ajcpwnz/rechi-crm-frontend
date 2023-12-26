import { useParams } from 'react-router-dom'

export const useId = (): [string, number] => {
  const { id } = useParams()

  return [`${id}`, id ? Number(id) : -1]
}
