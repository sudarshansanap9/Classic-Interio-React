import React from 'react';
import './compact.css'; // Make sure you have the correct styles imported

const DININGROOM = () => {
  return (
    <div>
      {/* Home Section */}
      <div className="homepage" style={{backgroundImage: "url(images/dining/show-background-dining-room.jpg)"}}>
        <h1 className="homepage-heading">DINING ROOM INTERIOR</h1>
      </div>

      {/* Paragraph Section */}
      <div className="container">
        <h4 className="text-center mt-5">
          Your dining room deserves some TLC! Whether you want to keep it simple or glam it up, we can give you the look that you desire. Here's some design inspiration for your dining space.
        </h4>
      </div>

      {/* Cards Section */}
      <div className="container-fluid" data-aos="zoom-in-up">
        {/* Row 1 */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/dining/dining-room1.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/dining/dining-room1.jpg" className="card-img-top" alt="Dining Room 1" />
                <div className="card-body">
                  <h5 className="card-title">Best 6-Seater Dining Room With Open Dining Area</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/dining/dining-room2.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/dining/dining-room2.jpg" className="card-img-top" alt="Dining Room 2" />
                <div className="card-body">
                  <h5 className="card-title">Small Dining Room With White And Marble Table Top</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/dining/dining-room10.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/dining/dining-room10.jpg" className="card-img-top" alt="Dining Room 3" />
                <div className="card-body">
                  <h5 className="card-title">Royal Regale Dining Room</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/dining/dining-room4.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/dining/dining-room4.jpg" className="card-img-top" alt="Dining Room 4" />
                <div className="card-body">
                  <h5 className="card-title">Modern 4-Seater Dining Room</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/dining/dining-room5.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/dining/dining-room5.jpg" className="card-img-top" alt="Dining Room 5" />
                <div className="card-body">
                  <h5 className="card-title">Modern 8-Seater Dining Room</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/dining/dining-room6.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/dining/dining-room6.jpg" className="card-img-top" alt="Dining Room 6" />
                <div className="card-body">
                  <h5 className="card-title">Modern Dining Room With 4-seater Table</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Row 4 */}
        <div className="row">
          <div className="col-lg-6">
            <a href="images/dining/dining-room7.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/dining/dining-room7.jpg" className="card-img-top" alt="Dining Room 7" />
                <div className="card-body">
                  <h5 className="card-title">6-Seater Dining Room With Mirror Wall Panel</h5>
                  <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="images/dining/dining-room8.jpg" style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src="images/dining/dining-room8.jpg" className="card-img-top" alt="Dining Room 8" />
                <div className="card-body">
                  <h5 className="card-title">Modern Dining Room With 6 Seater Dining Table</h5>
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

export default DININGROOM;
