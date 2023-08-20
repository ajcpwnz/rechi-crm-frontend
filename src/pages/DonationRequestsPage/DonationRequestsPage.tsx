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


  console.warn('-<<<', fields.extra_items)
  return <Card>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <p>№{data.id}</p>
      <p>{fields.timestamp}</p>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
      <p><b>{fields.name}</b></p>
      <Definition label="Телефон" description={fields.phone_number || fields.phone}/>
      <Definition label="Телеграм" description={fields.telegram_nickname}/>
    </Box>
    <hr/>
    {
      fields.item_volume?.join() === 'до 3 речей'
        ? <Definition label="Речі" description={fields.item_list}/>
        :
        <Box>
          <Definition label="Жіночий одяг" description={fields.female_clothes_items}/>
          <Definition label="Параметри" description={fields.female_clothes_params}/>
          <Definition label="Розміри" description={fields.female_clothes_table_sizes}/>
          <Definition label="Розміри взуття" description={fields.female_shoe_sizes}/>
          <Definition label="Чоловічий одяг" description={fields.male_clothes_items}/>
          <Definition label="Параметри" description={fields.male_clothes_params}/>
          <Definition label="Розміри" description={fields.male_clothes_table_sizes}/>
          <Definition label="Розміри взуття" description={fields.male_shoe_sizes}/>
          <Definition label="Дитячий одяг" description={fields.children_clothes_items}/>
          <Definition label="Дитячий зріст" description={fields.height}/>
          <Definition label="Розміри взуття" description={fields.children_shoe_sizes}/>
          <Definition label="Побутова техніка" description={fields.household_tech_items}/>
          <Definition label="Побутові товари" description={fields.household_items}/>
          <Definition label="Техніка" description={fields.tech_items}/>
          <Definition label="Дитячі товари" description={fields.kids_items}/>
        </Box>
    }
    <hr/>
    <Definition label="Додаткові речі" description={fields.extra_items}/>
    <hr/>
    <Definition label="Бажаний час відправки" description={fields.preferred_delivery_date || fields.preferred_time}/>
    <Definition label="Коментар" description={fields.comments}/>
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
