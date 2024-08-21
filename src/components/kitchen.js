import React from 'react';
import './compact.css'; // Import the CSS file

export default function Kitchen() {
  return (
    <>
      {/* Home Section */}
      <div className="homepage" style={{backgroundImage: 'url(images/Modern-style Budget L-shaped Modular Kitche.jpg)'}}>
        <h1 className="homepage-heading">KITCHEN INTERIOR</h1>
      </div>

      {/* Paragraph Section */}
      <div className="container">
        <h4 className="text-center mt-5">
          The most frequented area of your home, the kitchen, should be functional, convenient and easy to use. Our modular kitchen solutions can be customised based on layouts, colours, finishes, accessories and more. Get inspired by our stunning kitchen designs (some with price included).
        </h4>
      </div>

      {/* Cards Section */}
      <div className="container-fluid" data-aos="zoom-in-up">
        <div className="row">
          <div className="col-lg-6">
            <a href="images/kitchen/Modern-style Budget L-shaped Modular Kitche.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/kitchen/Modern-style Budget L-shaped Modular Kitche.jpg" className="card-img-top" alt="Modern-style Budget L-shaped Modular Kitchen" />
                <div className="card-body">
                  <h5 className="card-title">Modern-style Budget L-shaped Modular Kitchen</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/kitchen/L-Shaped Modular Kitchen.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/kitchen/L-Shaped Modular Kitchen.jpg" className="card-img-top" alt="L-Shaped Modular Kitchen" />
                <div className="card-body">
                  <h5 className="card-title">L-Shaped Modular Kitchen</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
        </div>
        
        {/* Second Row of Cards */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/kitchen/U-Shaped Modular Kitchen.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/kitchen/U-Shaped Modular Kitchen.jpg" className="card-img-top" alt="U-Shaped Modular Kitchen" />
                <div className="card-body">
                  <h5 className="card-title">U-Shaped Modular Kitchen</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/kitchen/Multi-Functional Kitchen.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/kitchen/Multi-Functional Kitchen.jpg" className="card-img-top" alt="Multi-Functional Kitchen" />
                <div className="card-body">
                  <h5 className="card-title">Multi-Functional Kitchen</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Third Row of Cards */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/kitchen/Modern Parallel Kitchen'.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/kitchen/Modern Parallel Kitchen'.jpg" className="card-img-top" alt="Modern Parallel Kitchen" />
                <div className="card-body">
                  <h5 className="card-title">Modern Parallel Kitchen</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/kitchen/Monochromatic Modern Kitchen.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/kitchen/Monochromatic Modern Kitchen.jpg" className="card-img-top" alt="Monochromatic Modern Kitchen" />
                <div className="card-body">
                  <h5 className="card-title">Monochromatic Modern Kitchen</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Fourth Row of Cards */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/kitchen/Red U-Shaped Kitchen.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/kitchen/Red U-Shaped Kitchen.jpg" className="card-img-top" alt="Red U-Shaped Kitchen" />
                <div className="card-body">
                  <h5 className="card-title">Red U-Shaped Kitchen</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/kitchen/Navy Blue Modular Kitchen.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/kitchen/Navy Blue Modular Kitchen.jpg" className="card-img-top" alt="Navy Blue Modular Kitchen" />
                <div className="card-body">
                  <h5 className="card-title">Navy Blue Modular Kitchen</h5>
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
