import { Box } from '@mui/material';

export const Loader = () => {
  return (
    <Box sx={{ display: 'flex', gap: '4px' }}>
      <Box
        className='loader'
        sx={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: '#fff',
          opacity: '1',
          animationDelay: '0s'
        }}
      ></Box>
      <Box
        className='loader'
        sx={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: '#fff',
          opacity: '0.4',
          animationDelay: '0.4s'
        }}
      ></Box>
      <Box
        className='loader'
        sx={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: '#fff',
          opacity: '0.1',
          animationDelay: '0.8s'
        }}
      ></Box>
      <Box
        className='loader'
        sx={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: '#fff',
          opacity: '0.1',
          animationDelay: '1.2s'
        }}
      ></Box>
    </Box>
  );
};
