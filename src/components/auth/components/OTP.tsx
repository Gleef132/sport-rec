import { Box, Typography } from '@mui/material';
import React from 'react';

interface OTP_Props {
  setOtp: React.Dispatch<React.SetStateAction<string>>;
  length: number;
  error?: string;
}

export const OTP: React.FC<OTP_Props> = ({ setOtp, length, error }) => {
  const otpRefs = Array(length)
    .fill(0)
    .map(() => React.createRef<HTMLInputElement>());

  const handleChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^[0-9]*$/.test(value)) {
      if (value && index < length - 1) {
        otpRefs[index + 1].current?.focus();
      }
      setOtp(otpRefs.map((ref) => ref.current?.value).join(''));
    } else {
      event.target.value = '';
    }
  };

  const handleKeyDown = (index: number) => (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && event.currentTarget.selectionStart === 0 && index > 0) {
      otpRefs[index - 1].current?.focus();
      setOtp(otpRefs.map((ref) => ref.current?.value).join(''));
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {Array(length)
          .fill(0)
          .map((_, index) => (
            <Box
              key={index}
              component={'input'}
              sx={{
                width: '40px',
                height: '40px',
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '-0.5px',
                fontWeight: 500,
                color: 'text.secondary',
                background: '#F1F3F7',
                borderRadius: '10px',
                transition: 'background 0.3s ease',
                border: !!error ? '1px solid #D21010' : '1px solid transparent',
                textAlign: 'center'
              }}
              maxLength={1}
              ref={otpRefs[index]}
              onChange={handleChange(index)}
              onKeyDown={handleKeyDown(index)}
              autoFocus={index === 0}
            />
          ))}
      </Box>
      {error && (
        <Typography sx={{ color: '#D21010', mt: '4px', fontSize: '12px', lineHeight: '18px' }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};
