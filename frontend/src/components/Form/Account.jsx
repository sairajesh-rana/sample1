import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  Button,
  Avatar,
  TextField,
  Stack,
} from '@mui/material';

const ProfileView = ({ accountData, setAccountData }) => {
  const navigate = useNavigate();

  const [profilePhoto, setProfilePhoto] = useState(accountData?.profilePhoto || '');
  const [editMode, setEditMode] = useState(false);

  const [name, setName] = useState(accountData?.name || '');
  const [email, setEmail] = useState(accountData?.email || '');

  if (!accountData) {
    return <Typography textAlign="center">Loading profile...</Typography>;
  }

  // Upload profile photo
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result); // Save image as base64 data URL
      };
      reader.readAsDataURL(file);
    }
  };

  // Save changes
  const handleSaveChanges = () => {
    setAccountData({
      name,
      email,
      profilePhoto,
    });
    setEditMode(false);
  };

  const handleWishlistClick = () => {
    navigate('/wishlist');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'linear-gradient(135deg, #08a88a 0%, #3db9a7 100%)',
        py: 4,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: '100%',
          maxWidth: 450,
          p: 4,
          borderRadius: 4,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" color="primary" gutterBottom>
          Your Account Profile
        </Typography>

        {/* Profile Photo */}
        <Box sx={{ mb: 3 }}>
          <Avatar
            src={profilePhoto || 'https://via.placeholder.com/120'}
            alt="Profile"
            sx={{
              width: 120,
              height: 120,
              mx: 'auto',
              border: '3px solid #088178',
            }}
          />
          {editMode && (
            <Box mt={2}>
              <Button variant="outlined" component="label" fullWidth>
                Upload Photo
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handlePhotoUpload}
                />
              </Button>
            </Box>
          )}
        </Box>

        {/* Form */}
        <Stack spacing={2} component="form" onSubmit={(e) => e.preventDefault()}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            InputProps={{
              readOnly: !editMode,
            }}
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            InputProps={{
              readOnly: !editMode,
            }}
          />

          {/* Action Buttons */}
          {editMode ? (
            <Button
              variant="contained"
              sx={saveButtonStyle}
              onClick={handleSaveChanges}
            >
              Save Changes
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={editButtonStyle}
              onClick={() => setEditMode(true)}
            >
              Edit Account
            </Button>
          )}
        </Stack>

        {/* Extra Actions */}
        <Stack
          direction="row"
          spacing={2}
          mt={4}
          justifyContent="center"
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCartClick}
          >
            Go to Cart
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleWishlistClick}
          >
            Wishlist
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

// Custom styles
const saveButtonStyle = {
  mt: 2,
  bgcolor: '#088178',
  '&:hover': {
    bgcolor: '#0b9a8a',
  },
};

const editButtonStyle = {
  mt: 2,
  bgcolor: '#088178',
  '&:hover': {
    bgcolor: '#0b9a8a',
  },
};

export default ProfileView;
