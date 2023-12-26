import { useCallback, useMemo } from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

export interface Comment {
  id: number,
  text: string,
  Admin: {
    id: number;
    display_name: string;
  }
  createdAt: Date
}


export const __commentsByRequest__ = atom<Record<number, Comment[]>>({
  key: '@rcmf/comments/byRequest',
  default: {}
})

export const useUpdateComments = () => {
  const setComments = useSetRecoilState(__commentsByRequest__)

  return useCallback((requestId: number, comments: Comment[]) => {
    setComments(oldComments => {
      return {
        ...oldComments,
        [requestId]: [...(oldComments[requestId] || []), ...comments ]
      }
    })
  }, [setComments])
}


export const useRequestComments = (requestId: number) => {
  const allComments = useRecoilValue(__commentsByRequest__);

  const comments = allComments[requestId] || [];

  return useMemo(() => {
    const sortedComments = [...comments].sort((a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)))

    const records = Object.entries(sortedComments).reduce<Record<string, Comment>>((obj, [key, value]) => {
      obj[key] = value
      return obj
    }, {});

    return {
      records,
      order: Object.keys(records)
    }
  }, [comments])
}
