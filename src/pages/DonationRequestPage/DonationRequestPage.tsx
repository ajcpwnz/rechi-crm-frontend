import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import { useRecoilValue } from 'recoil'
import { useId } from '../../hooks/useId.ts'
import useAsyncEffect from 'use-async-effect'
import { DonationSubmission, selectSubmissionById, useUpdateSubmission } from '../../state/submissions.ts'
import { PageContent } from '../../components/Layout/PageContent.tsx'
import { getSubmission } from '../../services/requests.ts'
import { DonationRequestFields } from '../types.ts'

const Card = styled('div')({
  border: '1px solid #cbcdd6',
  borderRadius: '10px',
  padding: '1rem'
})

const DonationRequestForm = ({ data }: { data: DonationSubmission }) => {
  const fields = JSON.parse(data.fields) as DonationRequestFields
  if (!fields) {
    return null
  }

  return <Card>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <p>№{data.id}</p>
      <p>{fields.timestamp}</p>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
      <p><b>{fields.name}</b></p>
      <p>телефон: {fields.phone_number || fields.phone[0] || '-'}</p>
      <p>телеграм: {fields.telegram_nickname || '-'}</p>
    </Box>
    {
      fields.item_volume?.join() === 'до 3 речей'
        ? <Box>
          <p><b>Речі</b></p>
          <p>{fields.item_list}</p>
        </Box>
        :
        <Box>
          <p><b>Жіночі речі</b></p>
          <p>
            {fields.female_clothes_items}
          </p>
          <p>{fields.female_clothes_params}</p>
          <p>{fields.female_clothes_table_sizes}</p>
          <p>{fields.female_shoe_sizes}</p>
          <hr/>
          <p><b>Чоловічі речі</b></p>
          <p>
            {fields.male_clothes_items}
          </p>
          <p>{fields.male_clothes_params}</p>
          <p>{fields.male_clothes_table_sizes}</p>
          <p>{fields.male_shoe_sizes}</p>
          <hr/>
          <p><b>Дитячі речі</b></p>
          <p>
            {fields.children_clothes_items}
          </p>
          <p>Зріст: {fields.height}</p>
          <p>{fields.children_shoe_sizes}</p>
          <hr/>
          <p><b>Побутова техніка</b></p>
          <p>{fields.household_tech_items}</p>
          <p><b>Побутові товари</b></p>
          <p>{fields.household_items}</p>
          <hr/>
          <p><b>Техніка</b></p>
          <p>{fields.tech_items}</p>
          <hr/>
          <p><b>Дитячі товари</b></p>
          <p>{fields.kids_items}</p>
        </Box>

    }
    <hr/>
    <p><b>Додаткові речі</b></p>
    <p>{fields.extra_items}</p>
    <hr/>
    <Box>
      <p><b>Бажаний час відправки</b></p>
      <p>{fields.preferred_delivery_date || fields.preferred_time}</p>
    </Box>
    <Box>
      <p><b>Коментар:</b></p>
      <p>{fields.comments}</p>
    </Box>
  </Card>
}


export const DonationRequestPage = () => {
  const [_, id] = useId();

  const updateSubmission = useUpdateSubmission();


  useAsyncEffect(async () => {
    const data = await getSubmission(id);

    updateSubmission(data);
  }, [updateSubmission])

  const record = useRecoilValue(selectSubmissionById(id))

  return record ? <PageContent><DonationRequestForm data={record} key={id}/></PageContent> : null

}
