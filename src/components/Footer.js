import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="container" data-aos="fade-right">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>About Us</h4>
              <ul>
                <li>
                  <i className="ion-ios-arrow-forward"></i> <a href="/">Home</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-forward"></i> <a href="/form">Get Quote</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-forward"></i> <a href="/Design">Design Ideas</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-forward"></i> <a href="/Visit">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="ion-ios-arrow-forward"></i> <a href="/kitchen">Kitchen</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-forward"></i> <a href="/Wardrobe">Wardrobes</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-forward"></i> <a href="/masterbedroom">Bedroom Sets</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-forward"></i> <a href="/Design">Full Home</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact" style={{ fontSize: '16px' }}>
              <h4>Contact Us</h4>
              <p>
                Classic Interio: <br />
                Shree Lakshmi Appartment,
                <br />
                Jehan Circle, Nashik, Maharashtra 422013
                <br />
                <strong>Phone:</strong> +91 9823646644
                <br />
                <strong>Email:</strong> classicinterio.in@gmail.com
                <br />
              </p>

              <div className="social-links">
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/classicinterio4">
                  <i className="fa fa-twitter"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCK0FVuN0ykZjUw7jN0xVfHA">
                  <i className="fa fa-youtube"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://in.pinterest.com/mailprashh/pins/">
                  <i className="fa fa-pinterest"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/classicinterio">
                  <i className="fa fa-facebook"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/classic-interio%E2%84%A2-300238111/">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>Classic Interio</h4>
              <p>Classic Interio - SMART Modular Kitchen Studio & Furniture</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 copyright" style={{ color: '#fff', fontSize: '1.3rem' }}>
            Copyright &copy; 2024 Classic Interio . All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
