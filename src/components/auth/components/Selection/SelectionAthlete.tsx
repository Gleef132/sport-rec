import {
  SearchSvg,
  SportLogo1Svg,
  SportLogo2Svg,
  SportLogo3Svg,
  SportLogo4Svg,
  SportLogo5Svg,
  SportLogo6Svg,
  SportLogo7Svg,
  SportLogo8Svg
} from '@/components/svgr';

import { Input } from '@/components/ui';
import { Box, Button, Checkbox, Typography } from '@mui/material';

interface AthleteType {
  name: string;
  imgSrc: number;
  sport: string;
}

interface SportOrganizationType {
  name: string;
  logo: React.ReactNode;
}

const ATHLETES: AthleteType[] = [
  {
    name: 'Александр Антонов',
    imgSrc: 1,
    sport: 'Греко-римская борьба'
  },
  {
    name: 'Андрей Козлов',
    imgSrc: 2,
    sport: 'Греко-римская борьба'
  },
  {
    name: 'Дмитрий Пономарев',
    imgSrc: 2,
    sport: 'Греко-римская борьба'
  },
  {
    name: 'Алексей Бессонов ',
    imgSrc: 1,
    sport: 'Греко-римская борьба'
  },
  {
    name: 'Константин Ковалевский',
    imgSrc: 1,
    sport: 'Греко-римская борьба'
  },
  {
    name: 'Дмитрий Пономарев',
    imgSrc: 3,
    sport: 'Греко-римская борьба'
  },
  {
    name: 'Андрей Козлов',
    imgSrc: 4,
    sport: 'Греко-римская борьба'
  },
  {
    name: 'Дмитрий Замятин',
    imgSrc: 5,
    sport: 'Греко-римская борьба'
  },
  {
    name: 'Константин Ковалевский',
    imgSrc: 1,
    sport: 'Греко-римская борьба'
  },
  {
    name: 'Дмитрий Пономарев',
    imgSrc: 1,
    sport: 'Греко-римская борьба'
  }
];

const SPORT_ORGANIZATIONS: SportOrganizationType[] = [
  {
    name: 'Всероссийское физкультурно-спортивное общество «Динамо» (ВФСО «Динамо»)',
    logo: <SportLogo1Svg />
  },
  {
    name: 'Ассоциация зимних олимпийских видов спорта (АЗОВС)',
    logo: <SportLogo2Svg />
  },
  {
    name: 'АНО "Столичный центр развития гандбола", МГК "ЦСКА" Москва',
    logo: <SportLogo3Svg />
  },
  {
    name: 'Пермская краевая общественная организация "Гандбольный клуб Пермские медведи"',
    logo: <SportLogo4Svg />
  },
  {
    name: 'Общественная организация Ставропольский городской гандбольный клуб «Виктор»',
    logo: <SportLogo5Svg />
  },
  {
    name: 'Автономная некоммерческая организация "Гандбольный клуб "Зенит"',
    logo: <SportLogo6Svg />
  },
  {
    name: 'Автономная некоммерческая организация "Гандбольный клуб СКИФ"',
    logo: <SportLogo7Svg />
  },
  {
    name: 'Гандбольный союз "Ростов-Дон"',
    logo: <SportLogo8Svg />
  }
];

interface SelectionAthleteProps {
  stage: number;
}

// Я бы хотел сделать свой CheckBox но времени не хватало, поэтому пришлось взять с MUI

export const SelectionAthlete: React.FC<SelectionAthleteProps> = ({ stage }) => {
  const CONTENT: AthleteType[] | SportOrganizationType[] =
    stage === 2 ? ATHLETES : SPORT_ORGANIZATIONS;

  return (
    <Box
      sx={{
        width: '100%',
        maxHeight: '420px',
        height: '100%',
        overflow: 'auto',
        '::-webkit-scrollbar': { display: 'none' }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Input placeholder='Поиск' icon={<SearchSvg />} autoComplete='off' ref={null} />{' '}
        <Button
          variant='contained'
          sx={{
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '-0.5px'
          }}
        >
          Найти
        </Button>
      </Box>
      <Box
        sx={{
          display: 'grid',
          mt: '24px',
          gap: { xs: '16px', sm: '20px', md: '20px 39px' },
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }
        }}
      >
        {CONTENT.map((item, index) => {
          const isAtlete = 'sport' in item;
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                maxWidth: { xs: '100%', sm: '332px' },
                width: '100%',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {isAtlete ? (
                  <Box
                    component={'img'}
                    src={`/images/athlete-${item.imgSrc}.png`}
                    alt={item.name}
                    sx={{
                      width: '60px',
                      height: '60px'
                    }}
                  />
                ) : (
                  <Box>{item.logo}</Box>
                )}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Typography
                    sx={{
                      fontWeight: '600',
                      fontSize: '14px',
                      lineHeight: '20px',
                      letterSpacing: '-0.5px',
                      color: 'text.secondary',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      WebkitBoxOrient: 'vertical'
                    }}
                  >
                    {item.name}
                  </Typography>
                  {isAtlete && (
                    <Typography
                      sx={{
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '-0.5px',
                        color: '#7B7EA5'
                      }}
                    >
                      {(item as AthleteType).sport}
                    </Typography>
                  )}
                </Box>
              </Box>
              <Checkbox />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
