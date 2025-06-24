import React from 'react';
import '../banner1/HeroSection.css';
import Button from '@mui/material/Button';

const HeroSection = () => (
  <section id="hero">
    <h4>Trade-in-offer</h4>
    <h2>Super value deals</h2>
    <h1>On all products</h1>
    <p>Save more coupons & up to 70% off!</p>
    <Button variant="contained" color="primary" size="large">
      Shop now
    </Button>
  </section>
);

export default HeroSection;
