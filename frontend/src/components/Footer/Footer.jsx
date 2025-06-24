import React from 'react';
import logo from '../../assets/Images/mainlogo.png';
import appImg from '../Footer/app.jpg';
import playImg from '../Footer/play.jpg';
import payImg from '../Footer/pay.png';

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '75px',
    backgroundColor: '#ececec',
    flexWrap: 'wrap',
  };

  const textStyle = {
    color: 'rgb(109, 109, 109)',
    textDecoration: 'none',
  };

  const downloadImgStyle = {
    border: '1px solid #08817969',
    borderRadius: '7px',
    marginRight: '10px',
  };

  return (
    <footer>
      {/* Inline CSS for hover underline */}
      <style>
        {`
          .underline-hover {
            position: relative;
            display: inline-block;
            color: rgb(109, 109, 109);
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .underline-hover::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 0;
            height: 2px;
            background-color: #088178;
            transition: width 0.3s ease;
          }

          .underline-hover:hover {
            color: #088178;
          }

          .underline-hover:hover::after {
            width: 100%;
          }
        `}
      </style>

      <div id="footer" style={footerStyle}>
        <div className="contact">
          <a href="/">
            <img
              src={logo}
              width="160"
              height="50"
              alt="Main Logo"
              style={{ marginLeft: '-11px' }}
            />
          </a>
          <br /><br /><br />
          <h3>Contact</h3>
          <address>
            <p><b>Address:</b> Wellington Road, Street 32. Hyderabad</p>
            <p><b>Phone:</b> 123-456-7890</p>
            <p><b>Hours:</b> 10:00 - 18:00. Mon - Sat</p>
          </address>
          <h3>Follow Us</h3>
          <br />
          <div className="socials">
            <a href="#" style={textStyle}><i className="fa-brands fa-facebook-square"></i></a>{' '}
            <a href="#" style={textStyle}><i className="fa-brands fa-youtube"></i></a>{' '}
            <a href="#" style={textStyle}><i className="fa-brands fa-telegram"></i></a>{' '}
            <a href="#" style={textStyle}><i className="fa-brands fa-instagram"></i></a>{' '}
            <a href="#" style={textStyle}><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>

        <div className="about">
          <h3>About</h3>
          <br />
          {['About Us', 'Delivery Information', 'Privacy Policy', 'Terms & Conditions', 'Contact Us'].map((item, idx) => (
            <a key={idx} href="#" className="underline-hover" style={{ display: 'block', padding: '8px 0' }}>{item}</a>
          ))}
        </div>

        <div className="myaccount">
          <h3>My Account</h3>
          <br />
          {['Sign In', 'View Cart', 'My Wishlist', 'Track My Order', 'Help'].map((item, idx) => (
            <a key={idx} href="#" className="underline-hover" style={{ display: 'block', padding: '8px 0' }}>{item}</a>
          ))}
        </div>

        <div className="install">
          <h3>Install App</h3>
          <br />
          <p style={textStyle}>From App Store or Google Play</p>
          <div className="download">
            <a href="#"><img src={appImg} alt="App Store" style={downloadImgStyle} /></a>
            <a href="#"><img src={playImg} alt="Play Store" style={downloadImgStyle} /></a>
          </div>
          <p style={textStyle}>Secured Payment Gateways</p>
          <img src={payImg} alt="Payments" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
