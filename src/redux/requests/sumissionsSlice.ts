import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface SubmissionFields {
  id: number;
  fields: string;
  createdAt: string;
  type: SubmissionType
}


interface PagedSubmission<G> {
  records: Record<string, G>
  order: string[]
  pagination: {
    page: number,
    totalPages: number,
    size: number
  }
}
type SubmissionsState = Record<SubmissionType,  PagedSubmission<SubmissionFields>>

const initialState: SubmissionsState = {
 request: {
   records: {},
   order: [],
   pagination: {
     page: 0,
     totalPages: 0,
     size: 20
   }
 },
  donation: {
    records: {},
    order: [],
    pagination: {
      page: 0,
      totalPages: 0,
      size: 20
    }
  },
  'pet-donation': {
    records: {},
    order: [],
    pagination: {
      page: 0,
      totalPages: 0,
      size: 20
    }
  }
}

export type SubmissionType = 'donation' | 'pet-donation' | 'request'



interface PagedResponse<G> {
  currentPage: number
  rows: G[],
  totalItems: number
  totalPages: number
}

const submissionsSlice = createSlice({
  name: 'submissions',
  initialState,
  reducers: {
   submissionsRetreived(state, action: PayloadAction<PagedResponse<SubmissionFields> & {type: SubmissionType}>) {
     const newRecords = action.payload.rows.reduce<Record<string, SubmissionFields>>((obj, row) => {
       obj[row.id] = row
       return obj;
     }, {});


     state[action.payload.type].records = {
       ...state[action.payload.type].records, ...newRecords
     };

     state[action.payload.type].order = Object.keys(newRecords);

     state[action.payload.type].pagination.page = action.payload.currentPage;
     state[action.payload.type].pagination.totalPages = action.payload.totalPages;

   }
  }
})

export const { submissionsRetreived } = submissionsSlice.actions;

export const reducer = submissionsSlice.reducer;
