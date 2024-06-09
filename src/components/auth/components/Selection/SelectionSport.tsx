import React from 'react';

import { Box } from '@mui/material';

const SPORTS = [
  'Велоспорт',
  'Гандбол',
  'Конькобежный спорт',
  'Самбо',
  'Спортивная борьба',
  'Тяжелая атлетика'
];

export const SelectionSport = () => {
  const [sportActives, setSportActives] = React.useState<boolean[]>(SPORTS.map(() => false));

  return (
    <Box
      display='grid'
      sx={{
        gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        gap: { xs: '16px 11px', md: '24px 20px' },
        maxHeight: '512px',
        overflowY: 'auto',
        '::-webkit-scrollbar': { display: 'none' }
      }}
    >
      {SPORTS.map((item, index) => (
        <Box
          key={item}
          sx={{
            position: 'relative',
            height: { xs: '200px', sm: 'auto' }
          }}
        >
          {sportActives[index] && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bgcolor: 'rgba(255, 255, 255, 0.5)',
                zIndex: 2,
                pointerEvents: 'none',
                borderRadius: '16px'
              }}
            />
          )}
          <Box
            component='img'
            alt={item}
            src={`/images/sport-${index + 1}.png`}
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '16px',
              objectFit: 'none'
            }}
            onClick={() =>
              setSportActives((prev) => {
                const newActives = [...prev];
                newActives[index] = !prev[index];
                return newActives;
              })
            }
          />
          <Box
            sx={{
              width: { xs: 'auto', sm: 'max-content' },
              position: 'absolute',
              p: '7px 14px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '100px',
              left: '50%',
              bottom: '16px',
              transform: 'translateX(-50%)',
              bgcolor: '#fff',
              cursor: 'pointer',
              ':hover': {
                bgcolor: '#F1F3F7'
              },
              transition: 'background-color 0.3s ease',
              fontWeight: '600',
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '-0.5px',
              color: '#06082C',
              pointerEvents: 'none'
            }}
          >
            {item}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
