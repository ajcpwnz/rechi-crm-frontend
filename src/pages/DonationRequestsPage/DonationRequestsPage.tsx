import { styled, Button } from '@mui/material'
import Box from '@mui/material/Box'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Definition } from '../../components/Definition.tsx'
import { PageContent } from '../../components/Layout/PageContent.tsx'
import { RootState } from '../../redux/store.ts'
import { selectSubmissions, SubmissionFields } from '../../redux/requests/sumissionsSlice.ts'
import { getSubmissions } from '../../services/requests.ts'
import { DonationRequestFields } from '../types.ts'

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
      <Definition label="телефон" description={fields.phone_number || fields.phone}/>
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
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <NavLink to={`/admin/donation-request-submission/${data.id}`}>
        <Button>МОДЕРУВАТИ</Button>
      </NavLink>
    </Box>
  </Card>
}


export const DonationRequestsPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getSubmissions('donation')(dispatch)
  }, [dispatch])

  const records = useSelector((state: RootState) => selectSubmissions(state, 'donation'))

  return <PageContent>
    <div style={{
      display: 'grid',
      gridTemplateRows: 'auto',
      gridTemplateColumns: '1fr',
      gap: '1rem'
    }}>
      {
        records.order.map(id => {
          const record = records.records[id]

          return <DonationRequestCard data={record} key={id}/>
        })
      }
    </div>
  </PageContent>
}
