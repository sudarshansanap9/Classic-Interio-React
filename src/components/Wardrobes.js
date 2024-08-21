import React from 'react';
import './compact.css'; 
export default function Wardrobes() {
  return (
    <>
      {/* Home Section */}
      <div className="homepage" style={{backgroundImage: 'url(images/Wardrobe/show-background-wardrobe.jpg)'}}>
        <h1 className="homepage-heading">WARDROBE INTERIOR</h1>
      </div>

      {/* Paragraph Section */}
      <div className="container">
        <h4 className="text-center mt-5">
          No matter how big or small your home is, you can never have enough of wardrobes and storage. Our modular wardrobes are available in a variety of sizes, materials and finishes—to suit your tastes and budget. Browse through our storage solutions.
        </h4>
      </div>

      {/* Cards Section */}
      <div className="container-fluid" data-aos="zoom-in-up">
        {/* Row 1 */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/Wardrobe/wardrobe1.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/Wardrobe/wardrobe1.jpg" className="card-img-top" alt="Mirrored Wardrobe With Storage Lofts" />
                <div className="card-body">
                  <h5 className="card-title">Mirrored Wardrobe With Storage Lofts</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/Wardrobe/wardrobe2.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/Wardrobe/wardrobe2.jpg" className="card-img-top" alt="Large Wooden Wardrobe With Glossy Finish" />
                <div className="card-body">
                  <h5 className="card-title">Large Wooden Wardrobe With Glossy Finish</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/Wardrobe/wardrobe3.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/Wardrobe/wardrobe3.jpg" className="card-img-top" alt="Sliding Wardrobe With Small Seating Pocket" />
                <div className="card-body">
                  <h5 className="card-title">Sliding Wardrobe With Small Seating Pocket</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/Wardrobe/wardrobe9.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/Wardrobe/wardrobe9.jpg" className="card-img-top" alt="Sleek Wardrobe With Long Handles" />
                <div className="card-body">
                  <h5 className="card-title">Sleek Wardrobe With Long Handles</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/Wardrobe/wardrobe5.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/Wardrobe/wardrobe5.jpg" className="card-img-top" alt="Swing And Sliding Wardrobe With Monochromatic Palette" />
                <div className="card-body">
                  <h5 className="card-title">Swing And Sliding Wardrobe With Monochromatic Palette</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/Wardrobe/wardrobe6.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/Wardrobe/wardrobe6.jpg" className="card-img-top" alt="Fully Loaded Wardrobe With Dresser And Loft" />
                <div className="card-body">
                  <h5 className="card-title">Fully Loaded Wardrobe With Dresser And Loft</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Row 4 */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/Wardrobe/wardrobe7.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/Wardrobe/wardrobe7.jpg" className="card-img-top" alt="Full Height Wardrobe With Seamless Shutters" />
                <div className="card-body">
                  <h5 className="card-title">Full Height Wardrobe With Seamless Shutters</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/Wardrobe/wardrobe8.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/Wardrobe/wardrobe8.jpg" className="card-img-top" alt="Classic Style Wardrobe With White Tones" />
                <div className="card-body">
                  <h5 className="card-title">Classic Style Wardrobe With White Tones</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
