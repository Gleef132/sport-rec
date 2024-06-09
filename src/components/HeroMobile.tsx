import { Box, Container } from '@mui/material';
import { Card, CardProps } from './Card';

const CARDS: CardProps[] = [
  {
    date: '12 марта, 2024 в 16:03',
    imageSrc: '/images/hero-mobile-card-1.png',
    title:
      'Противостояние В Мире Спортивной Борьбы: Атлеты Превращают Тренировочные Арены в Арены Героев',
    text: 'Спортивная Борьба',
    tags: ['#Борьба', '#Соревнования', '...']
  },
  {
    date: '12 марта, 2024 в 16:03',
    imageSrc: '/images/hero-mobile-card-2.png',
    title:
      'Звездные конькобежки и тренер сборной России уезжают в Казахстан. Серьезные потери нашей команды',
    text: 'Конькобежный спорт',
    tags: ['#Коньки', '#Спортсмены', '...']
  },
  {
    date: '12 марта, 2024 в 16:03',
    imageSrc: '/images/hero-mobile-card-3.png',
    title: 'Илья Бессонов дал интервью для телеканала Россия-1',
    text: 'Спортивная Борьба'
  }
];

const CARDS_WITHOUT_TAGS = CARDS.filter((card) => !card.tags);
const CARDS_WITH_TAGS = CARDS.filter((card) => !!card.tags);

export const HeroMobile = () => {
  return (
    <Box
      sx={{
        display: {
          xs: 'flex',
          sm: 'none'
        },
        flexDirection: 'column',
        gap: '32px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          overflowX: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          width: '100%',
          px: '16px',
          mt: { xs: '68px', md: '90px' }
        }}
      >
        {CARDS_WITH_TAGS.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Box>
      <Container>
        <Box display='flex' gap='16px' flexDirection='column'>
          {CARDS_WITHOUT_TAGS.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
