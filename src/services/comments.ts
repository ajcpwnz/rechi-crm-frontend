import { http } from '../utils/http.ts'
import { Comment } from '../state/comments.ts'

export const getComments = async (requestId: number) => {
  const result = await http.get(`/comments/by-request/${requestId}`)

  return result.data.comments
}

export const createComment = async (text: string, requestId: number) => {
  const result = await http.post(`/comments/new`, {
    requestId, text
  })

  return [result.data.comment as Comment]
}
