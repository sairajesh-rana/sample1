import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Box, Typography, Button, Container } from '@mui/material';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      new bootstrap.Carousel(carouselRef.current, {
        interval: 7000,
        ride: 'carousel',
        touch: true,
        pause: false,
        wrap: true,
      });
    }
  }, []);

  const imageSx = {
    height: {
      xs: '250px',
      sm: '350px',
      md: '550px',
    },
    objectFit: 'cover',
    width: '100%',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.1))',
    display: 'flex',
    alignItems: 'center',
    zIndex: 2,
    color: '#fff',
    px: {
      xs: 2,
      sm: 4,
      md: 6,
    },
  };

  const headingStyle = {
    fontWeight: 'bold',
    fontSize: {
      xs: '1.6rem',
      sm: '2.2rem',
      md: '3rem',
    },
  };

  const subheadingStyle = {
    mt: 1,
    fontSize: {
      xs: '0.9rem',
      sm: '1.1rem',
      md: '1.25rem',
    },
  };

  const buttonSx = (bgColor) => ({
    mt: 2,
    bgcolor: bgColor,
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
    },
    px: {
      xs: 2,
      sm: 3,
    },
    py: {
      xs: 1,
      sm: 1.5,
    },
    '&:hover': {
      backgroundColor: bgColor,
      opacity: 0.9,
    },
  });

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide position-relative"
      ref={carouselRef}
    >
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active position-relative">
          <Box component="img" src="/images/b70.jpg" alt="Slide 1" sx={imageSx} />
          <Box sx={overlayStyle}>
            <Container>
              <Typography sx={headingStyle}>Super Deals</Typography>
              <Typography sx={subheadingStyle}>On Latest Collections</Typography>
              <Button variant="contained" sx={buttonSx('#1976d2')}>Shop Now</Button>
            </Container>
          </Box>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item position-relative">
          <Box component="img" src="/images/b45.jpg" alt="Slide 2" sx={imageSx} />
          <Box sx={overlayStyle}>
            <Container>
              <Typography sx={headingStyle}>Up to 70% Off</Typography>
              <Typography sx={subheadingStyle}>Exclusive Summer Sale</Typography>
              <Button variant="contained" sx={buttonSx('#d32f2f')}>Shop Now</Button>
            </Container>
          </Box>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item position-relative">
          <Box component="img" src="/images/b50.jpg" alt="Slide 3" sx={imageSx} />
          <Box sx={overlayStyle}>
            <Container>
              <Typography sx={headingStyle}>New Arrivals</Typography>
              <Typography sx={subheadingStyle}>Trendy & Stylish</Typography>
              <Button variant="contained" sx={buttonSx('#388e3c')}>Shop Now</Button>
            </Container>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
