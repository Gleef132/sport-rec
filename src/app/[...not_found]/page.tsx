'use server';

import { Box } from '@mui/material';

export default async function NotFoundPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        bgcolor: '#101010',
        color: '#fff'
      }}
    >
      404 | Page not found
    </Box>
  );
}
