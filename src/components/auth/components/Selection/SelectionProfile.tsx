'use client';

import React from 'react';
import { Box } from '@mui/material';
import { Input } from '@/components/ui';

import { ArrowSvg, CalendarSvg, CameraSvg, UserProfileSvg } from '@/components/svgr';

interface SelectionProfileProps {
  setUserIsVerified: React.Dispatch<React.SetStateAction<() => boolean>>;
}

// Некий пропс дрилинг присутсвует)

export const SelectionProfile: React.FC<SelectionProfileProps> = ({ setUserIsVerified }) => {
  const nameRef = React.useRef<HTMLInputElement>(null);
  const surnameRef = React.useRef<HTMLInputElement>(null);
  const [nameError, setNameError] = React.useState<boolean>(false);
  const [surnameError, setSurnameError] = React.useState<boolean>(false);

  const handleNext = (): boolean => {
    let isValid = true;
    if (!nameRef.current?.value) {
      setNameError(true);
      isValid = false;
    }
    if (!surnameRef.current?.value) {
      setSurnameError(true);
      isValid = false;
    }

    return isValid;
  };

  React.useEffect(() => {
    setUserIsVerified(() => handleNext);
  }, [setUserIsVerified]);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '718px',
        height: '100%',
        maxHeight: '458px',
        overflowY: 'auto',
        '::-webkit-scrollbar': { display: 'none' }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          bgcolor: '#CCCFDA',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <UserProfileSvg />
        <Box sx={{ position: 'absolute', bottom: '0', right: '0' }}>
          <CameraSvg />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(2, 349px)' },
          gap: { xs: '16px', sm: '24px 20px' },
          mt: '32px'
        }}
      >
        <Input
          placeholder='Введите имя'
          label='Имя'
          error={nameError}
          errorText='Это поле обязательное'
          ref={nameRef}
        />
        <Input
          placeholder='Введите фамилия'
          label='Фамилия'
          error={surnameError}
          errorText='Это поле обязательное'
          ref={surnameRef}
        />
        <Input placeholder='Введите отчество' label='Отчество' />
        <Input
          placeholder='Выберите дату'
          label='Дата рождения'
          icon={<CalendarSvg />}
          iconPosition='right'
          disabled
        />
        <Input
          placeholder='Выберите пол'
          label='Пол'
          icon={<ArrowSvg />}
          iconPosition='right'
          disabled
        />
        <Input
          placeholder='Выберите страну'
          label='Гражданство'
          icon={<ArrowSvg />}
          iconPosition='right'
          disabled
        />
      </Box>
    </Box>
  );
};
