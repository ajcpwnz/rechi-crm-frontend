import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store.ts'
import { selectSubmissions } from '../../redux/requests/sumissionsSlice.ts'
import { getSubmissions } from '../../services/requests.ts'

export const RequestPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getSubmissions('request')(dispatch)
  }, [dispatch])

  const records = useSelector((state: RootState) => selectSubmissions(state, 'request'));

  return <div>
    {JSON.stringify(records)}
  </div>
};
