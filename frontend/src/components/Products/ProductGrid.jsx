import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom'; 
import Img1 from '../../assets/images/products/f1.jpg';
import img2 from '../../assets/images/products/f2.jpg';
import img3 from '../../assets/images/products/f3.jpg';
import img4 from '../../assets/images/products/f4.jpg';
import img5 from '../../assets/images/products/f5.jpg';
import img6 from '../../assets/images/products/f6.jpg';
import img7 from '../../assets/images/products/f7.jpg';
import img8 from '../../assets/images/products/n1.jpg';

const productsData = [
  { id: 1, image: Img1, brand: 'Adidas', name: 'Astronaut Tee', price: 559, rating: 5 },
  { id: 2, image: img2, brand: 'Nike', name: 'Explorer Tee', price: 699, rating: 4 },
  { id: 3, image: img3, brand: 'Puma', name: 'Galaxy Shirt', price: 399, rating: 4 },
  { id: 4, image: img4, brand: 'Reebok', name: 'Comet Hoodie', price: 599, rating: 5 },
  { id: 5, image: img5, brand: 'Adidas', name: 'Lunar Joggers', price: 399, rating: 3 },
  { id: 6, image: img6, brand: 'Puma', name: 'Mars Jacket', price: 499, rating: 4 },
  { id: 7, image: img7, brand: 'Reebok', name: 'Pant', price: 299, rating: 5 },
  { id: 8, image: img8, brand: 'Nike', name: 'Shirt', price: 199, rating: 4 }
];

const ProductGrid = ({ onAddToCart, onToggleWishlist, wishlistItems }) => {
  const [visibleCount] = useState(4); 
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const navigate = useNavigate(); 
  const handleRemoveFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleShare = (product) => {
    const shareData = {
      title: product.name,
      text: `Check out this product: ${product.name} - ₹${product.price}`,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`);
      alert('Link copied to clipboard!');
    }
  };

  const isWishlisted = (productId) => wishlistItems.some((item) => item.id === productId);

  return (
    <div className="container mt-5 pt-3">
      <div className="row justify-content-center">
        {productsData.slice(0, visibleCount).map((product) => {
          const isHovered = hoveredProductId === product.id;
          return (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div
                className="product-card bg-white position-relative"
                style={{
                  border: '1px solid #ebebeb',
                  borderRadius: '25px',
                  padding: '1.25rem',
                  boxShadow: isHovered ? '0 12px 30px rgba(0, 0, 0, 0.08)' : '0 8px 20px rgba(0, 0, 0, 0.04)',
                  transition: 'box-shadow 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'default',
                }}
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(null)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  onClick={() => setSelectedImage(product.image)}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '25px',
                    marginBottom: '1rem',
                    cursor: 'pointer',
                  }}
                />

                {/* Wishlist and Share buttons */}
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    display: 'flex',
                    gap: '10px',
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '1.4rem',
                      color: isWishlisted(product.id) ? '#e63946' : '#aaa',
                      cursor: 'pointer',
                    }}
                    aria-label={isWishlisted(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    title="Toggle Wishlist"
                  >
                    <i className={`fa${isWishlisted(product.id) ? 's' : 'r'} fa-heart`}></i>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(product);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '1.4rem',
                      color: '#555',
                      cursor: 'pointer',
                    }}
                    aria-label="Share Product"
                    title="Share Product"
                  >
                    <i className="fa-solid fa-share-nodes"></i>
                  </button>
                </div>

                <span
                  className="product-brand"
                  style={{ color: '#969696', fontWeight: '500', lineHeight: '1.5rem' }}
                >
                  {product.brand}
                </span>
                <h4
                  className="product-name"
                  style={{ fontSize: '1.15rem', color: '#292929', marginBottom: '0.5rem' }}
                >
                  {product.name}
                </h4>
                <div className="stars" style={{ color: '#e6ae2c', marginBottom: '0.75rem' }}>
                  {[...Array(product.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <h4 className="product-price" style={{ color: '#088178', marginBottom: '1rem' }}>
                  ₹{product.price}
                </h4>
                <button
                  onClick={() => onAddToCart(product)}
                  className="add-to-cart-btn"
                  style={{
                    color: '#088178',
                    backgroundColor: '#c7e9e75e',
                    padding: '12px 20px',
                    borderRadius: '50px',
                    textAlign: 'center',
                    fontWeight: '600',
                    userSelect: 'none',
                    cursor: 'pointer',
                    display: 'inline-block',
                    width: 'auto',
                    alignSelf: 'center',
                    transition: 'background-color 0.3s ease',
                    border: 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b0dbd9')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#c7e9e75e')}
                  aria-label={`Add ${product.name} to cart`}
                >
                  <i className="fa-solid fa-cart-shopping" style={{ marginRight: '8px' }}></i>
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All button - navigate to /shop */}
      <div className="d-flex justify-content-center mt-4">
        <Button
          variant="contained"
          sx={{
            borderRadius: '20px',
            mb: 3,
            px: 6,
            backgroundColor: '#088178',
            '&:hover': { backgroundColor: '#066d64' },
            fontWeight: 'bold',
            fontSize: '1rem',
          }}
          onClick={() => navigate('/shop')}
        >
          View All
        </Button>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} maxWidth="md" fullWidth>
        <DialogTitle sx={{ m: 0, p: 1, textAlign: 'right' }}>
          <IconButton aria-label="close" onClick={() => setSelectedImage(null)} sx={{ color: '#000' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <img
          src={selectedImage}
          alt="Zoomed In"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
        />
      </Dialog>
    </div>
  );
};

export default ProductGrid;
