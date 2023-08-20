import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store.ts'
import { selectSubmissions, SubmissionFields } from '../../redux/requests/sumissionsSlice.ts'
import { getSubmissions } from '../../services/requests.ts'

interface DonationRequestFields {
  male_clothes_items: string[];
  telegram_nickname: string[]
  phone_number: string[]
  preferred_time: string[]
  household_items: string[]
  female_clothes_items: string[]
  phone: string[]
  male_clothes_table_sizes: string[]
  children_clothes_items: string[]
  preferred_delivery_date: string[]
  name: string[]
  male_clothes_params: string[]
  children_shoe_sizes: string[]
  timestamp: string[]
  female_clothes_params: string[]
  tech_items: string[]
  nickname: string[]
  item_list: string[]
  household_tech_items: string[]
  comments: string[]
  male_shoe_sizes: string[]
  extra_items: string[]
  height: string[]
  female_clothes_table_sizes: string[]
  item_volume: string[]
  female_shoe_sizes: string[]
  kids_items: string[]
}

const Card = styled('div')({
  border: '1px solid #cbcdd6',
  borderRadius: '10px',
  padding: '1rem'
})

const DonationRequestCard = ({ data }: { data: SubmissionFields }) => {
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


export const DonationRequestsPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getSubmissions('donation')(dispatch)
  }, [dispatch])

  const records = useSelector((state: RootState) => selectSubmissions(state, 'donation'))

  return <div style={{
    display: 'grid',
    gridTemplateRows: 'auto',
    gridTemplateColumns: '1fr',
    gap: '1rem'
  }}>
    {
      records.order.map(id => {
        const record = records.records[id]

        return  <DonationRequestCard data={record} key={id}/>
      })
    }
  </div>
}
