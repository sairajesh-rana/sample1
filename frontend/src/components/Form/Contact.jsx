import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Container,
} from '@mui/material';
import ProfileView from '../Form/Account';

const CombinedAccountFlow = () => {
  const [step, setStep] = useState('signup');
  const [accountData, setAccountData] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  // Signup form
  const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
      e.preventDefault();
      if (name.trim() && email.trim() && password.trim()) {
        setAccountData({ name, email, password });
        setStep('login');
      } else {
        alert('Please fill all fields.');
      }
    };

    return (
      <Paper elevation={4} sx={formBoxStyle}>
        <Typography variant="h4" color="primary" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSignup}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={submitBtnStyle}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    );
  };

  // Login form
  const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
      e.preventDefault();
      if (email === accountData.email && password === accountData.password) {
        setLoggedIn(true);
        setStep('profile');
      } else {
        alert('Invalid email or password.');
      }
    };

    return (
      <Paper elevation={4} sx={formBoxStyle}>
        <Typography variant="h4" color="primary" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={submitBtnStyle}
          >
            Login
          </Button>
        </form>
      </Paper>
    );
  };

  return (
    <Box sx={pageStyle}>
      <Container maxWidth="sm">
        {step === 'signup' && <SignupForm />}
        {step === 'login' && <LoginForm />}
        {step === 'profile' && loggedIn && (
          <ProfileView accountData={accountData} setAccountData={setAccountData} />
        )}
      </Container>
    </Box>
  );
};

// Styles
const pageStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bgcolor: 'linear-gradient(135deg, #08a88a 0%, #3db9a7 100%)',
  py: 6,
};

const formBoxStyle = {
  p: 4,
  borderRadius: 4,
  backgroundColor: 'white',
};

const submitBtnStyle = {
  mt: 2,
  backgroundColor: '#088178',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#0b9a8a',
  },
};

export default CombinedAccountFlow;
