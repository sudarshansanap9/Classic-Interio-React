import React from 'react';
import './compact.css'; 

const MasterBedroom = () => {
    return (
        <div>
            {/* Home Section */}
            <div className="homepage" style={{ backgroundImage: 'url(images/bedroom/show-background-master-bedroom.jpg)' }}>
                <h1 className="homepage-heading">BEDROOM INTERIOR</h1>
            </div>

            {/* Paragraph Section */}
            <div className="container">
                <h4 className="text-center mt-5">
                    Looking for design ideas for your bedroom? You've come to the right place! Our bedroom designs are a cut above the rest as we ensure the perfect combination of beauty and functionality. Check out these inspiring design ideas.
                </h4>
            </div>

            {/* Cards Section */}
            <div className="container-fluid" data-aos="zoom-in-up">
                <div className="row">
                    <div className="col-lg-6">
                        <a href="images/bedroom/master-bedroom4.jpg" style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <img src="images/bedroom/master-bedroom4.jpg" className="card-img-top" alt="Luxury Master Bedroom With Metallic Piece On Wall" />
                                <div className="card-body">
                                    <h5 className="card-title">Luxury Master Bedroom With Metallic Piece On Wall</h5>
                                    <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a href="images/bedroom/master-bedroom2.jpg" style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <img src="images/bedroom/master-bedroom2.jpg" className="card-img-top" alt="Luxury Master Bedroom With Metallic Jali" />
                                <div className="card-body">
                                    <h5 className="card-title">Luxury Master Bedroom With Metallic Jali</h5>
                                    <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-lg-6">
                        <a href="images/bedroom/master-bedroom3.jpg" style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <img src="images/bedroom/master-bedroom3.jpg" className="card-img-top" alt="Modern Master Bedroom With Grey Colour Theme And Large Windows" />
                                <div className="card-body">
                                    <h5 className="card-title">Modern Master Bedroom With Grey Colour Theme And Large Windows</h5>
                                    <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a href="images/bedroom/master-bedroom1.jpg" style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <img src="images/bedroom/master-bedroom1.jpg" className="card-img-top" alt="Small Master Bedroom With Drop Lights And Patterned Wallpaper" />
                                <div className="card-body">
                                    <h5 className="card-title">Small Master Bedroom With Drop Lights And Patterned Wallpaper</h5>
                                    <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-lg-6">
                        <a href="images/bedroom/master-bedroom5.jpg" style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <img src="images/bedroom/master-bedroom5.jpg" className="card-img-top" alt="Modern Master Bedroom With Large French Windows" />
                                <div className="card-body">
                                    <h5 className="card-title">Modern Master Bedroom With Large French Windows</h5>
                                    <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a href="images/bedroom/master-bedroom6.jpg" style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <img src="images/bedroom/master-bedroom6.jpg" className="card-img-top" alt="Modern Master Bedroom With Zigzag Patterned Wallpaper" />
                                <div className="card-body">
                                    <h5 className="card-title">Modern Master Bedroom With Zigzag Patterned Wallpaper</h5>
                                    <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-lg-6">
                        <a href="images/bedroom/master-bedroom7.jpg" style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <img src="images/bedroom/master-bedroom7.jpg" className="card-img-top" alt="Small Master Bedroom With Soft Hues And Modern Furniture" />
                                <div className="card-body">
                                    <h5 className="card-title">Small Master Bedroom With Soft Hues And Modern Furniture</h5>
                                    <a href="/form" className="btn mt-2 btn-danger"><b>GET QUOTE</b></a>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a href="images/bedroom/master-bedroom8.jpg" style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <img src="images/bedroom/master-bedroom8.jpg" className="card-img-top" alt="Modern Master Bedroom With Wooden Ceiling And Wooden Flooring" />
                                <div className="card-body">
                                    <h5 className="card-title">Modern Master Bedroom With Wooden Ceiling And Wooden Flooring</h5>
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

export default MasterBedroom;
