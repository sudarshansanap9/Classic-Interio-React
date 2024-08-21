import React from 'react';
import './compact.css'; // Ensure you have the correct styles imported

const KIDS = () => {
  return (
    <div>
      {/* Home Section */}
      <div className="homepage" style={{ backgroundImage: 'url(images/kids/show-background-kids-bedroom.jpg)' }}>
        <h1 className="homepage-heading">KID'S BEDROOM INTERIOR</h1>
      </div>

      {/* Paragraph Section */}
      <div className="container">
        <h4 className="text-center mt-5">
          Fun, cute, quirky—your little one's room should be all this, without compromising on safety, space, and storage. Get inspired by our kid's bedroom designs.
        </h4>
      </div>

      {/* Cards Section */}
      <div className="container-fluid" data-aos="zoom-in-up">
        {/* Row 1 */}
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <img src="images/kids/kids-bedroom1.jpg" className="card-img-top" alt="Kid's Room For Teenage Girl" />
              <div className="card-body">
                <h5 className="card-title">Kid's Room For Teenage Girl</h5>
                <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <img src="images/kids/kids-bedroom10.jpg" className="card-img-top" alt="Atmospheric Kids Bedroom Interior Design" />
              <div className="card-body">
                <h5 className="card-title">Atmospheric Kids Bedroom Interior Design</h5>
                <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <img src="images/kids/kids-bedroom3.jpg" className="card-img-top" alt="Small Kid's Room With Huge Storage For Stationery And Toys" />
              <div className="card-body">
                <h5 className="card-title">Small Kid's Room With Huge Storage For Stationery And Toys</h5>
                <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <img src="images/kids/kids-bedroom4.jpg" className="card-img-top" alt="Spacious Kid's Room With Yellow Colour Tones" />
              <div className="card-body">
                <h5 className="card-title">Spacious Kid's Room With Yellow Colour Tones</h5>
                <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <img src="images/kids/kids-bedroom5.jpg" className="card-img-top" alt="Canary Kids Bedroom Interior Design" />
              <div className="card-body">
                <h5 className="card-title">Canary Kids Bedroom Interior Design</h5>
                <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <img src="images/kids/kids-bedroom6.jpg" className="card-img-top" alt="Kid's Room With Blue And Yellow Hues" />
              <div className="card-body">
                <h5 className="card-title">Kid's Room With Blue And Yellow Hues</h5>
                <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <img src="images/kids/kids-bedroom7.jpg" className="card-img-top" alt="Navy Kids Bedroom Interior Design" />
              <div className="card-body">
                <h5 className="card-title">Navy Kids Bedroom Interior Design</h5>
                <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <img src="images/kids/kids-bedroom8.jpg" className="card-img-top" alt="Artistic Kids Bedroom Interior Design" />
              <div className="card-body">
                <h5 className="card-title">Artistic Kids Bedroom Interior Design</h5>
                <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KIDS;
