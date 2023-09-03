// import { Helmet } from 'react-helmet-async';
// import { Link as RouterLink } from 'react-router-dom';
// // @mui
// import { styled } from '@mui/material/styles';
// import { Button, Typography, Container, Box } from '@mui/material';




// // ----------------------------------------------------------------------

// const StyledContent = styled('div')(({ theme }) => ({
//   maxWidth: 480,
//   margin: 'auto',
//   minHeight: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   flexDirection: 'column',
//   padding: theme.spacing(12, 0),
// }));

// // ----------------------------------------------------------------------

// export default function Page404() {
//   return (
//     <>
//       {/* <Helmet>
//         <title> 404 Page Not Found | Minimal UI </title>
//       </Helmet> */}

      
//       <Container>
//         <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
//           {/* <Typography variant="h3" paragraph>
//             Sorry, page not found!
//           </Typography>

//           <Typography sx={{ color: 'text.secondary' }}>
//             Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
//             spelling.
//           </Typography>

//           <Box
//             component="img"
//             src="/assets/illustrations/illustration_404.svg"
//             sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
//           /> */}


//         </StyledContent>
//         <Button size="large" variant="contained" component={RouterLink}>Social Media</Button>

// <Button to="#" size="large" variant="outlined" component={RouterLink} color='error'

// onClick={() => {
//   Button.color='default';
// }}
// >
//   E-mail
// </Button>

//       </Container>
//     </>
//   );
// }

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '10vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  padding: theme.spacing(12,12),
}));

export default function Page404() {
  const [emailButtonVariant, setEmailButtonVariant] = useState('outlined');

  const handleEmailButtonClick = () => {
    setEmailButtonVariant('contained');
  };

  return (
    <>
      <Helmet>
        <title>404 Page Not Found | Minimal UI</title>
      </Helmet>


      <Container>
        <StyledContent sx={{ alignItems: 'center' }}>

        <Button padding="10px" size="large" variant="contained" component={RouterLink} to="/social-media">
          Social Media
        </Button>

        <Button
          to="#"
          size="large"
          variant={emailButtonVariant}
          component={RouterLink}
          color="error"
          onClick={handleEmailButtonClick}
        >
          E-mail
        </Button>
        
        </StyledContent>


      </Container>
    </>
  );
}
