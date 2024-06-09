import { Box, List, ListItem, Typography } from '@mui/material';
import { AllSvg, AwardSvg, CertificateSvg, MiniLogoSvg, VideoSvg } from './svgr';

interface FilterType {
  type: string;
  icon: React.ReactElement;
}

const FILTERTYPES: FilterType[] = [
  { type: 'Все', icon: <AllSvg /> },
  { type: 'Результаты соревнований', icon: <CertificateSvg /> },
  { type: 'Видео', icon: <VideoSvg /> },
  { type: 'Достижения', icon: <AwardSvg /> }
];

export const TapeFilter = () => {
  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        gap: { xs: '16px', md: '24px' },
        width: '100%',
        maxWidth: 371,
        flexShrink: 1.5
      }}
    >
      <Box
        sx={{
          bgcolor: '#fff',
          p: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '16px', md: '24px' },
          width: '100%',
          borderRadius: '20px',
          height: 'fit-content'
        }}
      >
        <Typography
          variant='h2'
          sx={{
            fontWeight: 600,
            color: 'text.secondary',
            fontSize: 20,
            lineHeight: '26px',
            letterSpacing: '-0.7px'
          }}
        >
          Фильтр ленты
        </Typography>
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            width: '100%',
            p: '0 !important'
          }}
        >
          {FILTERTYPES.map((filter, index) => (
            <ListItem
              sx={[
                {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  bgcolor: index === 0 ? '#F1F3F7' : 'transparent',
                  p: '10px',
                  width: '100%',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                },
                { '&:hover': { bgcolor: '#F1F3F7' } }
              ]}
              key={filter.type}
            >
              {filter.icon}
              <Typography
                sx={{
                  fontWeight: '600',
                  color: index === 0 ? 'text.secondary' : 'text.primary',
                  lineHeight: '20px',
                  letterSpacing: '-0.5px'
                }}
              >
                {filter.type}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ position: 'relative' }}>
        <Box
          component={'img'}
          src='./images/tape-filter-card-img.png'
          sx={{
            borderRadius: '20px',
            borderBottomLeftRadius: '22px',
            borderBottomRightRadius: '22px',
            width: '100%',
            height: 'auto'
          }}
          alt='cycling'
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            zIndex: 1
          }}
        >
          <Box display={'flex'}>
            <MiniLogoSvg />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '20px',
                fontWeight: '600',
                color: 'text.secondary',
                lineHeight: '26px',
                letterSpacing: '-0.7px',
                p: '3px 8px',
                bgcolor: '#FAFAFB'
              }}
            >
              Велоспорт
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '20px',
                fontWeight: '600',
                color: '#fff',
                lineHeight: '26px',
                letterSpacing: '-0.7px',
                p: '3px 8px',
                bgcolor: '#9395B8'
              }}
            >
              Москва{' '}
              <Box
                component={'span'}
                sx={{
                  opacity: 0.5
                }}
              >
                2024
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              bgcolor: '#fff',
              p: '13px 0 5px 32px'
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                color: 'text.secondary',
                fontSize: '30px',
                lineHeight: '32px',
                letterSpacing: '-1%'
              }}
            >
              Тур Альп-2024
              <br />
              Этап 3
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
