import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Chip,
  Stack,
  TextField,
  Grid,
  IconButton,
  Button,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';

const productsData = [
  {
    id: 1,
    image: '/images/products/f1.webp',
    brand: 'Adidas',
    name: 'Astronaut Tee',
    price: 559,
    rating: 5,
    description: 'Comfortable cotton tee with astronaut print...',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Blue'],
  },
  {
    id: 2,
    image: '/images/products/f2.jpg',
    brand: 'Nike',
    name: 'Explorer Tee',
    price: 699,
    rating: 4,
    description: 'Explorer Tee made with breathable fabric...',
    sizes: ['S', 'M', 'L'],
    colors: ['Red', 'White', 'Grey'],
  },
  {
    id: 3,
    image: '/images/products/f3.jpg',
    brand: 'Puma',
    name: 'Galaxy Shirt',
    price: 399,
    rating: 4,
    description: 'Galaxy vibes shirt.',
    sizes: ['M', 'L', 'XL'],
    colors: ['Black', 'Blue'],
  },
  {
    id: 4,
    image: '/images/products/f4.jpg',
    brand: 'Reebok',
    name: 'Comet Hoodie',
    price: 599,
    rating: 5,
    description: 'Warm comet hoodie.',
    sizes: ['S', 'M', 'L'],
    colors: ['Grey', 'White', 'Navy'],
  },
  {
    id: 5,
    image: '/images/products/f5.jpg',
    brand: 'Adidas',
    name: 'Lunar Joggers',
    price: 399,
    rating: 3,
    description: 'Comfortable lunar joggers.',
    sizes: ['M', 'L', 'XL'],
    colors: ['Black', 'Grey'],
  },
  {
    id: 6,
    image: '/images/products/f6.jpg',
    brand: 'Puma',
    name: 'Mars Jacket',
    price: 499,
    rating: 4,
    description: 'Mars-inspired jacket.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Red', 'Black'],
  },
  {
    id: 7,
    image: '/images/products/f7.jpg',
    brand: 'Reebok',
    name: 'Pant',
    price: 299,
    rating: 5,
    description: 'Stylish pant.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Khaki', 'Grey', 'Black'],
  },
  {
    id: 8,
    image: '/images/products/n1.jpg',
    brand: 'Nike',
    name: 'Shirt',
    price: 199,
    rating: 4,
    description: 'Basic everyday shirt.',
    sizes: ['S', 'M', 'L'],
    colors: ['White', 'Black'],
  },
];

const Shoppage = ({ onAddToCart, wishlistItems = [], onToggleWishlist }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSizes, setSelectedSizes] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const handleSizeClick = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleShare = (product) => {
    const shareData = {
      title: product.name,
      text: `Check out this product: ${product.name} - ₹${product.price}`,
      url: `${window.location.origin}/product/${product.id}`,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`);
      alert('Link copied to clipboard!');
    }
  };

  const product = id ? productsData.find((p) => p.id === parseInt(id)) : null;

  if (id && !product) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Product Not Found</Typography>
        <Button variant="contained" onClick={() => navigate('/shop')}>Back to Shop</Button>
      </Box>
    );
  }

  if (product) {
    const isWishlisted = wishlistItems.some((item) => item.id === product.id);
    const similarProducts = productsData.filter((p) => p.id !== product.id);

    return (
      <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: '#f5f5f5', px: { xs: 1, sm: 4, md: 8 }, py: { xs: 3, md: 6 } }}>
        <IconButton onClick={() => navigate(-1)} sx={{ mb: { xs: 2, md: 4 }, color: '#088178' }}>
          <ArrowBackIcon fontSize="inherit" />
        </IconButton>

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

          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: '700', color: '#088178' }}>
              {product.name}
            </Typography>
            <Typography sx={{ mb: 1, color: 'text.secondary' }}>
              Brand: <strong>{product.brand}</strong>
            </Typography>
            <Box sx={{ mb: 1 }}>
              {Array(product.rating).fill().map((_, i) => (
                <i key={i} className="fa-solid fa-star" style={{ color: '#e6ae2c', marginRight: 4 }} />
              ))}
            </Box>
            <Typography variant="h5" sx={{ mb: 3, color: '#088178', fontWeight: '700' }}>
              ₹{product.price}
            </Typography>
            <Typography sx={{ mb: 4, lineHeight: 1.6, color: 'text.primary' }}>
              {product.description}
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                sx={{ bgcolor: '#088178', color: 'white', px: 3, py: 1.5, fontWeight: '600', '&:hover': { bgcolor: '#0b9a8a' } }}
                onClick={() => onAddToCart(product)}
              >
                <i className="fa-solid fa-cart-shopping" style={{ marginRight: 8 }} />
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
                  '&:hover': {
                    bgcolor: '#e6f2f1',
                    borderColor: '#0b9a8a',
                    color: isWishlisted ? '#b92d3e' : '#0b9a8a',
                  },
                }}
                onClick={() => onToggleWishlist(product)}
              >
                <i className={`fa${isWishlisted ? 's' : 'r'} fa-heart`} style={{ marginRight: 8 }} />
                {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
              </Button>
            </Box>
          </Box>
        </Box>

        {similarProducts.length > 0 && (
          <Box sx={{ mt: { xs: 6, md: 10 } }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: '700', color: '#088178', textAlign: 'center' }}>
              Similar Products
            </Typography>

            <Grid container spacing={2} justifyContent={'center'}>
              {similarProducts.map((item) => (
                <Grid item xs={6} sm={6} md={3} key={item.id}>
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
                      p: 1.5,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      transition: 'all 0.3s ease-in-out',
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
                    <Typography variant="subtitle1" sx={{ fontWeight: '700', textAlign: 'center' }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray', mt: 1, fontWeight: '600' }}>
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
  }

  const filteredProducts = productsData.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ p: { xs: 6, sm: 8, md: 10 } }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search products by name or brand..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 3,
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Box
              key={product.id}
              sx={{
                position: 'relative',
                bgcolor: 'white',
                borderRadius: 3,
                p: 2,
                boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                },
              }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare(product);
                }}
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  bgcolor: 'white',
                  boxShadow: 1,
                  '&:hover': { bgcolor: '#f0f0f0' },
                }}
              >
                <ShareIcon sx={{ color: '#088178' }} />
              </IconButton>

              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{
                  width: '100%',
                  height: 180,
                  objectFit: 'cover',
                  borderRadius: 2,
                  mb: 1,
                }}
              />
              <Typography sx={{ fontSize: 12, mb: 0.5, textTransform: 'uppercase', color: '#888' }}>
                {product.brand}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, color: '#222' }}>
                {product.name}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#088178', fontWeight: 'bold', mb: 1 }}>
                ₹{product.price}
              </Typography>

              <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                {product.sizes.map((size) => (
                  <Chip
                    key={size}
                    label={size}
                    size="small"
                    variant={selectedSizes[product.id] === size ? 'filled' : 'outlined'}
                    color={selectedSizes[product.id] === size ? 'primary' : 'default'}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSizeClick(product.id, size);
                    }}
                  />
                ))}
              </Stack>

              <Stack direction="row" spacing={1}>
                {product.colors.map((color) => (
                  <Chip key={color} label={color} size="small" />
                ))}
              </Stack>
            </Box>
          ))
        ) : (
          <Typography>No products found matching your search.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Shoppage;
