import React from 'react';
import './compact.css'; // Ensure you have the relevant styles imported

const POOJAROOM = () => {
  return (
    <div>
      {/* Home Section */}
      <div className="homepage"  style={{backgroundImage: 'url(images/PoojaRoom/show-background-pooja-room.jpg)'}}>
        <h1 className="homepage-heading">POOJA ROOM INTERIOR</h1>
      </div>

      {/* Paragraph Section */}
      <div className="container">
        <h4 className="text-center mt-5">
          Your pooja room is the place that fills your home with spirituality and purity. Whether you want to design it traditionally as per vastu or give it a modern touch, we're here to help you. Here are a few pooja room designs to inspire you.
        </h4>
      </div>

      {/* Cards Section */}
      <div className="container-fluid" data-aos="zoom-in-up">
        {/* Row 1 */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/PoojaRoom/pooja-room9.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/PoojaRoom/pooja-room9.jpg" className="card-img-top" alt="Pooja Room With Blue Wall" />
                <div className="card-body">
                  <h5 className="card-title">Pooja Room With Blue Wall</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/PoojaRoom/pooja-room2.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/PoojaRoom/pooja-room2.jpg" className="card-img-top" alt="Unique Contemporary Pooja Room" />
                <div className="card-body">
                  <h5 className="card-title">Unique Contemporary Pooja Room</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/PoojaRoom/pooja-room3.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/PoojaRoom/pooja-room3.jpg" className="card-img-top" alt="Premium Pooja Room with Natural Lighting" />
                <div className="card-body">
                  <h5 className="card-title">Premium Pooja Room with Natural Lighting</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/PoojaRoom/pooja-room4.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/PoojaRoom/pooja-room4.jpg" className="card-img-top" alt="Classic Open Pooja Area" />
                <div className="card-body">
                  <h5 className="card-title">Classic Open Pooja Area</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/PoojaRoom/pooja-room5.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/PoojaRoom/pooja-room5.jpg" className="card-img-top" alt="Contemporary Pooja Room" />
                <div className="card-body">
                  <h5 className="card-title">Contemporary Pooja Room</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/PoojaRoom/pooja-room6.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/PoojaRoom/pooja-room6.jpg" className="card-img-top" alt="Classic Golden Pooja Room" />
                <div className="card-body">
                  <h5 className="card-title">Classic Golden Pooja Room</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Row 4 */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/PoojaRoom/pooja-room7.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/PoojaRoom/pooja-room7.jpg" className="card-img-top" alt="Traditional Pooja Room" />
                <div className="card-body">
                  <h5 className="card-title">Traditional Pooja Room</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/PoojaRoom/pooja-room8.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/PoojaRoom/pooja-room8.jpg" className="card-img-top" alt="Pooja Room With Gold Leaf Walls" />
                <div className="card-body">
                  <h5 className="card-title">Pooja Room With Gold Leaf Walls</h5>
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

export default POOJAROOM;
