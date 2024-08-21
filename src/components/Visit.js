import React from 'react';
import './compact.css'; // Import your custom CSS

const Visit = () => {
    return (
        <div>
            {/* Homepage Section */}
            <div className="homepage" style={{backgroundImage: 'url(images/background.jpg)'}}>
          
                <h2 className="homepage-heading">READY TO TAKE A TOUR OF OUR EXPERIENCE CENTRE?</h2>
            </div>

            {/* Paragraph Section */}
            <div className="container mb-4">
                <h3 className="text-center mt-5">Classic Interio</h3>
                <h6>
                    Classic Interior Design Studio, headquartered in the vibrant city of Nashik, is the creative brainchild of the visionary Mr. Prashant Rotwatkar. With a passion for innovation, the studio is renowned for crafting exceptionally unique and visually stunning premium designs. Under Mr. Rotwatkar's leadership, the team at Classic Interior consistently delivers bespoke interiors that seamlessly blend elegance and functionality, setting a benchmark in the world of interior design.
                </h6>
            </div>

            {/* What We Do Section */}
            <div className="container mb-0" data-aos="fade-up-left">
                <div className="row ">
                    <div className="col-md-6">
                        <div className="info">
                            <img src="images/visit/bedroom.jpg" alt="Bedroom" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="section">
                            <h3 style={{ textAlign: 'center' }}>Looks for each room</h3>
                            <p>
                                Take a walkthrough of beautifully designed bedrooms, living rooms, modular kitchens, and everything in between. By tailoring the look of each room to its specific function and atmosphere, you can create a home that is both stylish and functional, reflecting your unique personality and lifestyle. Focus on comfort with plush seating and cozy textiles like throw blankets and cushions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Visit;
