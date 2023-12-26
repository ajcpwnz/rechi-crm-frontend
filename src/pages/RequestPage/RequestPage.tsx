import { styled } from '@mui/system'
import { useRecoilValue } from 'recoil'
import useAsyncEffect from 'use-async-effect'
import { RequestSubmission, selectSubmissionsByType, useUpdateSubmissions } from '../../state/submissions.ts'
import { getSubmissions } from '../../services/requests.ts'

interface RequestFields {
  help_requirements: string[];
  children_params: string[];
  name: string[];
  female_clothes_season: string[];
  accept_extra_items_2: string[];
  clothes_family_member_params_2: string[];
  instagram_nickname: string[];
  nickname: string[];
  accept_extra_items: string[];
  locality: string[];
  post_details: string[];
  male_clothes_table_sizes: string[];
  nova_post_details: string[];
  pets: string[];
  children_clothes_season: string[];
  male_clothes_season: string[];
  family_members: string[];
  comments: string[];
  female_clothes_table_sizes: string[];
  accept_extra_clothes: string[];
  clothes_family_member_params: string[];
}

const RequestCard = ({ data }: { data: RequestSubmission }) => {
  const fields = JSON.parse(data.fields) as RequestFields;


  if (!fields) {
    return null
  }

  return (
    <CardList>
      <CardItem>
        <StatusInfo>
          <p>№{data.id}</p>
          <p>{fields.help_requirements}</p>
        </StatusInfo>
        <NameInfo>
          <Name>{fields.name}</Name>
          <City>{fields.locality}</City>
        </NameInfo>
        <SocialInfo>
          <SocialInfoItem>
            Телеграм: <span>{fields.nickname}</span>
          </SocialInfoItem>
          <SocialInfoItem>
            instagram: <span>{fields.instagram_nickname}</span>
          </SocialInfoItem>
          <SocialInfoItem>
            Склад сім’ї: <span>{fields.family_members}</span>
          </SocialInfoItem>
        </SocialInfo>
        <TextInfo>
          <p>{fields.accept_extra_items}</p>
        </TextInfo>
        <Button>Модерувати</Button>
      </CardItem>
    </CardList>
  )
}

const CardList = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 16,
})

const CardItem = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 8,
  width: 320,
  padding: 16,
  border: '1px solid #C4C6D0',
  borderRadius: 8,
})

const StatusInfo = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 14,
})

const NameInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
})

const Name = styled('p')({
  fontSize: 20,
  fontWeight: 500,
  color: '#1B1B1F',
})

const City = styled('p')({
  fontSize: 16,
  color: '#44474F',
})

const SocialInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: '8px 0',

  borderTop: '1px solid #C4C6D0',
  borderBottom: '1px solid #C4C6D0',

  fontSize: 12,
})

const SocialInfoItem = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
})

const TextInfo = styled('div')({
  fontSize: 16,
  color: '#44474F',
})

const Button = styled('button')({
  width: 233,
  height: 42,
  margin: 'auto auto 0',
  border: 'transparent',
  borderRadius: 4,
  backgroundColor: '#D8E2FF',
  boxShadow:
    '0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
})

export const RequestPage = () => {
  const updateSubmissions = useUpdateSubmissions()

  useAsyncEffect(async () => {
    const data = await getSubmissions('request')

    updateSubmissions(data)
  }, [updateSubmissions])

  const records = useRecoilValue(selectSubmissionsByType('request'))

  return (
    <CardList>
      {records.order.map((id) => {
        const data = records.records[id] as RequestSubmission;

        return <RequestCard key={id} data={data}/>
      })}
    </CardList>
  )
}
