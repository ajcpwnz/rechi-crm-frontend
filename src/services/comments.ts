import { Dispatch } from '@reduxjs/toolkit'
import { commentsRetreived, Comment, ListCommentsPayload } from '../redux/comments/commentsSlice.ts'
import { http } from '../utils/http.ts'

export const getComments = (requestId: number) => {
  return async (dispatch: Dispatch) => {
    const result = await http.get(`/comments/by-request/${requestId}`);

    const payload = {
      requestId,
      comments: result.data.comments
    };


    dispatch(commentsRetreived(payload));
  }
}

export const createComment = (text: string, requestId: number) => {
  return async (dispatch: Dispatch) => {
    const result = await http.post(`/comments/new`, {
      requestId, text
    });


    const payload: ListCommentsPayload = {
      requestId,
      comments: [result.data.comment as Comment]
    };


    dispatch(commentsRetreived(payload));
  }
}
