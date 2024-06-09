'use client';

import React from 'react';
import ReactDOM from 'react-dom';

import { ModalContext } from '@/app/context';
import { Box } from '@mui/material';
import { MenuCloseSvg } from './svgr';

// Я бы мог реализовать портал с помощью react-dom/server и решить проблему несовместимости с SSR, но это заняло бы больше времени поэтому сделал через хуки.

export const Modal = () => {
  const [isDomMounted, setIsDomMounted] = React.useState(false);
  const { modalIsActive, modalContent, setModalIsActive } = React.useContext(ModalContext);

  React.useEffect(() => {
    setIsDomMounted(true);
  }, []);

  return isDomMounted
    ? ReactDOM.createPortal(
        <>
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: 'rgba(0, 0, 0, 0.6)',
              zIndex: modalIsActive ? 100000 : -10,
              backdropFilter: 'blur(3.1px)',
              WebkitBackdropFilter: 'blur(3.1px)',
              transition: modalIsActive ? 'opacity 0.3s ease' : 'none',
              opacity: modalIsActive ? 1 : 0,
              cursor: 'pointer'
            }}
            onClick={() => setModalIsActive(false)}
          ></Box>
          <Box
            sx={{
              position: 'fixed',
              top: { xs: 'auto', sm: '50%' },
              left: '50%',
              transform: { xs: 'translate(-50%, 0%)', sm: 'translate(-50%, -50%)' },
              bottom: { xs: '0', sm: 'auto' },
              zIndex: modalIsActive ? 100000 : -10,
              bgcolor: '#fff',
              p: { xs: '24px', sm: '32px 24px 20px 24px' },
              transition: modalIsActive ? 'opacity 0.3s ease .1s' : 'none',
              opacity: modalIsActive ? 1 : 0,
              borderRadius: { xs: '24px 24px 0px 0px', sm: '24px' },
              width: 'max-content',
              maxWidth: '100vw'
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', sm: 'block' },
                position: 'absolute',
                top: '16px',
                right: '16px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                ':hover': {
                  transform: 'rotate(90deg)'
                }
              }}
              onClick={() => setModalIsActive(false)}
            >
              <MenuCloseSvg />
            </Box>
            {modalContent}
          </Box>
        </>,
        document.getElementById('portal') as HTMLElement
      )
    : null;
};
