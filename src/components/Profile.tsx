import { Box, Button, Container, Typography } from '@mui/material';
import {
  AddFriendSvg,
  CheckSvg,
  InfoSvg,
  InputRussianFlagSvg,
  ShareSvg,
  SubscriptionFlagSvg,
  UserProfileMainSvg,
  UserProfileSvg
} from './svgr';

interface SubscriptionType {
  name: string;
  imgSrc: number;
  who: string;
  dignity: string;
  isClicked?: boolean;
}

const SUBSCRIPTIONS: SubscriptionType[] = [
  {
    name: 'Александр Магомедов',
    dignity: 'Призер Олимпийских игр, двукратный призер чемпионатов мира',
    imgSrc: 1,
    who: 'Спортсмен',
    isClicked: true
  },
  {
    name: 'Дмитрий Зайцев',
    dignity: 'Заслуженный судья и секретарь соревнований по греко-римской борьбе',
    imgSrc: 2,
    who: 'Судья',
    isClicked: true
  },
  {
    name: 'Светлана Бессонова',
    dignity: 'Призер Олимпийских игр, двукратный призер чемпионатов мира',
    imgSrc: 3,
    who: 'Спортсмен'
  },
  {
    name: 'Андрей Романов',
    dignity:
      'Мастер спорта СССР международного класса, заслуженный тренер СССР по греко-римской борьбе',
    imgSrc: 4,
    who: 'Спортсмен'
  },
  {
    name: 'Анастасия Землякова',
    dignity: 'Тренер по гандболу',
    imgSrc: 5,
    who: 'Тренер',
    isClicked: true
  }
];
interface ProfileProps {
  name?: string;
  avatar?: string;
  subscribers: number;
  subscriptions: number;
}

