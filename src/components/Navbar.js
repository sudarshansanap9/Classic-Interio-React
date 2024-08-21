import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <div className="top-bar" data-aos="fade-right">
        <div className="container">
          <div className="row" style={{ fontSize: '15px' }}>
            <div className="col-12">
              <a href="mailto:classicinterio.in@gmail.com" className="">
                <span className="mr-2 icon-envelope-open-o"></span>
                <span className="d-none d-md-inline-block"> classicinterio.in@gmail.com</span>
              </a>
              <span className="mx-md-2 d-inline-block"></span>
              <a href="tel:+919823646644" className="">
                <span className="mr-2 icon-phone"></span>
                <span className="d-none d-md-inline-block"> +91 9823646644</span>
              </a>

              <div className="float-right" style={{ fontSize: '13px' }}>
                <Link to="/" className="">HOME |</Link>
                <Link to="/form" className="">GET QUOTE |</Link>
                <Link to="/ABOUT" className="">ABOUT US |</Link>
                <a target="_blank" rel="noopener noreferrer" href="http://classicinterio.blogspot.in/" className="">BLOG</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="site-navbar js-sticky-header site-navbar-target" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="site-logo">
              <Link to="/" className="text-black">
                <img src="images/logo.png" alt="Logo" width="150px" height="70px" />
              </Link>
            </div>

            <div className="col-12">
              <nav className="site-navigation text-right ml-auto" role="navigation">
                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                  <li><Link to="/kitchen" className="nav-link">KITCHENS</Link></li>
                  <li><Link to="/wardrobes" className="nav-link">WARDROBES</Link></li>
                  <li><Link to="/masterbedroom" className="nav-link">BEDROOM SETS</Link></li>
                  <li><Link to="/fullhome" className="nav-link">FULL HOME</Link></li>
                  <li><Link to="/visit" className="nav-link">CONTACT US</Link></li>
                </ul>
              </nav>
            </div>

            <div className="toggle-button d-inline-block d-lg-none">
              <a href="/" className="site-menu-toggle py-5 js-menu-toggle text-black">
                <span className="icon-menu h3"></span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
