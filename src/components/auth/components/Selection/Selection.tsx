import React from 'react';
import { useCookies } from '@/hooks/useCookies';

import { ModalContext } from '@/app/context';
import { Box, Button, Typography } from '@mui/material';
import { SelectionContainer } from './SelectionContainer';

interface SelectionThemeType {
  title: string;
  subtitle?: string;
}
const SELECTION_THEMES: SelectionThemeType[] = [
  { title: 'Выберите вид спорта' },
  {
    title: 'Выберите спортсмена',
    subtitle: 'Выберите одного или нескольких спортсменов из списка предложенных.'
  },
  {
    title: 'Выберите спортивные организации',
    subtitle: 'Выберите  организации из списка предложенных.'
  },
  { title: 'Заполните основные данные' }
];

export const Selection = () => {
  const [selectionStage, setSelectionStage] = React.useState<number>(1);
  const [selectionTheme, setSelectionTheme] = React.useState<string>('Выберите вид спорта');
  const [selectionThemeSubTitle, setSelectionThemeSubTitle] = React.useState<string>('');
  const [userIsVerified, setUserIsVerified] = React.useState<() => boolean>(() => false);
  const { setModalIsActive, setModalContent } = React.useContext(ModalContext);
  const { setCookie } = useCookies();

  const handleNext = (isSkip: boolean) => {
    if (isSkip && selectionStage === 4) {
      setModalIsActive(false);
      setModalContent(null);
      setCookie('isAuth', 'true');
      return;
    }
    if (selectionStage === 4 && userIsVerified()) {
      setModalIsActive(false);
      setModalContent(null);
      setCookie('isAuth', 'true');
      return;
    }

    if (selectionStage === 4) return;

    setSelectionStage((prev) => {
      setSelectionTheme(SELECTION_THEMES[prev].title);
      setSelectionThemeSubTitle(SELECTION_THEMES[prev].subtitle || '');
      return prev + 1;
    });
  };

  const handleBack = () => {
    setSelectionStage((prev) => prev - 1);
    setSelectionTheme(SELECTION_THEMES[selectionStage - 2].title);
    setSelectionThemeSubTitle(SELECTION_THEMES[selectionStage - 2].subtitle || '');
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          width: '100%',
          pb: '12px',
          borderBottom: { xs: 'none', sm: '1px solid #F1F3F7' }
        }}
      >
        <Box sx={{ display: 'flex', gap: '12px' }}>
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '20px',
              lineHeight: '26px',
              letterSpacing: '-0.7px'
            }}
          >
            {selectionStage}/4
          </Typography>
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '20px',
              lineHeight: '26px',
              letterSpacing: '-0.7px',
              color: 'text.secondary'
            }}
          >
            {selectionTheme}
          </Typography>
        </Box>
        {selectionThemeSubTitle && (
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '12px',
              lineHeight: '18px',
              letterSpacing: '-0.1px',
              mt: '16px'
            }}
          >
            {selectionThemeSubTitle}
          </Typography>
        )}
      </Box>
      <SelectionContainer stage={selectionStage} setUserIsVerified={setUserIsVerified} />
      <Box
        sx={{
          width: { xs: 'calc(100% + 48px)', sm: '100%' },
          height: { xs: 'calc(100% + 24px)', sm: '100%' },
          transform: { xs: 'translate(-24px, 24px)', sm: 'none' },
          pb: { xs: '24px', sm: '0' },
          pt: '16px',
          px: { xs: '24px', sm: '0' },
          borderTop: { xs: 'none', sm: '1px solid #F1F3F7' },
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          gap: '16px',
          borderRadius: { xs: '20px 20px 0 0', sm: '0' },
          boxShadow: { xs: '8px 0px 34px 0px #9395B866', sm: 'none' }
        }}
      >
        {selectionStage > 1 && (
          <Button
            variant='contained'
            color='secondary'
            sx={{
              fontWeight: '600',
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '-0.5px'
            }}
            onClick={handleBack}
          >
            Назад
          </Button>
        )}
        <Box
          sx={{
            display: selectionStage > 1 ? 'flex' : 'contents',
            gap: '16px',
            flexDirection: { xs: 'column-reverse', sm: 'row' }
          }}
        >
          <Button
            variant='contained'
            color='secondary'
            sx={{
              fontWeight: '600',
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '-0.5px'
            }}
            onClick={() => handleNext(true)}
          >
            Пропустить
          </Button>
          <Button
            variant='contained'
            color='primary'
            sx={{
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '-0.5px'
            }}
            onClick={() => handleNext(false)}
          >
            Продолжить
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
