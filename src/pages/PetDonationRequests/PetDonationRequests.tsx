import { useRecoilValue } from 'recoil'
import { selectSubmissionsByType, useUpdateSubmissions } from '../../state/submissions.ts'
import useAsyncEffect from 'use-async-effect'
import { getSubmissions } from '../../services/requests.ts'

export const PetDonationRequests = () => {
  const updateSubmissions = useUpdateSubmissions()

  useAsyncEffect(async () => {
    const data = await getSubmissions('pet-donation')

    updateSubmissions(data)
  }, [updateSubmissions])

  const records = useRecoilValue(selectSubmissionsByType('pet-donation'))

  return <div>
    {JSON.stringify(records)}
  </div>
}
