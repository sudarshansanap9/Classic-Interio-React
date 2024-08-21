import React from 'react';
import './compact.css'; // Import your custom CSS

const FullHome = () => {
    return (
        <div>
            {/* Home Section */}
            <div className="homepage" style={{backgroundImage: 'url(images/background.jpg)'}}>
                <h1 className="homepage-heading">DESIGN IDEAS</h1>
            </div>

            {/* Paragraph Section */}
            <div className="container">
                <h4 className="text-center mt-5">
                    Check out how your dream home can look like. Get inspiration from Interia's vast design catalog spanning across modular kitchens, living rooms, bedrooms, modular wardrobes, and more...
                </h4>
            </div>

            {/* Cards Section */}
            <div className="container-fluid" data-aos="zoom-in-up">
                <div className="row">
                    <div className="col-lg-6">
                        <a href="/LIVINGROOM" style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <img src="images/living room.webp" className="card-img-top" alt="Living Room" />
                                <div className="card-body">
                                    <h5 className="card-title">LIVING ROOM</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a href="/kitchen" style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <img src="images/kitchen.avif" className="card-img-top" alt="Kitchen" />
                                <div className="card-body">
                                    <h5 className="card-title">KITCHEN</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-lg-6">
                        <a href="/masterbedroom" style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <img src="images/bedroom.jpg" className="card-img-top" alt="Master Bedroom" />
                                <div className="card-body">
                                    <h5 className="card-title">MASTER BEDROOM</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a href="/dinning" style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <img src="images/dining room.jpg" className="card-img-top" alt="Dining Room" />
                                <div className="card-body">
                                    <h5 className="card-title">DINING ROOM</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-lg-6">
                        <a href="/KIDS" style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <img src="images/kids bedroom.jpeg" className="card-img-top" alt="Kids Bedroom" />
                                <div className="card-body">
                                    <h5 className="card-title">KIDS BEDROOM</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a href="/Bathroom" style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <img src="images/bathroom.webp" className="card-img-top" alt="Bathroom" />
                                <div className="card-body">
                                    <h5 className="card-title">BATHROOM</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-lg-6">
                        <a href="/Wardrobes" style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <img src="images/wardrobe.jpg" className="card-img-top" alt="Wardrobe" />
                                <div className="card-body">
                                    <h5 className="card-title">WARDROBE</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a href="/PoojaRoom" style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <img src="images/pooja room.jpg" className="card-img-top" alt="Pooja Room" />
                                <div className="card-body">
                                    <h5 className="card-title">POOJA ROOM</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default FullHome;
