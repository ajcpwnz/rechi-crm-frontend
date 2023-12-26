import { useCallback } from 'react'
import { atom, selectorFamily, useSetRecoilState } from 'recoil'

export type SubmissionType = 'donation' | 'pet-donation' | 'request'

type SubmissionFields<T extends SubmissionType, G> = {
  id: number;
  fields: string;
  createdAt: string;
  type: T
} & G


interface PagedSubmission<G> {
  records: Record<string, G>
  order: string[]
  pagination: {
    page: number,
    totalPages: number,
    size: number
  }
}

export type DonationSubmission = SubmissionFields<'donation', {}>
export type PetDonationSubmission = SubmissionFields<'pet-donation', {}>
export type RequestSubmission = SubmissionFields<'request', {}>

type PagedSubmissionsByType = {
  donation: PagedSubmission<DonationSubmission>
  'pet-donation': PagedSubmission<PetDonationSubmission>
  request: PagedSubmission<RequestSubmission>
}

interface PagedResponse<G> {
  currentPage: number
  rows: G[],
  totalItems: number
  totalPages: number
}


const initialState: PagedSubmissionsByType = {
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

export const __allSubmissions__ = atom<PagedSubmissionsByType>({
  key: '@rcmf/submissions/allByType',
  default: initialState
})


export const selectSubmissionsByType = selectorFamily({
  key: '@rcmf/submissions/byType',
  get: (type: SubmissionType) => ({ get }) => {
    const submissions = get(__allSubmissions__)

    return submissions[type]
  }
})
export const selectSubmissionById = selectorFamily({
  key: '@rcmf/submissions/byType',
  get: (id?: number) => ({ get }) => {
    if(!id) {
      return undefined;
    }

    const submissions = get(__allSubmissions__)


    // this weirdness is introduced because we store submissions by type, but because every id is unique, this is a valid line;
    return submissions.donation.records[id] || submissions.request.records[id] || submissions['pet-donation'].records[id]
  }
});

export const useUpdateSubmissions = () => {
  const setSubmissions = useSetRecoilState(__allSubmissions__);

  return useCallback((data: PagedResponse<DonationSubmission | PetDonationSubmission | RequestSubmission> & { type: SubmissionType }) => {
    setSubmissions(oldData => {
      const records = data.rows.reduce((obj, rec) => {
        obj[rec.id] = rec;

        return obj;
      }, {...oldData[data.type].records})

      return {
        ...oldData,
        [data.type]: {
          ...oldData[data.type],
          records,
          order: Object.keys(records),
          page: data.currentPage,
          totalPages: data.totalPages
        }
      }
    })
  }, [setSubmissions]);
}


export const useUpdateSubmission = () => {
  const setSubmissions = useSetRecoilState(__allSubmissions__);

  return useCallback((submission: DonationSubmission | PetDonationSubmission | RequestSubmission) => {
    setSubmissions(oldData => {
      const records = {
        ...oldData[submission.type].records,
        [submission.id]: submission
      }

      return {
        ...oldData,
        [submission.type]: {
          ...oldData[submission.type],
          records,
          order: Object.keys(records)
        }
      }
    })
  }, [setSubmissions]);
}
