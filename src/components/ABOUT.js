import React from 'react';
import './compact.css'; // Make sure you have the correct styles imported

const ABOUT = () => {
  return (
    <div>
      {/* About Us Section */}
      <div className="homepage" style={{backgroundImage:"url(images/background.jpg)"}}>
        <h2 className="homepage-heading">ABOUT US</h2>
        <p>Need Help? +91-98236-46644</p>
      </div>

      {/* Paragraph Section */}
      <div className="container mb-4">
        <h6 className="text-center mt-5">
          Classic Interio is one of the leading Manufacturers of customized Modular Kitchens in Nashik, since 2010. We supply Modular Kitchens customers. We also provide customized Modular Furniture to Home, Office, Corporate- Bank, Retail, Hotels & Restaurant, Institutional, Hospital & Industrial.
        </h6>
      </div>

      {/* What We Do Section */}
      <div className="container" data-aos="fade-up-left">
        <div className="row mb-5">
          <div className="col-md-6">
            <div className="info">
              <img src="images/what we do.jpg" alt="What we do" style={{ width: '100%' }} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="section">
              <h3 style={{ textAlign: 'center' }}>What we do</h3>
              <p>
                Classic Interio focuses on designing and decorating the interiors of homes and offices. Working as an interior consultancy firm for more than 8 years, we never compromise on the quality rendered or deviate from the customer needs. Our specially crafted furniture, art pieces, decorator fabric and accessories add beauty to the design. Equipped with the latest technical resources, our engineers and technicians ensure to deliver the highest standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interiors Section */}
      <div className="container" data-aos="fade-up-right">
        <div className="row">
          <div className="col-md-6">
            <div className="section">
              <h3 style={{ textAlign: 'center' }}>INTERIOR</h3>
              <p>
                A Functional and Aesthetic design is not complete without the Interior life. Cutlery inserts provide orderliness and easy access. Drawers and pull-outs can be designed to meet individual requirements. Optimized arrangement and easy accessibility maximizes comfort and storage space in the kitchen. Classic Interio comprehensive range of inserts and interior accessories offers individual planning of the inner life of the kitchen. Our dedicated design team will consult and assist to find the suitable place for all your kitchen utensils.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info">
              <img src="images/interiors.jpg" alt="Interiors" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Materials and Colors Section */}
      <div className="container">
        <h6 className="text-center mt-5">MATERIAL & COLORS</h6>
        <p>
          “Creative, Innovative, Functional, State-of-the-art, Keeping clear lines and forms we combine and customize the best materials, finishes, and latest technologies and adapt them to specific market requirements to suit your needs.”
          WORLD CLASS BRANDS<br />
          Classic Interio combines and customizes the best materials and colors. A selection of over various hand-picked materials and colors allows space for creativity and offers limitless design freedom. Each Material is getting processed on state-of-the-art machineries and accomplished with a final touch of hand craftsmanship to achieve perfection.
        </p>
      </div>

      {/* Modular Kitchen Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="info">
              <img src="images/kitchen.avif" alt="Modular Kitchen" style={{ width: '100%' }} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="section">
              <h3 style={{ textAlign: 'center' }}>MODULAR KITCHEN</h3>
              <p>
                Classic Interio is one of the leading Suppliers of customized Modular Corporate Furniture in Nashik. We offer Bank Furniture, Retail Furniture, Hotels & Restaurant Furniture, Commercial Kitchens & as per requirements. We have a team of Architects & Interior Designers to provide you with Innovative, useful, and well-Organized Modular Designs. We always suggest a space-utilizing design at an affordable cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABOUT;
