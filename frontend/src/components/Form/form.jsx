import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import newsletterBg from '../../assets/images/banner/b14.png';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSignup = () => {
    if (email) {
      alert(`Signed up with: ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email.');
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#041e42',
        backgroundImage: `url(${newsletterBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '180px',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: { xs: '20px', sm: '30px 75px' },
        flexWrap: 'wrap',
        gap: 3,
        borderRadius: '12px',
      }}
    >
      {/* Text */}
      <Box
        sx={{
          flex: '1 1 300px',
          textAlign: { xs: 'center', sm: 'left' },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: '#fff',
            fontWeight: 600,
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
            mb: 1,
          }}
        >
          Sign Up For Newsletters
        </Typography>
        <Typography sx={{ color: '#aaa', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
          Get e-mail updates about our latest shop and{' '}
          <Box component="span" sx={{ color: '#d8b61d', fontWeight: 500 }}>
            special offers
          </Box>
        </Typography>
      </Box>

      {/* Form */}
      <Box
        sx={{
          display: 'flex',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 0 5px rgba(0,0,0,0.2)',
          width: { xs: '100%', sm: 'auto' },
          justifyContent: 'center',
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            backgroundColor: '#fff',
            input: { padding: '14px', fontSize: '16px' },
            width: { xs: '100%', sm: '300px' },
            '& fieldset': { border: 'none' },
          }}
        />
        <Button
          variant="contained"
          onClick={handleSignup}
          sx={{
            backgroundColor: '#088178',
            color: '#fff',
            padding: '14px 24px',
            fontSize: '16px',
            borderRadius: 0,
            '&:hover': {
              backgroundColor: '#066d64',
            },
          }}
        >
          Sign Up 
        </Button>
      </Box>
    </Box>
  );
};

export default Newsletter;
