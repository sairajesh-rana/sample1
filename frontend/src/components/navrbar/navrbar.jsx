import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Badge } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import mainlogo from '../../assets/Images/mainlogo.png';

const Header = ({ cartCount = 0, wishlistCount = 0 }) => {
  const location = useLocation();

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          display: inline-block;
          color: #333;
          font-weight: 600;
          padding-bottom: 4px;
          transition: color 0.3s ease;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: #088178;
          transition: width 0.3s ease-in-out;
          border-radius: 2px;
        }
        .nav-link:hover,
        .nav-link.active {
          color: #088178;
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .mobile-nav-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #666;
          font-size: 11.5px;
          font-weight: 600;
          transition: color 0.25s ease;
          gap: 3px;
          user-select: none;
        }
        .mobile-nav-link i {
          font-size: 20px;
          line-height: 1;
          transition: color 0.25s ease;
        }
        .mobile-nav-link.active,
        .mobile-nav-link:hover {
          color: #088178;
        }
        .mobile-nav-link .MuiBadge-badge {
          font-weight: 700;
          font-size: 11px;
          min-width: 16px;
          height: 16px;
          top: 4px;
          right: -10px;
          padding: 0 4px;
          border-radius: 8px;
          background-color: #088178;
          color: white;
          box-shadow: 0 0 3px rgba(0,0,0,0.15);
        }

        .navbar-brand img {
          object-fit: contain;
          filter: drop-shadow(0 0 2px rgba(0,0,0,0.1));
          transition: filter 0.3s ease;
        }
        .navbar-brand:hover img {
          filter: drop-shadow(0 0 4px #088178);
        }
      `}</style>

      {/* Desktop Navbar */}
      <header
        className="d-none d-lg-block"
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: 1050,
          top: 0,
          backgroundColor: '#fff',
          boxShadow: '0 2px 8px rgb(0 0 0 / 0.1)',
        }}
      >
        <nav className="navbar navbar-expand-lg px-4 py-2">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={mainlogo} width="140" height="40" alt="Main Company Logo" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav align-items-center gap-4 fw-semibold">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/shop', label: 'Shop' },
                  { to: '/contact', label: 'Contact Us' },
                ].map(({ to, label }) => (
                  <li className="nav-item" key={to}>
                    <Link
                      className={`nav-link${location.pathname === to ? ' active' : ''}`}
                      to={to}
                    >
                      {label}
                    </Link>
                  </li>
                ))}

                <li className="nav-item">
                  <Link
                    className={`nav-link position-relative${location.pathname === '/wishlist' ? ' active' : ''}`}
                    to="/wishlist"
                    aria-label="Wishlist"
                  >
                    <Badge badgeContent={wishlistCount} color="secondary">
                      <i
                        className="fa fa-heart fa-lg"
                        style={{ color: wishlistCount > 0 ? '#e53935' : 'inherit' }}
                      ></i>
                    </Badge>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className={`nav-link position-relative${location.pathname === '/cart' ? ' active' : ''}`}
                    to="/cart"
                    aria-label="Cart"
                  >
                    <Badge badgeContent={cartCount} color="primary">
                      <i className="fa fa-shopping-bag fa-lg"></i>
                    </Badge>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navbar */}
      <nav
        className="d-lg-none bg-white shadow-lg fixed-bottom border-top"
        style={{ zIndex: 1100 }}
        aria-label="Mobile bottom navigation"
      >
        <div className="d-flex justify-content-around py-2">
          {[
            { to: '/', icon: 'fa-home', label: 'Home' },
            { to: '/shop', icon: 'fa-store', label: 'Shop' },
            { to: '/contact', icon: 'fa-envelope', label: 'Contact' },
            {
              to: '/wishlist',
              icon: 'fa-heart',
              label: 'Wishlist',
              badgeCount: wishlistCount,
              badgeColor: 'secondary',
              badgeStyle: { color: wishlistCount > 0 ? '#e53935' : undefined },
            },
            {
              to: '/cart',
              icon: 'fa-shopping-bag',
              label: 'Cart',
              badgeCount: cartCount,
              badgeColor: 'primary',
            },
          ].map(({ to, icon, label, badgeCount, badgeColor, badgeStyle }) => (
            <Link
              key={to}
              to={to}
              className={`text-decoration-none mobile-nav-link${location.pathname === to ? ' active' : ''}`}
              aria-current={location.pathname === to ? 'page' : undefined}
            >
              <Badge
                badgeContent={badgeCount}
                color={badgeColor}
                sx={{ '& .MuiBadge-badge': { fontWeight: 700, fontSize: 11 } }}
              >
                <i className={`fa ${icon}`} style={badgeStyle}></i>
              </Badge>
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
