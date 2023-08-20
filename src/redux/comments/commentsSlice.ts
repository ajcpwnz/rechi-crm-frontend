import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../redux/store.ts'

export interface Comment {
  id: number,
  text: string,
  Admin: {
    id: number;
    display_name: string;
  }
  createdAt: Date
}

type CommentsState = Record<number, Comment[]>

const initialState: CommentsState = {}

export interface ListCommentsPayload {
  requestId: number,
  comments: Comment[]
}

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentsRetreived: (state, action: PayloadAction<ListCommentsPayload>) => {
      state[action.payload.requestId] = [...(state[action.payload.requestId] || []), ...action.payload.comments]
    }
  }
})

export const { commentsRetreived } = commentsSlice.actions

export const reducer = commentsSlice.reducer

export const selectRequestComments = (state: RootState, id: number) => {
  const comments = state.comments[id]

  if (comments) {
    const sortedComments = [...comments].sort((a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)))

    const records = Object.entries(sortedComments).reduce<Record<string, Comment>>((obj, [key, value]) => {
      obj[key] = value
      return obj
    }, {});

    return {
      records,
      order: Object.keys(records)
    }
  }
}
