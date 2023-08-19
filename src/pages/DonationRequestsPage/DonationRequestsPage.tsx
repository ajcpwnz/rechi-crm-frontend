import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store.ts'
import { selectSubmissions } from '../../redux/requests/sumissionsSlice.ts'
import { getSubmissions } from '../../services/requests.ts'

export const DonationRequestsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getSubmissions('donation')(dispatch)
  }, [dispatch])

  const records = useSelector((state: RootState) => selectSubmissions(state, 'donation'));

  return <div>
    {JSON.stringify(records)}
  </div>
};
