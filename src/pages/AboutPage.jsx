import React from 'react';
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          At Homemade Treasures, we are passionate about bringing you the finest homemade products crafted with love and care. Our mission is to connect artisans and creators with discerning customers who appreciate the beauty and authenticity of handmade goods.
        </p>

        <h2 className="text-center py-4">Our Homemade Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="assets/jewel.webp" alt="" style={{ height: "160px" }} />
              <div className="card-body">
                <h5 className="card-title text-center">Handcrafted Jewelry</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="assets/artisan.jpg" alt="" style={{ height: "160px" }} />
              <div className="card-body">
                <h5 className="card-title text-center">Artisanal Home Decor</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="assets/woven.jpg" alt="" style={{ height: "160px" }} />
              <div className="card-body">
                <h5 className="card-title text-center">Handwoven Textiles</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="assets/organic.jpg" alt="" style={{ height: "160px" }} />
              <div className="card-body">
                <h5 className="card-title text-center">Organic Skincare</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
