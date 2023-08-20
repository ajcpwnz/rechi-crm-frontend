// import { ItemCardProps } from './ItemCardProps';
import { styled } from '@mui/system';

export const ItemCard = () => {
  return (
    <CardList>
      <CardItem>
        <StatusInfo>
          <p>№5559</p>
          <StatusRequest>необроблена</StatusRequest>
          <p>19.08</p>
        </StatusInfo>
        <NameInfo>
          <Name>Лариса Петрівна</Name>
          <City>м. Буча</City>
        </NameInfo>
        <SocialInfo>
          <SocialInfoItem>
            Телеграм: <span>380506136936 @tanya2023Q</span>
          </SocialInfoItem>
          <SocialInfoItem>
            instagram: <span>godivnic228</span>
          </SocialInfoItem>
          <SocialInfoItem>
            Склад сім’ї: <span>Людмила, мама, чоловік, син, невістка</span>
          </SocialInfoItem>
        </SocialInfo>
        <TextInfo>
          <p>
            продуктовий набір, ковдри 2 шт, постільна білизна полуторна, рушники
            4 ши, кухон...
          </p>
        </TextInfo>
        <Button>Модерувати</Button>
      </CardItem>
    </CardList>
  );
};

const CardList = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
  listStyle: 'none',
});

const CardItem = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  maxWidth: 360,
  padding: 16,
  border: '1px solid #C4C6D0',
  borderRadius: 8,
});

const StatusInfo = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 14,
});

const StatusRequest = styled('div')({
  padding: '0 8px',
  borderRadius: 8,
  backgroundColor: '#FBD7FC',
  fontSize: 16,
});

const NameInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});
const Name = styled('p')({
  fontSize: 20,
  fontWeight: 500,
  color: '#1B1B1F',
});
const City = styled('p')({
  fontSize: 16,
  color: '#44474F',
});

const SocialInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: '8px 0',

  borderTop: '1px solid #C4C6D0',
  borderBottom: '1px solid #C4C6D0',

  fontSize: 12,
});

const SocialInfoItem = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

const TextInfo = styled('div')({
  fontSize: 16,
  color: '#44474F',
});

const Button = styled('button')({
  width: 233,
  height: 42,
  margin: '0 auto',
  border: 'transparent',
  borderRadius: 4,
  backgroundColor: '#D8E2FF',
  boxShadow:
    '0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
});
