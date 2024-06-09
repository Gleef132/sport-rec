'use client';

import React from 'react';

import { PatternFormat } from 'react-number-format';
import { Box, Button, Typography } from '@mui/material';
import { OTP } from './OTP';

import { ModalContext } from '@/app/context';
import { InputRussianFlagSvg, MiddleLogoSvg } from '@/components/svgr';
import { Input, Loader } from '@/components/ui';
import { useCookies } from '@/hooks/useCookies';
import useCountdown from '@/hooks/useCountdown';

import { Stages } from '../constants/constants';
import { generateOpt } from '../utils/generateOpt';
import { useStage } from '../context/stage';

interface SignContainerProps {
  CONTENT: Stages;
  isSignUp?: boolean;
}

// Этот компонент получился достаточно большим, я бы мог разделить его вынеся функции и стейты в отдельный хук useSignContainer, но это заняло бы больше времени поэтому сделал это здесь.

export const SignContainer: React.FC<SignContainerProps> = ({ CONTENT, isSignUp }) => {
  const [stage, setStage] = React.useState<'stageOne' | 'stageTwo'>('stageOne');
  const [errorText, setErrorText] = React.useState<string>('');
  const [title, setTitle] = React.useState<string>(CONTENT[stage].TITLE);
  const [text, setText] = React.useState<string>(CONTENT[stage].TEXT);
  const [phone, setPhone] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [otp, setOtp] = React.useState<string>('');
  const [otpCode, setOtpCode] = React.useState<string>('');
  const [otpErorr, setOtpError] = React.useState<string>('');

  const { seconds, isStart, setIsStart } = useCountdown();
  const { setModalIsActive, setModalContent } = React.useContext(ModalContext);
  const { setStage: setGlobalStage } = useStage();
  const { setCookie } = useCookies();

  const ref = React.useRef<HTMLInputElement>(null);

  const getOtp = (isFirst: boolean) => {
    if (!isFirst) {
      const otpCode = generateOpt();
      setOtpCode(otpCode);
      setIsStart(true);
      console.log(otpCode);
      return;
    }

    if (!ref.current?.value) return setErrorText(CONTENT[stage].ERROR_TEXT_EMPTY);
    const numberCount = ref.current.value.match(/\d+/g)?.join('').length;
    if (numberCount !== 11) return setErrorText(CONTENT[stage].ERROR_TEXT_INCORRECT);

    const otpCode = generateOpt();
    setOtpCode(otpCode);
    console.log(otpCode);
    setErrorText('');
    setStage('stageTwo');
    setIsStart(true);
    setPhone(ref.current.value);
    setTitle(CONTENT.stageTwo.TITLE);
    setText(`${CONTENT.stageTwo.TEXT} ${ref.current.value}`);
  };

  const handleAuth = () => {
    if (!otp) return setOtpError(CONTENT.stageTwo.ERROR_TEXT_EMPTY);
    if (otp === otpCode) {
      setIsLoading(true);
      setTimeout(() => {
        if (isSignUp) return setGlobalStage('selection');

        setModalIsActive(false);
        setModalContent(null);
        setCookie('isAuth', 'true');
        setIsLoading(false);
      }, 1500);
    } else {
      setOtpError('Введен неверный код');
    }
  };

  const handleBack = () => {
    setStage('stageOne');
    setTitle(CONTENT.stageOne.TITLE);
    setText(CONTENT.stageOne.TEXT);
    if (ref.current) ref.current.value = phone;
  };

  return (
    <Box
      component='form'
      sx={{ width: { xs: '100%', sm: '322px' }, mt: '8px', mb: '16px' }}
      onSubmit={(e) => e.preventDefault()}
    >
      <Box sx={{ width: '100%', textAlign: 'center', mb: '32px' }}>
        <MiddleLogoSvg />
        <Typography
          variant='h2'
          sx={{
            mt: '24px',
            mb: '16px',
            fontSize: '30px',
            lineHeight: '32px',
            letterSpacing: '-1%',
            fontWeight: 600,
            color: 'text.secondary'
          }}
        >
          {title}
        </Typography>
        <Typography className='text' sx={{ maxWidth: '300px', m: '0 auto' }}>
          {text}{' '}
          {stage === 'stageTwo' && (
            <Box
              component='span'
              sx={{
                color: '#353754',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '13px',
                lineHeight: '18px',
                letterSpacing: '-0.1px'
              }}
              onClick={handleBack}
            >
              Изменить
            </Box>
          )}
        </Typography>
      </Box>
      {stage === 'stageOne' ? (
        <Input
          label='Номер телефона'
          placeholder='+7'
          errorText={errorText}
          error={!!errorText}
          component={PatternFormat}
          format='+7 (###) ###-##-##'
          mask='_'
          icon={<InputRussianFlagSvg />}
          iconPosition='left'
          ref={ref}
          defaultValue={phone}
          autoFocus
        />
      ) : (
        <OTP setOtp={setOtp} length={6} error={otpErorr} />
      )}
      <Button
        className='text'
        variant='contained'
        sx={{
          width: '100%',
          mt: '24px',
          fontWeight: 600,
          color: '#fff'
        }}
        onClick={stage === 'stageOne' ? () => getOtp(true) : handleAuth}
        disabled={stage === 'stageTwo' && !isStart}
      >
        {isLoading ? <Loader /> : stage === 'stageOne' ? 'Получить код' : 'Подтвердить'}
      </Button>
      {isSignUp && stage === 'stageOne' && (
        <Typography
          className='text'
          sx={{
            fontWeight: '600',
            fontSize: '12px !important',
            lineHeight: '18px',
            letterSpacing: '-0.1px',
            color: '#9395B8',
            textAlign: 'center',
            mt: '16px'
          }}
        >
          Регистрируясь, вы соглашаетесь{' '}
          <Box
            component='span'
            sx={{
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '12px',
              lineHeight: '18px',
              letterSpacing: '-0.1px',
              color: '#353754'
            }}
          >
            правилами использования
          </Box>{' '}
          и{' '}
          <Box
            component='span'
            sx={{
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '12px',
              lineHeight: '18px',
              letterSpacing: '-0.1px',
              color: '#353754'
            }}
          >
            политикой конфиденциальности
          </Box>
        </Typography>
      )}
      {stage === 'stageOne' ? (
        <>
          <Box
            className='text'
            component='button'
            sx={{
              textAlign: 'center',
              cursor: 'pointer',
              mt: '40px',
              width: '100%'
            }}
            onClick={() => setGlobalStage(isSignUp ? 'signIn' : 'signUp')}
          >
            {CONTENT.stageOne.BUTTON_HAVE_ACCOUNT}
          </Box>
          <Button
            className='text'
            variant='contained'
            color='secondary'
            sx={{
              width: '100%',
              mt: '16px',
              color: 'text.secondary',
              fontWeight: '600 !important',
              ':hover': {
                bgcolor: '#dee0e3'
              }
            }}
            onClick={() => setGlobalStage(isSignUp ? 'signIn' : 'signUp')}
          >
            {CONTENT.stageOne.BUTTON_SIGN_UP}
          </Button>
        </>
      ) : (
        <Typography
          className='text'
          sx={{ textAlign: 'center', mt: '24px', fontWeight: '600 !important', color: '#353754' }}
        >
          {!isStart ? (
            <Box
              component='span'
              sx={{ cursor: 'pointer', fontWeight: '600 !important' }}
              onClick={() => getOtp(false)}
            >
              Отправить снова
            </Box>
          ) : (
            `Отправить снова через ${isStart && seconds !== 60 ? seconds : '01:00'}`
          )}
        </Typography>
      )}
    </Box>
  );
};
