import React from 'react';
import './compact.css'; // Make sure you have the correct styles imported

const BATHROOM = () => {
  return (
    <div>
      {/* Home Section */}
      <div className="homepage" style={{backgroundImage: "url(images/bathroom/show-background-bathroom.jpg)"}}>
        <h1 className="homepage-heading">BATHROOM INTERIOR</h1>
      </div>

      {/* Paragraph Section */}
      <div className="container">
        <h4 className="text-center mt-5">
          Dreaming of those spa-like bathrooms in hotels? We can give you the look you want! Browse through our stunning bathroom designs for some inspiration.
        </h4>
      </div>

      {/* Cards Section */}
      <div className="container-fluid" data-aos="zoom-in-up">
        {/* Row 1 */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/bathroom/bathroom10.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/bathroom/bathroom10.jpg" className="card-img-top" alt="Modern Spacious Bathroom With Vanity" />
                <div className="card-body">
                  <h5 className="card-title">Modern Spacious Bathroom With Vanity</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/bathroom/bathroom2.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/bathroom/bathroom2.jpg" className="card-img-top" alt="Contemporary Convenience Max Bathroom" />
                <div className="card-body">
                  <h5 className="card-title">Contemporary Convenience Max Bathroom</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/bathroom/bathroom3.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/bathroom/bathroom3.jpg" className="card-img-top" alt="Contemporary Spacious Bathroom" />
                <div className="card-body">
                  <h5 className="card-title">Contemporary Spacious Bathroom</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/bathroom/bathroom4.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/bathroom/bathroom4.jpg" className="card-img-top" alt="Modern Spacious Bathroom With Vanity" />
                <div className="card-body">
                  <h5 className="card-title">Modern Spacious Bathroom With Vanity</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/bathroom/bathroom5.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/bathroom/bathroom5.jpg" className="card-img-top" alt="Spacious Bathroom With Maximum Storage" />
                <div className="card-body">
                  <h5 className="card-title">Spacious Bathroom With Maximum Storage</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/bathroom/bathroom6.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/bathroom/bathroom6.jpg" className="card-img-top" alt="Contemporary Bathroom With Contrasting Palette" />
                <div className="card-body">
                  <h5 className="card-title">Contemporary Bathroom With Contrasting Palette</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Row 4 */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/bathroom/bathroom7.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/bathroom/bathroom7.jpg" className="card-img-top" alt="Modern Spacious Bathroom" />
                <div className="card-body">
                  <h5 className="card-title">Modern Spacious Bathroom</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/bathroom/bathroom8.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/bathroom/bathroom8.jpg" className="card-img-top" alt="Compact, Modern Bathroom" />
                <div className="card-body">
                  <h5 className="card-title">Compact, Modern Bathroom</h5>
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

export default BATHROOM;
