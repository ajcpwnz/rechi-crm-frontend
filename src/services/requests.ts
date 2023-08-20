import { Dispatch } from '@reduxjs/toolkit'
import { http } from '../utils/http.ts'
import { submissionRetreived, submissionsRetreived, SubmissionType } from '../redux/requests/sumissionsSlice.ts'

export const getSubmissions = (type: SubmissionType, page= 0, size= 20) => {
  return async (dispatch: Dispatch) => {
    const result = await http.get(`/submissions/list/${type}?page=${page}&size=${size}`);


    const payload = {
      ...result.data,
      type
    };

    dispatch(submissionsRetreived(payload));
  }
}

export const getSubmission = (id: number) => {
  return async (dispatch: Dispatch) => {
    const result = await http.get(`/submissions/details/${id}`);

    dispatch(submissionRetreived(result.data));
  }
}
