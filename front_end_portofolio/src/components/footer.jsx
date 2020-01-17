import React from 'react';
import '../styles/footer.css';
import '../styles/bootstrap.min.css';
import fb from '../images/facebook.png';
import tw from '../images/twitter.png';
import dr from '../images/dribbble.png';
import lin from '../images/linkedIn.png';
import logo from '../images/logoM.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    // <!-- Site footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-9">
            <h6 style={{ fontWeight: 'bold' }}>About Us</h6>
            <p></p>
            <p class="text-justify">
              Manggaleh.com Handles Everything From Marketing and Payments, To Secure Checkout and
              Shipping. Grow Your Business With Our Unified Platform. Start 14 Day Free Trial Now.
              Fulfillment Integration. Fraud Prevention. Full Blogging Platform. SSL Certificate.
            </p>
          </div>
          <div class="col-xs-6 col-md-3">
            <Link to="/">
              <img
                class="footer-logo"
                style={{ width: '80%', marginLeft: '19%', marginTop: '-20px' }}
                src={logo}
                alt="logo manggaleh.com"
              ></img>
            </Link>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div style={{ marginTop: '20px' }} class="col-md-9 col-sm-6 col-xs-12">
              <p class="copyright-text" style={{ textAlign: 'center' }}>
                Copyright &copy; 2020 All Rights Reserved by <Link to="/">manggaleh.com</Link>
              </p>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 social-media">
              <ul class="social-icons" style={{ display: 'flex' }}>
                <li>
                  <Link to="/">
                    <img
                      class="facebook"
                      style={{ marginLeft: '19%', marginTop: '-20px' }}
                      src={fb}
                      alt="facebook"
                    ></img>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img
                      class="twitter"
                      style={{ marginLeft: '19%', marginTop: '-20px' }}
                      src={tw}
                      alt="twitter"
                    ></img>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img
                      class="driblle"
                      style={{ marginLeft: '19%', marginTop: '-20px' }}
                      src={dr}
                      alt="dribble"
                    ></img>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img
                      class="linkedin"
                      style={{ marginLeft: '19%', marginTop: '-20px' }}
                      src={lin}
                      alt="linkedin"
                    ></img>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
