import './Carousel.css';
'use strict';
import "../../lib/Slider.js";
'use strict';
import Karina from "../../assets/karina_banner.png";
import New_Jeans from "../../assets/newjeans_banner.png";
import Aespa from "../../assets/aespa_banner.png";

const Carousel = () => {
    return (
        <div className="w-full h-full">
        <div className="carousel">
  <div className="carousel__item carousel__item--left">
    <img src={Karina} alt="dog"/>
    <div className="carousel__text">
      <h3>Aespa</h3>
      <p>Select Banner</p>
    </div>
  </div>
  <div className="carousel__item carousel__item--main">
    <img src={New_Jeans} alt="dog"/>
    <div className="carousel__text">
      <h3>New Jeans</h3>
      <p>Select Banner</p>
    </div>
  </div>
  <div className="carousel__item carousel__item--right">
    <img src={Aespa} alt="dog"/>
    <div className="carousel__text">
      <h3>Karina</h3>
      <p>Select Banner</p>
    </div>
  </div>
  </div>
  <div className="carousel__btns">
    <button className="carousel__btn" id="leftBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z"/></svg></button>
    <button className="carousel__btn" id="rightBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"/></svg></button>
  </div>
  </div>
    )
}

export default Carousel;