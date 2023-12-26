import { styled } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { FormEvent, useCallback, useState } from 'react'
import { useRecoilValue } from 'recoil'
import useAsyncEffect from 'use-async-effect'
import { useRequestComments, useUpdateComments } from '../state/comments.ts'
import { __authUser__ } from '../state/auth.ts'
import { a18n } from '../a18n'
import { createComment, getComments } from '../services/comments.ts'
import Box from '@mui/material/Box'


interface CommentsProps {
  id: number;
}


const CommentAuthor = styled('span')({
  fontSize: '12px',
  color: '#777'
})

const CommentText = styled('p')({
  fontSize: '16px',
  lineHeight: '1',
  background: '#fff',
  padding: '.5rem',
  marginTop: '.25rem',
  borderRadius: '4px'
})

interface CommentProps {
  text: string,
  author: string,
  createdAt: Date,
  local: boolean
}


const Comment = ({ text, author, createdAt, local }: CommentProps) => {
  return <Box sx={{ display: 'flex', justifyContent: local ? 'flex-end' : 'flex-start' }}>
    <Box sx={{
      minWidth: '70%',
      maxWidth: '90%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: local ? 'flex-end' : 'flex-start',
      my: '.25rem'
    }}>
      {author ? <CommentAuthor>{author} · {createdAt.toLocaleString()}</CommentAuthor> : null}
      <CommentText sx={{
        backgroundColor: local ? 'rgb(0, 90, 193)' : '#dfdfdf',
        color: local ? '#fff' : '#333'
      }}>{text}</CommentText>
    </Box>
  </Box>
}

export const Comments = ({ id }: CommentsProps) => {
  const updateComments = useUpdateComments()

  useAsyncEffect(async () => {
    const comments = await getComments(Number(id))

    updateComments(id, comments)
  }, [id, updateComments])

  const comments = useRequestComments(id)

  const user = useRecoilValue(__authUser__)

  const [commentText, setCommentText] = useState('')

  const handleCommentSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await createComment(commentText, Number(id))
    updateComments(id, result)
    setCommentText('')
  }, [commentText, updateComments])

  if (!comments) {
    return null
  }

  const { order, records } = comments

  return <Box sx={{ width: '300px', height: 'calc(100vh - 64px)', overflowY: 'auto', backgroundColor: '#EFEFEF' }}>
    <form onSubmit={handleCommentSubmit}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: '1rem' }}>
        <TextField
          sx={{ flexGrow: 1, mr: '.5rem' }}
          margin="none"
          fullWidth
          id="comment"
          placeholder={a18n.request.comment}
          name="comment"
          value={commentText}
          size="small"
          onChange={e => setCommentText(e.target.value)}
        />
        <Button variant="text" sx={{ lineHeight: '28px' }} type="submit">{a18n.request.saveComment}</Button>
      </Box>
    </form>
    <Box>
      {order?.map(commentId => {
        const comment = records[commentId]

        return <Comment key={commentId} text={comment.text} author={comment?.Admin?.display_name} local={comment.Admin?.id === user.id} createdAt={new Date(comment.createdAt)}/>
      })}
    </Box>
  </Box>
}
