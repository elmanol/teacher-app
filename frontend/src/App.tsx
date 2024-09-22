import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Dashboard from './Dashboard';
import ProTip from './ProTip';


function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    // <Container maxWidth="sm">
    //   <Box sx={{ my: 4 }}>
    //     <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
    //       Material UI Vite.js example in TypeScript
    //     </Typography>
      <Dashboard />
    //   </Box>
    // </Container>
  );
}
