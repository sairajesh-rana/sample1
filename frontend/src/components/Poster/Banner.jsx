import React from 'react';
import { Button } from '@mui/material';

const bannerSmall1 = '/images/banner/b7.jpg';
const bannerSmall2 = '/images/banner/b4.jpg';
const bannerSmall3 = '/images/banner/b18.jpg';

const Banners = () => {
  const sectionStyle = { margin: '0 20px' };
  const bigBannerContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '16px',
  };

  const videoBanner = {
    position: 'relative',
    overflow: 'hidden',
    minWidth: '300px',
    flex: '1 1 300px',
    margin: '10px',
    height: '280px',
    display: 'flex',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
  };

  const bannerVideo = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
  };

  const bannerContent = {
    position: 'relative',
    zIndex: 1,
    padding: '20px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'left',
    height: '100%',
    width: '100%',
    textShadow: '0 2px 8px rgba(0,0,0,0.5)',
  };

  const smallBannersContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '16px',
    marginTop: '24px',
  };

  const smallBannerStyle = (image) => ({
    backgroundImage: `url(${image})`,
    minWidth: '260px',
    flex: '1 1 260px',
    height: '180px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '20px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    textShadow: '0 2px 6px rgba(0,0,0,0.4)',
  });

  const h2Style = {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '8px',
  };

  const h5Style = {
    color: '#FFD700',
    fontSize: '14px',
    fontWeight: '500',
  };

  return (
    <section id="banners" className="section-p1" style={sectionStyle}>
      <style>{`
        @media (max-width: 576px) {
          #banners {
            margin: 0 10px !important;
          }
          .big-banners-1, .big-banners-2 {
            min-width: 100% !important;
            height: 220px !important;
          }
          .banner-content {
            padding: 15px !important;
          }
          .banner-content h2 {
            font-size: 1.2rem !important;
          }
          .banner-content h4 {
            font-size: 0.9rem !important;
          }
          .banner-content span {
            font-size: 0.8rem !important;
          }
          .MuiButton-outlined {
            font-size: 0.75rem !important;
            padding: 6px 12px !important;
          }
          .small-banners-1, .small-banners-2, .small-banners-3 {
            min-width: 100% !important;
            height: 150px !important;
            border-radius: 10px !important;
          }
        }
      `}</style>

      <div className="big-banners" style={bigBannerContainer}>
        <div className="big-banners-1" style={videoBanner}>
          <video autoPlay muted loop style={bannerVideo}>
            <source src="/videos/banner1.mp4" type="video/mp4" />
          </video>
          <div className="banner-content" style={bannerContent}>
            <h4>crazy deals</h4>
            <h2>buy 1 get 1 free</h2>
            <span>The best classic dress is on sale at coro</span>
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                color: '#fff',
                borderColor: '#fff',
                fontWeight: '600',
                '&:hover': {
                  backgroundColor: '#088178',
                  borderColor: '#088178',
                },
              }}
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="big-banners-2" style={videoBanner}>
          <video autoPlay muted loop style={bannerVideo}>
            <source src="/videos/banner2.mp4" type="video/mp4" />
          </video>
          <div className="banner-content" style={bannerContent}>
            <h4>spring/summer</h4>
            <h2>upcoming season</h2>
            <span>The best classic dress is on sale at cara</span>
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                color: '#fff',
                borderColor: '#fff',
                fontWeight: '600',
                '&:hover': {
                  backgroundColor: '#088178',
                  borderColor: '#088178',
                },
              }}
            >
              Collection
            </Button>
          </div>
        </div>
      </div>

      <div className="small-banners" style={smallBannersContainer}>
        <div className="small-banners-1" style={smallBannerStyle(bannerSmall1)}>
          <h2 style={h2Style}>SEASONAL SALE</h2>
          <h5 style={h5Style}>Winter Collection 50% Off</h5>
        </div>
        <div className="small-banners-2" style={smallBannerStyle(bannerSmall2)}>
          <h2 style={h2Style}>NEW FOOTWEAR COLLECTION</h2>
          <h5 style={h5Style}>Spring/Summer 2022</h5>
        </div>
        <div className="small-banners-3" style={smallBannerStyle(bannerSmall3)}>
          <h2 style={h2Style}>T-SHIRTS</h2>
          <h5 style={h5Style}>New Trendy Prints</h5>
        </div>
      </div>
    </section>
  );
};

export default Banners;
