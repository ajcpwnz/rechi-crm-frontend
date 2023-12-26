import { SubmissionType } from '../state/submissions.ts'
import { http } from '../utils/http.ts'

export const getSubmissions = async (type: SubmissionType, page = 0, size = 20) => {
  const result = await http.get(`/submissions/list/${type}?page=${page}&size=${size}`)

  return {
    ...result.data,
    type
  }
}

export const getSubmission = async (id: number) => {
  const result = await http.get(`/submissions/details/${id}`)

  return result.data
}
