import React from "react";

const WishlistPage = ({ wishlistItems, onToggleWishlist, onAddToCart }) => {
  return (
    <div style={{ maxWidth: 900, margin: "4rem auto", padding: "1rem" }}>
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {wishlistItems.map((item) => (
            <li key={item.id} style={{ marginBottom: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  style={{ borderRadius: 8, objectFit: "cover" }}
                />
                <div>
                  <h4>{item.name}</h4>
                  <p>Price: ₹{item.price}</p>
                  <button
                    onClick={() => onToggleWishlist(item)}
                    style={{
                      padding: "6px 12px",
                      marginBottom: "6px",
                      backgroundColor: "#e91e63",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Remove from Wishlist
                  </button>
                  <br />
                  <button
                    style={{
                      backgroundColor: "#088178",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => onAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistPage;
