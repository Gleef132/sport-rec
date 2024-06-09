import React from 'react';

import { Box, Typography } from '@mui/material';

type InputProps<
  Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = 'input'
> = {
  label?: string;
  error?: boolean;
  errorText?: string;
  icon?: React.ReactNode;
  component?: Component;
  getInputRef?: React.ForwardedRef<HTMLInputElement>;
  iconPosition?: 'left' | 'right';
} & React.ComponentProps<Component>;

export const Input = React.forwardRef(
  (
    {
      label,
      error,
      errorText,
      icon,
      className,
      iconPosition,
      component,
      ...props
    }: InputProps<'input'>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const id = React.useId();
    const Component = component || 'input';
    const inputPadding = icon
      ? iconPosition === 'left'
        ? '10px 12px 10px 40px'
        : '10px 40px 10px 12px'
      : '10px 12px';

    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: '100%'
        }}
      >
        {label && (
          <Box
            component='label'
            sx={{
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: 400,
              color: '#7B7EA5',
              mb: '5px'
            }}
            htmlFor={id}
          >
            {label}
          </Box>
        )}
        <Box component={'label'} sx={{ position: 'relative', width: '100%' }}>
          {icon && iconPosition === 'left' && (
            <Box
              sx={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            >
              {icon}
            </Box>
          )}
          <Component
            ref={component ? null : ref}
            getInputRef={component ? ref : null}
            id={id}
            {...props}
            className={className}
            style={{
              width: '100%',
              padding: inputPadding,
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '-0.5px',
              fontWeight: 500,
              color: '#9395B8',
              background: '#F1F3F7',
              borderRadius: '10px',
              transition: 'background 0.3s ease',
              border: error ? '1px solid #D21010' : '1px solid transparent'
            }}
          />
          {icon && iconPosition === 'right' && (
            <Box
              sx={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            >
              {icon}
            </Box>
          )}
        </Box>
        {error && (
          <Typography
            sx={{
              color: '#D21010',
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: 400,
              mt: '4px'
            }}
          >
            {errorText}
          </Typography>
        )}
      </Box>
    );
  }
) as <Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = 'input'>(
  props: InputProps<Component> & { ref?: React.Ref<HTMLInputElement> }
) => React.ReactElement;
