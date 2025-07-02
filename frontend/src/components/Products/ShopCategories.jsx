import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Chip, Stack, TextField } from "@mui/material";

const productsData = [
  {
    id: 1,
    image: "/images/products/f1.jpg",
    brand: "Adidas",
    name: "Astronaut Tee",
    price: 559,
    rating: 5,
    description: "Comfortable cotton tee with astronaut print...",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Blue"],
  },
  {
    id: 2,
    image: "/images/products/f2.jpg",
    brand: "Nike",
    name: "Explorer Tee",
    price: 699,
    rating: 4,
    description: "Explorer Tee made with breathable fabric...",
    sizes: ["S", "M", "L"],
    colors: ["Red", "White", "Grey"],
  },
  {
    id: 3,
    image: "/images/products/f3.jpg",
    brand: "Puma",
    name: "Galaxy Shirt",
    price: 399,
    rating: 4,
    description: "Galaxy vibes shirt.",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Blue"],
  },
  {
    id: 4,
    image: "/images/products/f4.jpg",
    brand: "Reebok",
    name: "Comet Hoodie",
    price: 599,
    rating: 5,
    description: "Warm comet hoodie.",
    sizes: ["S", "M", "L"],
    colors: ["Grey", "White", "Navy"],
  },
  {
    id: 5,
    image: "/images/products/f5.jpg",
    brand: "Adidas",
    name: "Lunar Joggers",
    price: 399,
    rating: 3,
    description: "Comfortable lunar joggers.",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Grey"],
  },
  {
    id: 6,
    image: "/images/products/f6.jpg",
    brand: "Puma",
    name: "Mars Jacket",
    price: 499,
    rating: 4,
    description: "Mars-inspired jacket.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Black"],
  },
  {
    id: 7,
    image: "/images/products/f7.jpg",
    brand: "Reebok",
    name: "Pant",
    price: 299,
    rating: 5,
    description: "Stylish pant.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Khaki", "Grey", "Black"],
  },
  {
    id: 8,
    image: "/images/products/n1.jpg",
    brand: "Nike",
    name: "Shirt",
    price: 199,
    rating: 4,
    description: "Basic everyday shirt.",
    sizes: ["S", "M", "L"],
    colors: ["White", "Black"],
  },
];

const ShopCategories = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeClick = (productId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  const filteredProducts = productsData.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ p: { xs: 6, sm: 8, md: 10 } }}>
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search products by name or brand..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Box
              key={product.id}
              sx={{
                bgcolor: "white",
                borderRadius: 3,
                p: 2,
                boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
                },
              }}
              onClick={() => navigate(`/product/${product.id}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && navigate(`/product/${product.id}`)
              }
              aria-label={`View ${product.name} details`}
            >
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 1,
                }}
              />
              <Typography
                sx={{
                  color: "#888",
                  fontSize: 12,
                  mb: 0.5,
                  textTransform: "uppercase",
                }}
              >
                {product.brand}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 0.5,
                  color: "#222",
                }}
              >
                {product.name}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "#088178", fontWeight: "bold", mb: 1 }}
              >
                ₹{product.price}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                {product.sizes.map((size) => (
                  <Chip
                    key={size}
                    label={size}
                    size="small"
                    variant={selectedSizes[product.id] === size ? "filled" : "outlined"}
                    color={selectedSizes[product.id] === size ? "primary" : "default"}
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

export default ShopCategories;
