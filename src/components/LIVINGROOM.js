import React from 'react';
import './compact.css'; // Make sure you have the correct styles imported

const LIVINGROOM = () => {
  return (
    <div>
      {/* Home Section */}
      <div className="homepage" style={{ backgroundImage: 'url(images/background.jpg)' }}>
        <h1 className="homepage-heading">LIVING ROOM INTERIOR</h1>
      </div>

      {/* Paragraph Section */}
      <div className="container">
        <h4 className="text-center mt-5">
          You never get a second chance to make a first impression. So, your home's first room, the living room, should be spectacular! Browse through our wide range of living room designs to steal some inspiration...
        </h4>
      </div>

      {/* Cards Section */}
      <div className="container-fluid" data-aos="zoom-in-up">
        {/* Row 1 */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/living room/Luxury Living Room With Metal Hangings.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/living room/Luxury Living Room With Metal Hangings.jpg" className="card-img-top" alt="Luxury Living Room With Brown Textured Wallpaper And Metal Hangings" />
                <div className="card-body">
                  <h5 className="card-title">Luxury Living Room With Brown Textured Wallpaper And Metal Hangings</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/living room/Spacious Living Room With Traditional Touch.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/living room/Spacious Living Room With Traditional Touch.jpg" className="card-img-top" alt="Spacious Living Room With Traditional Touch" />
                <div className="card-body">
                  <h5 className="card-title">Spacious Living Room With Traditional Touch</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/living room/Small Living Room With Minimal Furniture.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/living room/Small Living Room With Minimal Furniture.jpg" className="card-img-top" alt="Small Living Room With Minimal Furniture" />
                <div className="card-body">
                  <h5 className="card-title">Small Living Room With Minimal Furniture</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/living room/Spacious Living Room With Cream And Green Tones.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/living room/Spacious Living Room With Cream And Green Tones.jpg" className="card-img-top" alt="Spacious Living Room With Cream And Green Tones" />
                <div className="card-body">
                  <h5 className="card-title">Spacious Living Room With Cream And Green Tones</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/living room/Modern Spacious Living Room With Neutral Palette.webp" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/living room/Modern Spacious Living Room With Neutral Palette.webp" className="card-img-top" alt="Modern Spacious Living Room With Neutral Palette" />
                <div className="card-body">
                  <h5 className="card-title">Modern Spacious Living Room With Neutral Palette</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/living room/Small Living Room Will A Wall With Photo Frames.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/living room/Small Living Room Will A Wall With Photo Frames.jpg" className="card-img-top" alt="Small Living Room With Mint Green Wall" />
                <div className="card-body">
                  <h5 className="card-title">Small Living Room Will A Wall With Photo Frames</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Row 4 */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/living room/Small Living Room With Mint Green Wall.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/living room/Small Living Room With Mint Green Wall.jpg" className="card-img-top" alt="Small Living Room With Mint Green Wall" />
                <div className="card-body">
                  <h5 className="card-title">Small Living Room With Mint Green Wall</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/living room/Spacious Living Room With Light Tones.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/living room/Spacious Living Room With Light Tones.jpg" className="card-img-top" alt="Spacious Living Room With Light Tones" />
                <div className="card-body">
                  <h5 className="card-title">Spacious Living Room With Light Tones</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LIVINGROOM;
