import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState } from "react";

import Header from "./components/navrbar/navrbar";
import WishlistPage from "./components/Products/WishlistPage";
import ProductGrid from "./components/Products/ProductGrid";
import HeroSection from "./components/banner1/section1";
import CartPage from "./components/Products/cartModel";
import ShopCategories from "./components/Products/ShopCategories";
import Footer from "./components/Footer/Footer";
import CombinedAccountFlow from "./components/Form/Contact";
import Banners from "./components/Poster/Banner";
import OffBanner1 from "./components/Poster/Poster";
import ProductDetail from "./components/Products/ProductDetail"; 
import ProfileView from "./components/Form/Account";

const AppContent = () => {
  const location = useLocation();

  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleChangeQuantity = (productId, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleToggleWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const totalCartCount = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  return (
    <>
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlistItems.length}
      />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ProductGrid
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                wishlistItems={wishlistItems}
              />
            </>
          }
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
              onChangeQuantity={handleChangeQuantity}
            />
          }
        />

        {/* Wishlist */}
        <Route
          path="/wishlist"
          element={
            <WishlistPage
              wishlistItems={wishlistItems}
              onToggleWishlist={handleToggleWishlist}
              onAddToCart={handleAddToCart}
            />
          }
        />

        {/* Shop */}
        <Route
          path="/shop"
          element={
            <ShopCategories
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlistItems={wishlistItems}
            />
          }
        />

        {/* Product Detail (NEW) */}
        <Route
          path="/product/:id"
          element={
            <ProductDetail
              onAddToCart={handleAddToCart}
              wishlistItems={wishlistItems}
              onToggleWishlist={handleToggleWishlist}
            />
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProfileView
              cartCount={cartItems.length}
              wishlistCount={wishlistItems.length}
            />
          }
        />

        {/* Contact */}
        <Route path="/contact" element={<CombinedAccountFlow />} />
      </Routes>

      {location.pathname === "/" && (
        <>
          <OffBanner1 />
          <Banners />
          <Footer />
        </>
      )}
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
