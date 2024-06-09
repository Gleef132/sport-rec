import { Box, Typography } from '@mui/material';

export interface CardProps {
  tags?: string[];
  title: string;
  text: string;
  date: string;
  imageSrc: string;
}

export const Card: React.FC<CardProps> = ({ imageSrc, text, date, title, tags }) =>
  tags ? (
    <Box
      sx={{
        position: 'relative',
        width: '320px',
        height: '287px',
        flexShrink: 0
      }}
    >
      <Box
        display='flex'
        gap='10px'
        sx={{ position: 'absolute', top: '12px', left: '12px', zIndex: 1 }}
      >
        {tags.map((tag, index) => {
          const mainTag = index > 1 ? '+1' : tag;
          return (
            <Box
              key={tag}
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(20px)',
                color: '#F1F3F7',
                fontWeight: 600,
                lineHeight: '20px',
                letterSpacing: '-0.5px',
                p: '7px 14px',
                borderRadius: '100px'
              }}
            >
              {mainTag}
            </Box>
          );
        })}
      </Box>
      <Box
        component={'img'}
        src={imageSrc}
        sx={{ width: '100%', height: '100%', borderRadius: '20px' }}
        alt={title}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '12px',
          left: '12px',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <Typography
          variant='h3'
          sx={{
            fontSize: 20,
            lineHeight: '26px',
            letterSpacing: '-0.7px',
            fontWeight: 600,
            color: '#fff',
            mt: '16px',
            mb: '12px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical'
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            lineHeight: '18px',
            display: 'flex',
            gap: '4px',
            color: '#F1F3F7',
            alignItems: 'center'
          }}
        >
          {text}
          <Box
            component='span'
            sx={{
              bgcolor: '#F1F3F7',
              width: 3,
              height: 3,
              borderRadius: '50%',
              display: 'inline-block'
            }}
          />
          {date}
        </Typography>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        width: '100%',
        borderRadius: '20px',
        p: '24px 20px',
        bgcolor: '#FFFFFF'
      }}
    >
      <Box
        component={'img'}
        src={imageSrc}
        sx={{ width: '100%', height: '100%', borderRadius: '20px' }}
        alt={title}
      />
      <Typography
        variant='h3'
        sx={{
          fontSize: 20,
          lineHeight: '26px',
          letterSpacing: '-0.7px',
          fontWeight: 600,
          color: 'text.secondary',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitBoxOrient: 'vertical',
          mt: '16px',
          mb: '12px'
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: 12,
          lineHeight: '18px',
          display: 'flex',
          gap: '4px',
          alignItems: 'center'
        }}
      >
        {text}
        <Box
          component='span'
          sx={{
            bgcolor: '#9395B8',
            width: 3,
            height: 3,
            borderRadius: '50%',
            display: 'inline-block'
          }}
        />
        {date}
      </Typography>
    </Box>
  );