export const Profile: React.FC<ProfileProps> = ({ name, avatar, subscribers, subscriptions }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        gap: '24px',
        flexDirection: { xs: 'column', md: 'row' },
        mt: { xs: '68px', md: '90px' },
        mb: { xs: '24px', md: '0' }
      }}
    >
      <Box
        sx={{
          width: '100%',
          bgcolor: '#fff',
          borderRadius: '20px',
          p: { xs: '28px 24px', sm: '24px 20px' }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: '18px', sm: '16px' },
            flexDirection: { xs: 'column', sm: 'row' },
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: '100px', sm: '140px' },
              height: { xs: '100px', sm: '140px' },
              borderRadius: '50%',
              overflow: 'hidden',
              bgcolor: '#CCCFDA',
              flexShrink: 0
            }}
          >
            {avatar ? (
              <Box component='img' alt='Avatar' src={avatar} />
            ) : (
              <>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <UserProfileMainSvg />
                </Box>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                  <UserProfileSvg />
                </Box>
              </>
            )}
          </Box>
          <Box>
            {name ? (
              <>
                <Typography
                  sx={{
                    fontWeight: '600',
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '-0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    justifyContent: {
                      xs: 'center',
                      sm: 'flex-start'
                    }
                  }}
                >
                  <InputRussianFlagSvg />
                  Российская Федерация
                </Typography>
                <Typography
                  variant='h2'
                  sx={{
                    fontWeight: '600',
                    fontSize: '30px',
                    lineHeight: '32px',
                    letterSpacing: '-1%',
                    color: 'text.secondary',
                    mt: '12px',
                    mb: '36px'
                  }}
                >
                  {name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <Box component='img' alt='avatar' src='/images/subscribers.png' />
                    <Typography
                      sx={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '-0.5px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontWeight: '600'
                      }}
                    >
                      <Box component='span' sx={{ color: 'text.secondary' }}>
                        {subscribers}
                      </Box>
                      Подписчики
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <Box component='img' alt='avatar' src='/images/subscriptions.png' />
                    <Typography
                      sx={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '-0.5px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontWeight: '600'
                      }}
                    >
                      <Box component='span' sx={{ color: 'text.secondary' }}>
                        {subscriptions}
                      </Box>
                      Подписки
                    </Typography>
                  </Box>
                </Box>
              </>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      lineHeight: '20px',
                      letterSpacing: '-0.5px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontWeight: '600'
                    }}
                  >
                    <Box component='span' sx={{ color: 'text.secondary' }}>
                      {subscribers}
                    </Box>
                    Подписчики
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      lineHeight: '20px',
                      letterSpacing: '-0.5px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontWeight: '600'
                    }}
                  >
                    <Box component='span' sx={{ color: 'text.secondary' }}>
                      {subscriptions}
                    </Box>
                    Подписки
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
        {avatar && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              p: '8px 12px',
              bgcolor: '#353754',
              borderRadius: '10px',
              width: 'fit-content',
              m: { xs: '36px auto 0 auto', sm: '28px 0 0 0' }
            }}
          >
            <Box sx={{ flexShrink: 0 }}>
              <InfoSvg />
            </Box>
            <Typography
              sx={{
                fontSize: '12px',
                lineHeight: '18px',
                letterSpacing: '-0.1px',
                fontWeight: '600',
                color: '#fff'
              }}
            >
              Подтвердите личность для доступа к новым функциям
            </Typography>
          </Box>
        )}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: '8px', sm: '10px' },
            width: '100%',
            mt: { xs: '36px', sm: '40px' }
          }}
        >
          {avatar && (
            <Box
              sx={{
                flex: { xs: 1, sm: 0.5 },
                bgcolor: '#F8F8F9',
                p: { xs: '10px 12px', sm: '12px 14px' },
                borderRadius: '12px'
              }}
            >
              <Typography
                sx={{
                  fontWeight: '600',
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '-0.5px'
                }}
              >
                День рождения
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '-0.5px',
                  fontWeight: '600',
                  color: 'text.secondary'
                }}
              >
                12 сентября 1994
              </Typography>
            </Box>
          )}
          <Box
            sx={{
              flex: { xs: 1, sm: 0.5 },
              bgcolor: '#F8F8F9',
              p: { xs: '10px 12px', sm: '12px 14px' },
              borderRadius: '12px'
            }}
          >
            <Typography
              sx={{
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '-0.5px'
              }}
            >
              Номер телефона
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '-0.5px',
                fontWeight: '600',
                color: 'text.secondary'
              }}
            >
              +7 (773) 493 39 10
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mt: '40px' }}>
          <Button
            variant='contained'
            sx={{
              fontWeight: '600',
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '-0.5px',
              flexGrow: { xs: 1, sm: 0 }
            }}
          >
            Редактировать
          </Button>
          <Box
            sx={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              bgcolor: '#F1F3F7',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
          >
            <ShareSvg />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', md: '375px' },
          bgcolor: '#fff',
          borderRadius: '20px',
          p: '24px 20px',
          flexShrink: 1.8
        }}
      >
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '26px',
            letterSpacing: '-0.7px',
            color: 'text.secondary'
          }}
        >
          Интересные подписки
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', mt: '24px', mb: '20px' }}>
          {SUBSCRIPTIONS.map((subscription, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Box sx={{ flexShrink: 0, position: 'relative' }}>
                  <Box
                    component='img'
                    alt='avatar'
                    src={`/images/athlete-${subscription.imgSrc}.png`}
                    sx={{ width: '41px', height: '41px' }}
                  />
                  <Box sx={{ position: 'absolute', right: '0', bottom: '0' }}>
                    <SubscriptionFlagSvg />
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
                  <Typography
                    sx={{
                      fontWeight: '600',
                      fontSize: '14px',
                      lineHeight: '20px',
                      letterSpacing: '-0.5px',
                      color: 'text.secondary',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '3px'
                    }}
                  >
                    {subscription.name} {subscription.isClicked && <CheckSvg />}
                  </Typography>
                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '12px',
                      lineHeight: '18px',
                      color: 'text.secondary'
                    }}
                  >
                    {subscription.who}
                    <Box
                      component='span'
                      sx={{
                        width: '2px',
                        height: '2px',
                        bgcolor: 'text.secondary',
                        borderRadius: '50%',
                        display: 'inline-block',
                        flexShrink: 0
                      }}
                    />
                    <Box
                      component='span'
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        WebkitBoxOrient: 'vertical'
                      }}
                    >
                      {subscription.dignity}
                    </Box>
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  bgcolor: '#F1F3F7',
                  borderRadius: '10px',
                  cursor: 'pointer'
                }}
              >
                <AddFriendSvg />
              </Box>
            </Box>
          ))}
        </Box>
        <Button
          variant='contained'
          color='secondary'
          sx={{
            width: '100%',
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '20px',
            letterSpacing: '-0.5px',
            color: 'text.secondary'
          }}
        >
          Смотреть всех
        </Button>
      </Box>
    </Container>
  );
};
