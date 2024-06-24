import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MarketConnect = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliderContainerStyle = {
    maxHeight: "500px", // Adjust the max height as needed
  };

  const sliderImgStyle = {
    width: "100%",
    height: "500px",
    objectFit: "cover",
  };

  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="slider-container" style={sliderContainerStyle}>
          <Slider {...settings}>
           
            <div>
              <img
                className="slider-img"
                src="assets/home2.jpg"
                alt="Slide 2"
                style={sliderImgStyle}
              />
            </div>
            <div>
              <img
                className="slider-img"
                src="assets/home3.jpg"
                alt="Slide 3"
                style={sliderImgStyle}
              />
            </div>
            <div>
              <img
                className="slider-img"
                src="assets/home4.jpg"
                alt="Slide 4"
                style={sliderImgStyle}
              />
            </div>
            
          </Slider>
        </div>
        <div className="card bg-dark text-white border-0 mx-3">
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text-white fw-bold mb-4" >Eco-Commerce</h5>
              <p className="card-text fs-5 d-none d-sm-block text-light">
                <span className="text-uppercase fw-bold">Discover unique homemade products</span> and support small businesses. Connect with creators to explore one-of-a-kind items and foster a vibrant community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketConnect;
