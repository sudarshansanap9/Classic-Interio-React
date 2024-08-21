import React from 'react';

export default function Homepage() {
    
    
  return (
    <div>
      {/* Home Section */}
      <div className="homepage" style={{backgroundImage:"url(images/background.jpg)"}}>
        <h1 className="homepage-heading">DESIGN YOUR DREAM</h1>
        <p className="homepage-paragraph">
          Whether it's a magazine-like dream kitchen or your entire home, enjoy end-to-end solutions from design to installation.
        </p>
        <div className="homepage-buttons">
          <a href="/form" className="btn">GET QUOTE</a>
          <a href="/FullHome" className="btn">DESIGN IDEAS</a>
        </div>
      </div>

      {/* Why choose us? */}
      <div className="container">
        <h1 className="text-center mb-3 mt-5" style={{ color: "#eb4d4b" }}>
          Why choose us?
          <hr style={{ color: "#eb4d4b", backgroundColor: "#eb4d4b" }} />
        </h1>
        <div className="row">
          <div className="col-md-3">
            <div className="image-container">
              <img
                src="images/bestprice.png"
                alt="Best price guarantee"
                style={{ width: "90px", height: "95px" }}
              />
              <h4 className="mt-3">Best price guarantee</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="image-container">
              <img
                src="images/warranty.png"
                alt="Warranty"
                style={{ width: "90px", height: "95px" }}
              />
              <h4 className="mt-3">Warranty</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="image-container">
              <img
                src="images/movein.png"
                alt="Fast move-in guarantee"
                style={{ width: "90px", height: "95px" }}
              />
              <h4 className="mt-3">Fast move-in guarantee</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="image-container">
              <img
                src="images/quality checks.png"
                alt="Quality checks"
                style={{ width: "90px", height: "95px" }}
              />
              <h4 className="mt-3">Quality Checks</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Home Interiors */}
      <div className="container mt-5">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-6 mb-4" data-aos="zoom-in">
            <div className="card" style={{ border: "none" }}>
              <img
                src="images/living room.webp"
                className="card-img-top"
                alt="Living Room"
              />
              <div className="card-body">
                <h3 className="centered">Living Room</h3>
                <p className="justified">
                  Get the complete home interior experience with award-winning designers, service partners, and the best brands.
                </p>
                <p className="centered">
                  <a href="/LIVINGROOM" style={{ textDecoration: "none", color: "#eb4d4b" }}>
                    Let's tell you some more:-
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 mb-4" data-aos="zoom-in">
            <div className="card" style={{ border: "none" }}>
              <img
                src="images/kitchen.avif"
                className="card-img-top"
                alt="Kitchen"
              />
              <div className="card-body">
                <h3 className="centered">Kitchen</h3>
                <p className="justified">
                  Choose high-quality, budget-friendly modular solutions like kitchens, wardrobes, TV units, and more in your favorite colors, sizes, and designs.
                </p>
                <p className="centered">
                  <a href="/kitchen" style={{ textDecoration: "none", color: "#eb4d4b" }}>
                    Let's tell you some more:-
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mt-4">
        <h1 className="text-center mb-5" style={{ color: "#eb4d4b" }}>
          About Us
          <hr style={{ color: "#eb4d4b", backgroundColor: "#eb4d4b" }} />
        </h1>
        <a href="/ABOUT" style={{ textDecoration: "none" }}>
          <div className="row">
            <div className="col-md-6">
              <div className="image-container">
                <img
                  src="images/safe.jpg"
                  alt="Safe experience"
                  data-aos="flip-right"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h3 style={{ color: "black" }}>
                Classic Interio - SMART Modular Kitchen Studio & Furniture
              </h3>
              <br />
              <p>
                &nbsp; &nbsp; &nbsp; &nbsp;Classic Interio is one of the leading Manufacturers of customized Modular Kitchens in Nashik, since 2010. We supply Modular Kitchens customers. We also provide customized Modular Furniture to Home, Office, Corporate- Bank, Retail, Hotels & Restaurant, Institutional, Hospital & Industrial. Our goal is to satisfy the customers with quality services, high class material. & on time delivery. We have a team of Architect & Interior Designers to provide you an Innovative, useful and well Organized Modular Furniture Designs. We always suggest a space utilizing design in affordable cost.  Highly skilled team of Technician works for precise installation.  We provide best quality material,  latest  Technologies & Branded  Fittings...
              </p>
            </div>
          </div>
        </a>
      </div>

     

      {/* Brands Section */}
      <h1 className="text-center mb-0 mt-5" style={{ color: '#eb4d4b' }}>
        Brands
      </h1>
      <div className="clients">
        <div className="logos">
          <hr style={{ color: '#eb4d4b', backgroundColor: '#eb4d4b' }} />
          <div className="logos-slide">
            <img src="images/logo/download.jpg" alt="Brand Logo 1" />
            <img src="images/logo/Ebco_Logo.JPG" alt="Brand Logo 2" />
            <img src="images/logo/faber.jpg" alt="Brand Logo 3" />
            <img src="images/logo/hettich-logo.jpg" alt="Brand Logo 4" />
            <img src="images/logo/enox.jpg" alt="Brand Logo 5" />
            <img src="images/logo/Indoline-Furniture.jpg" alt="Brand Logo 6" />
            <img src="images/logo/index.png" alt="Brand Logo 7" />
            <img src="images/logo/Merino-logo-1.png" alt="Brand Logo 8" />
            <img src="images/logo/saint-gobain-logo.jpg" alt="Brand Logo 9" />
            <img src="images/logo/e01e1323-a63f-409f-bbbf-1d75552b92c3.jpg" alt="Brand Logo 10" />
          </div>
          <div className="logos-slide">
            <img src="images/logo/Bosch-logo.jpg" alt="Brand Logo 11" />
            <img src="images/logo/Ebco_Logo.JPG" alt="Brand Logo 12" />
            <img src="images/logo/faber.jpg" alt="Brand Logo 13" />
            <img src="images/logo/hettich-logo.jpg" alt="Brand Logo 14" />
            <img src="images/logo/enox.jpg" alt="Brand Logo 15" />
            <img src="images/logo/Bosch-logo.jpg" alt="Brand Logo 16" />
            <img src="images/logo/Corian-Logo.jpg" alt="Brand Logo 17" />
            <img src="images/logo/Bosch-logo.jpg" alt="Brand Logo 18" />
            <img src="images/logo/enox.jpg" alt="Brand Logo 19" />
          </div>
          <hr style={{ color: '#eb4d4b', backgroundColor: '#eb4d4b' }} />
        </div>
      </div>

      {/* Additional Scripts */}
      <script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></script>
      
    </div>
  );
}
