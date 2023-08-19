import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store.ts'
import { selectSubmissions } from '../../redux/requests/sumissionsSlice.ts'
import { getSubmissions } from '../../services/requests.ts'

export const PetDonationRequests = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getSubmissions('pet-donation')(dispatch)
  }, [dispatch])

  const records = useSelector((state: RootState) => selectSubmissions(state, 'pet-donation'));

  return <div>
    {JSON.stringify(records)}
  </div>
};
