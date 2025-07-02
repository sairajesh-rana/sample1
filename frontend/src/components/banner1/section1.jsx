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

  const imageStyle = {
     height: {
      xs: '250px',
      sm: '350px',
      md: '300px',
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
    color: '#fff',
  };

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide position-relative"
      ref={carouselRef}
    >
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active position-relative">
          <img src="/images/b70.jpg" style={imageStyle} alt="Slide 1" />
          <Box sx={overlayStyle}>
            <Container>
              <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Super Deals</Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>On Latest Collections</Typography>
              <Button variant="contained" sx={{ mt: 2, bgcolor: '#1976d2' }}>Shop Now</Button>
            </Container>
          </Box>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item position-relative">
          <img src="/images/b45.jpg" style={imageStyle} alt="Slide 2" />
          <Box sx={overlayStyle}>
            <Container>
              <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Up to 70% Off</Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>Exclusive Summer Sale</Typography>
              <Button variant="contained" sx={{ mt: 2, bgcolor: '#d32f2f' }}>Shop Now</Button>
            </Container>
          </Box>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item position-relative">
          <img src="/images/b50.jpg" style={imageStyle} alt="Slide 3" />
          <Box sx={overlayStyle}>
            <Container>
              <Typography variant="h3" sx={{ fontWeight: 'bold' }}>New Arrivals</Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>Trendy & Stylish</Typography>
              <Button variant="contained" sx={{ mt: 2, bgcolor: '#388e3c' }}>Shop Now</Button>
            </Container>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
