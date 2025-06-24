import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Box, Typography, Button, IconButton, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import img1 from '../../assets/images/products/f1.jpg';
import img2 from '../../assets/images/products/f2.jpg';
import img3 from '../../assets/images/products/f3.jpg';
import img4 from '../../assets/images/products/f4.jpg';
import img5 from '../../assets/images/products/f5.jpg';
import img6 from '../../assets/images/products/f6.jpg';
import img7 from '../../assets/images/products/f7.jpg';
import img8 from '../../assets/images/products/n1.jpg';

const productsData = [
  { id: 1, image: img1, brand: 'Adidas', name: 'Astronaut Tee', price: 559, rating: 5, description: 'Cool astronaut-themed tee.' },
  { id: 2, image: img2, brand: 'Nike', name: 'Explorer Tee', price: 699, rating: 4, description: 'Explore in style.' },
  { id: 3, image: img3, brand: 'Puma', name: 'Galaxy Shirt', price: 399, rating: 4, description: 'Galaxy vibes shirt.' },
  { id: 4, image: img4, brand: 'Reebok', name: 'Comet Hoodie', price: 599, rating: 5, description: 'Warm comet hoodie.' },
  { id: 5, image: img5, brand: 'Adidas', name: 'Lunar Joggers', price: 399, rating: 3, description: 'Comfortable lunar joggers.' },
  { id: 6, image: img6, brand: 'Puma', name: 'Mars Jacket', price: 499, rating: 4, description: 'Mars-inspired jacket.' },
  { id: 7, image: img7, brand: 'Reebok', name: 'Pant', price: 299, rating: 5, description: 'Stylish pant.' },
  { id: 8, image: img8, brand: 'Nike', name: 'Shirt', price: 199, rating: 4, description: 'Basic everyday shirt.' }
];

const ProductDetail = ({ onAddToCart, wishlistItems, onToggleWishlist }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Product Not Found</Typography>
        <Button variant="contained" onClick={() => navigate('/shop')}>Back to Shop</Button>
      </Box>
    );
  }

  const isWishlisted = wishlistItems.some((item) => item.id === product.id);
  const similarProducts = productsData.filter((p) => p.id !== product.id);

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        px: { xs: 1, sm: 4, md: 8 },
        py: { xs: 3, md: 6 },
        boxSizing: 'border-box',
      }}
    >
      <IconButton
        onClick={() => navigate(-1)}
        sx={{ mb: { xs: 2, md: 4 }, color: '#088178' }}
        aria-label="go back"
        size="large"
      >
        <ArrowBackIcon fontSize="inherit" />
      </IconButton>

      {/* Product Box */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 3, md: 6 },
          bgcolor: 'white',
          borderRadius: 3,
          boxShadow: 3,
          p: { xs: 2, sm: 4, md: 6 },
          alignItems: 'center',
        }}
      >
        {/* Product Image */}
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            width: { xs: '100%', md: '50%' },
            maxHeight: { xs: 300, md: 400 },
            borderRadius: 3,
            objectFit: 'cover',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          }}
        />

        {/* Product Info */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontWeight: '700',
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              color: '#088178',
            }}
          >
            {product.name}
          </Typography>

          <Typography
            sx={{
              mb: 1,
              color: 'text.secondary',
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            Brand: <strong>{product.brand}</strong>
          </Typography>

          <Box sx={{ mb: 1 }}>
            {Array(product.rating)
              .fill()
              .map((_, i) => (
                <i
                  key={i}
                  className="fa-solid fa-star"
                  style={{ color: '#e6ae2c', marginRight: 4, fontSize: '1.1rem' }}
                  aria-label="star"
                ></i>
              ))}
          </Box>

          <Typography
            variant="h5"
            sx={{
              mb: 3,
              color: '#088178',
              fontWeight: '700',
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            ₹{product.price}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              lineHeight: 1.6,
              fontSize: { xs: '0.9rem', md: '1.1rem' },
              color: 'text.primary',
            }}
          >
            {product.description}
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: '#088178',
                color: 'white',
                px: 3,
                py: 1.5,
                fontWeight: '600',
                fontSize: { xs: '0.9rem', md: '1rem' },
                '&:hover': { bgcolor: '#0b9a8a' },
                boxShadow: 'none',
                flexGrow: { xs: 1, md: 'unset' },
              }}
              onClick={() => onAddToCart(product)}
            >
              <i className="fa-solid fa-cart-shopping" style={{ marginRight: 8 }}></i>
              Add to Cart
            </Button>

            <Button
              variant="outlined"
              sx={{
                color: isWishlisted ? '#e63946' : '#088178',
                borderColor: '#088178',
                px: 3,
                py: 1.5,
                fontWeight: '600',
                fontSize: { xs: '0.9rem', md: '1rem' },
                '&:hover': {
                  bgcolor: '#e6f2f1',
                  borderColor: '#0b9a8a',
                  color: isWishlisted ? '#b92d3e' : '#0b9a8a',
                },
                flexGrow: { xs: 1, md: 'unset' },
              }}
              onClick={() => onToggleWishlist(product)}
            >
              <i
                className={`fa${isWishlisted ? 's' : 'r'} fa-heart`}
                style={{ marginRight: 8 }}
              ></i>
              {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <Box sx={{ mt: { xs: 6, md: 10 }, boxSizing: 'border-box' }}>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: '700',
              fontSize: { xs: '1.5rem', md: '2rem' },
              color: '#088178',

              textAlign: 'center',
            }}
          >
            Similar Products
          </Typography>

          <Grid container spacing={2} justifyContent={'center'}>
            {similarProducts.map((item) => (
              <Grid item xs={6} sm={6} md={3} key={item.id} >
                <Box
                  component={Link}
                  to={`/product/${item.id}`}
                  sx={{
                    width: '100%',
                    textDecoration: 'none',
                    color: 'inherit',
                    bgcolor: 'white',
                    borderRadius: 3,
                    boxShadow: 2,
                    mr:18,
                    p: 1.5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'all 0.3s ease-in-out',
                    boxSizing: 'border-box',
                    '&:hover': {
                      boxShadow: 5,
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{
                      width: '100%',
                      height: 160,
                      objectFit: 'cover',
                      borderRadius: 2,
                      mb: 1.5,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: '700', textAlign: 'center' }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'gray', mt: 1, fontWeight: '600' }}
                  >
                    ₹{item.price}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default ProductDetail;
