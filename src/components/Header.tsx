'use client';

import { AppBar, Box, Button, Container, List, ListItem } from '@mui/material';

import { Fragment, useContext, useState } from 'react';

import { ModalContext } from '@/app/context';
import {
  ArrowSvg,
  BagSvg,
  BellSvg,
  BuildingSvg,
  CupSvg,
  FlagSvg,
  HomeSvg,
  LogoSvg,
  MenuCloseSvg,
  MenuOpenSvg,
  MobileBellSvg,
  UserSvg,
  UsersSvg
} from './svgr';
import { Form } from './auth/form';
import { useCookies } from '@/hooks/useCookies';
import Link from 'next/link';
import { Stage } from './auth/context/stage';

const PAGES = [
  {
    page: 'Лента',
    icon: <HomeSvg />
  },
  {
    page: 'Маркетплейс',
    icon: <BagSvg />
  },
  {
    page: 'Рейтинги',
    icon: <UsersSvg />
  },
  {
    page: 'Cоревнования',
    icon: <CupSvg />
  },
  {
    page: 'Организации',
    icon: <BuildingSvg />
  }
];

interface HeaderProps {
  isAuth: string | undefined;
}

// Этот компонент по хорошему бы разделить на несколько компонентов, но времени не хватает)

export const Header: React.FC<HeaderProps> = (props) => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const { setModalIsActive, setModalContent } = useContext(ModalContext);
  const { getCookie } = useCookies();
  const isAuth: string | undefined = props.isAuth || getCookie('isAuth');

  const modalOpen = (stage: Stage) => {
    setModalIsActive(true);
    setModalContent(<Form stage={stage} />);
  };

  return (
    <AppBar
      position='absolute'
      sx={{
        boxShadow: 'none',
        bgcolor: '#fff',
        height: {
          xs: 52,
          md: 64
        },
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000
      }}
    >
      <Container
        sx={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ height: 36, display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              width: { xs: '130px', md: '100px', lg: '130px' },
              height: { xs: '100%', lg: '32px' },
              position: 'relative',
              zIndex: 1000
            }}
          >
            <LogoSvg
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0',
                left: '0',
                bottom: '0',
                right: '0'
              }}
            />
          </Box>
          <List
            sx={{
              display: { xs: 'none', md: 'flex' },
              marginLeft: { md: '10px', lg: '30px', xl: '50px' },
              padding: 0,
              alignItems: 'center',
              gap: { xs: '8px', md: isAuth ? '0px' : '8px', lg: '15px', xl: '30px' }
            }}
          >
            {PAGES.map(({ page, icon }, index) => (
              <ListItem
                key={page}
                sx={{
                  p: '0px !important',
                  cursor: 'pointer',
                  gap: { md: isAuth ? '3px' : '8px', lg: '10px' },
                  fontWeight: 600,
                  letterSpacing: '-0.5px',
                  lineHeight: '20px',
                  color: index === 0 ? 'text.secondary' : 'text.primary'
                }}
              >
                <Link
                  style={{
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'inherit',
                    color: 'inherit'
                  }}
                  href={
                    (page === 'Организации' || page === 'Cоревнования') && isAuth
                      ? '/profile-verificated'
                      : page === 'Лента'
                      ? '/'
                      : `/${page}`
                  }
                >
                  {icon}
                  {page}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: { md: '16px', lg: isAuth ? '8px' : '24px', xl: '24px' }
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FlagSvg />
            <Box
              component={'button'}
              sx={{
                letterSpacing: '-0.5px',
                lineHeight: '20px',
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                ml: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600 !important'
              }}
            >
              RU <ArrowSvg />
            </Box>
          </Box>
          {!isAuth ? (
            <Box
              component={'button'}
              sx={{
                p: '10px',
                bgcolor: '#F1F3F7',
                borderRadius: '10px',
                display: 'flex',
                transition: 'background 0.3s ease',
                ':hover': {
                  bgcolor: '#dee0e3'
                }
              }}
              onClick={() => modalOpen('signIn')}
            >
              <UserSvg />
            </Box>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <BellSvg />

              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Link href={'/profile'}>
                  <Box
                    component={'img'}
                    src={'/images/avatar.png'}
                    sx={{ width: '36px', height: '36px', borderRadius: '50%' }}
                    alt={'avatar'}
                  />
                </Link>
                <ArrowSvg />
              </Box>
            </Box>
          )}
        </Box>
        <Box
          component={'button'}
          sx={{
            display: { xs: 'flex', md: 'none' },
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1000
          }}
          onClick={() => setMenuIsActive((prev) => !prev)}
        >
          {menuIsActive ? <MenuCloseSvg /> : <MenuOpenSvg />}
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            bgcolor: '#fff',
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 100,
            transition: 'transform 0.3s ease',
            transform: menuIsActive ? 'translateX(0)' : 'translateX(100%)',
            pt: '52px',
            pb: '20px',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              p: '24px 16px 0 16px',
              gap: '8px',
              width: '100%'
            }}
          >
            {isAuth && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  justifyContent: 'space-between',
                  p: '8px'
                }}
              >
                <Box
                  component={'img'}
                  src={'/images/avatar.png'}
                  sx={{ width: '36px', height: '36px', borderRadius: '50%' }}
                  alt={'avatar'}
                />
                <ArrowSvg />
              </Box>
            )}
            {PAGES.map(({ page, icon }, index) => {
              if (index === 1 && isAuth)
                return (
                  <ListItem
                    key={'Уведомления'}
                    sx={{
                      p: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      fontWeight: 600,
                      letterSpacing: '-0.5px',
                      lineHeight: '20px',
                      color: 'text.primary'
                    }}
                  >
                    <MobileBellSvg />
                    Уведомления
                  </ListItem>
                );
              return (
                <Fragment key={page}>
                  <ListItem
                    sx={{
                      p: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontWeight: 600,
                      letterSpacing: '-0.5px',
                      lineHeight: '20px',
                      color: index === 0 ? 'text.secondary' : 'text.primary'
                    }}
                  >
                    {icon}
                    {page}
                  </ListItem>
                  {index === PAGES.length - 1 && (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        p: '8px',
                        flex: '0 1 auto'
                      }}
                    >
                      <FlagSvg style={{ flexShrink: '0' }} />
                      <Box
                        component={'button'}
                        sx={{
                          letterSpacing: '-0.5px',
                          lineHeight: '20px',
                          color: 'text.secondary',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          ml: '6px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: '600 !important',
                          width: '100%',
                          justifyContent: 'space-between'
                        }}
                      >
                        RU <ArrowSvg />
                      </Box>
                    </Box>
                  )}
                </Fragment>
              );
            })}
          </List>
          {!isAuth && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: '16px',
                px: '16px'
              }}
            >
              <Button
                variant='contained'
                sx={{
                  width: '100%',
                  fontWeight: '600',
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '-0.5px',
                  color: '#fff'
                }}
                onClick={() => modalOpen('signUp')}
              >
                Зарегестрироваться
              </Button>
              <Button
                variant='contained'
                sx={{
                  width: '100%',
                  fontWeight: '600',
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '-0.5px',
                  color: 'text.secondary',
                  bgcolor: '#F1F3F7'
                }}
                color='secondary'
                onClick={() => modalOpen('signIn')}
              >
                Войти
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </AppBar>
  );
};
