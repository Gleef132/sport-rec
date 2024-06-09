import { Box, Container, Typography } from '@mui/material';
import { HeroMobile } from './HeroMobile';
import { TapeFilter } from './TapeFilter';
import { CommentSvg, EyeSvg } from './svgr';

export const Hero = () => {
  return (
    <>
      <Container
        sx={{
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'space-between',
          mt: { xs: '68px', md: '90px' },
          gap: { xs: '16px', md: '24px' }
        }}
      >
        <Box
          sx={{
            p: '28px 24px',
            maxWidth: { sm: '100%', md: 765 },
            width: '100%',
            bgcolor: '#fff',
            height: '100%',
            borderRadius: '20px',
            display: { xs: 'none', sm: 'block' }
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              lineHeight: '18px',
              height: '18px',
              fontWeight: '400',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
              gap: '6px',
              letterSpacing: '0px'
            }}
          >
            Спортивная Борьба
            <Box
              component={'span'}
              sx={{
                bgcolor: '#9395B8',
                width: 3,
                height: 3,
                borderRadius: '50%',
                display: 'inline-block'
              }}
            ></Box>
            12 марта, 2024 в 16:03
          </Typography>
          <Typography
            variant='h2'
            sx={{
              fontWeight: '600',
              mt: '12px',
              mb: '20px',
              color: 'text.secondary',
              fontSize: 20,
              lineHeight: '26px',
              letterSpacing: '-0.7px'
            }}
          >
            Илья Бессонов дал интервью для телеканала Россия-1
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              lineHeight: '20px',
              letterSpacing: '-0.5px',
              fontWeight: 500
            }}
          >
            Илья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха
            и рассказал методики своих тренировок. Спортсмен сделал заявление, что возвращается в
            спорт и ...{' '}
            <Box
              component={'span'}
              sx={{
                color: 'text.secondary',
                fontWeight: 600,
                letterSpacing: '-0.5px',
                lineHeight: '23px',
                cursor: 'pointer'
              }}
            >
              Читать больше
            </Box>
          </Typography>
          <Box
            display='grid'
            gridTemplateColumns='repeat(3, 1fr)'
            sx={{ gap: '12px 9px', mt: '19px' }}
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <Box key={index}>
                <Box
                  component={'img'}
                  src={`/images/hero-img-${index + 1}.png`}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover'
                  }}
                  alt={'hero-img'}
                ></Box>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '22px',
              mt: '16px',
              mb: '16px'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <EyeSvg />
              <Typography
                sx={{
                  lineHeight: '20px',
                  letterSpacing: '-0.5px',
                  fontWeight: 500
                }}
              >
                4.1 K
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CommentSvg />
              <Typography
                sx={{
                  lineHeight: '20px',
                  letterSpacing: '-0.5px',
                  fontWeight: 500
                }}
              >
                4
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderTop: '1px solid #F1F3F7',
              pt: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            <Box sx={{ display: 'flex', gap: '12px' }}>
              <Box
                component={'img'}
                src='/images/comment-avatar-1.png'
                sx={{ width: 40, height: 40 }}
                alt={'avatar'}
              ></Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 500,
                    lineHeight: '20px',
                    letterSpacing: '-0.5px'
                  }}
                >
                  Вадим Давыдов
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: 'text.secondary',
                    lineHeight: '20px',
                    letterSpacing: '-0.5px',
                    mt: '4px',
                    mb: '6px'
                  }}
                >
                  Наконец-то! Рад, что он вернулся в спорт
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    lineHeight: '20px',
                    letterSpacing: '-0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px'
                  }}
                >
                  15 минут назад
                  <Box
                    component={'span'}
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 600,
                      letterSpacing: '-0.5px',
                      lineHeight: '23px',
                      cursor: 'pointer'
                    }}
                  >
                    Ответить
                  </Box>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '12px', px: '32px' }}>
              <Box
                component={'img'}
                src='/images/comment-avatar-2.png'
                sx={{ width: 40, height: 40 }}
                alt={'avatar'}
              ></Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 500,
                    lineHeight: '20px',
                    letterSpacing: '-0.5px'
                  }}
                >
                  Артем Еременко
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: 'text.secondary',
                    lineHeight: '20px',
                    letterSpacing: '-0.5px',
                    mt: '4px',
                    mb: '6px'
                  }}
                >
                  Вадим , согласен! Уже давно ждал интервью!
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    lineHeight: '20px',
                    letterSpacing: '-0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px'
                  }}
                >
                  30 секунд назад
                  <Box
                    component={'span'}
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 600,
                      letterSpacing: '-0.5px',
                      lineHeight: '23px',
                      cursor: 'pointer'
                    }}
                  >
                    Ответить
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <TapeFilter />
      </Container>
      <HeroMobile />
    </>
  );
};
