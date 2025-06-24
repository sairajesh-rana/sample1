import React from 'react';
import { Button } from '@mui/material';

const bannerImage = '/images/banner/b2.jpg';

const OffBanner1 = () => {
  const sectionStyle = {
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '40vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  const h4Style = {
    color: '#eaebf0',
  };

  const h2Style = {
    color: '#eaebf0',
    padding: '20px 0',
    textAlign: 'center',
  };

  return (
    <section style={sectionStyle}>
      <h4 style={h4Style}>Repair Services</h4>
      <h2 style={h2Style}>Up to 70% Off - All T-Shirts & Accessories</h2>
      <Button
        variant="text"
        sx={{
          fontFamily: 'sans-serif',
          background: '#088178',
          color: 'white',
          textTransform: 'none',
          fontSize: '16px',
          fontWeight: 'bold',
          position: 'relative',
          overflow: 'hidden',
          '& span': {
            position: 'relative',
            zIndex: 10000,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            bottom: 1,
            width: '0%',
            height: '2px',
            backgroundColor: '#fff',
            transition: 'width 0.3s ease',
          },
          '&:hover::after': {
            width: '100%',
          },
        }}
      >
        <span>Explore More</span>
      </Button>
    </section>
  );
};

export default OffBanner1;
