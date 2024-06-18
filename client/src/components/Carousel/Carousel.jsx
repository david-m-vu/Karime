import './Carousel.css';
import { useState, useEffect } from "react";
import Karina from "../../assets/karina_banner.png";
import NewJeans from "../../assets/newjeans_banner.png";
import Aespa from "../../assets/aespa_banner.png";

import LeftButton from "../../assets/chevron-left.svg";
import RightButton from "../../assets/chevron-right.svg";
import blackTicket from "../../assets/ticket-black.svg";


const testBanners = [
  {
    id: 0,
    img: Karina,
    name: "Karina Banner"
  },
  {
    id: 1,
    img: NewJeans,
    name: "NewJeans Banner"
  },
  {
    id: 2,
    img: Aespa,
    name: "Aespa Banner"
  },
];

const Carousel = () => {
  const [banners, setBanners] = useState([]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(-1)
  const [currentBanner, setCurrentBanner] = useState(null)
  const [xPos, setXPos] = useState(0);
  const [xPosGap, setXPosGap] = useState(0);
  const [indexOffset, setIndexOffset] = useState(0);
  const [isEven, setIsEven] = useState(false)

  useEffect(() => {
    const bannersRes = testBanners;
    const numBanners = bannersRes.length;
    const middleBannerIndex = Math.floor(numBanners / 2);

    setBanners(bannersRes);
    setCurrentBannerIndex(middleBannerIndex);
    setIndexOffset(-middleBannerIndex);
    setCurrentBanner(bannersRes[middleBannerIndex]);
    if (numBanners % 2 === 0) {
      setIsEven(true);
    }
  }, [])

  useEffect(() => {
    const evenOffset = isEven ? 1 : 0;
  
    setCurrentBanner(banners[currentBannerIndex])
    setXPos((currentBannerIndex + indexOffset + (evenOffset / 2)) * -70)
    setXPosGap((currentBannerIndex + indexOffset + (evenOffset / 2)) * 8)
  }, [currentBannerIndex])

  const calculateNewIndex = (increment, index) => {
    let newIndex = (index + increment) % banners.length;

    // if newIndex is less than lowest index
    if (newIndex < 0) {
      return newIndex += banners.length;
    } else if (newIndex > banners.length - 1) {
      return 0;
    } else {
      return newIndex;
    }
  }

  const changeBanner = (direction) => {
    if (direction === "left") {
      setCurrentBannerIndex((prev) => calculateNewIndex(-1, prev))
    } else if (direction === "right") {
      setCurrentBannerIndex((prev) => calculateNewIndex(1, prev))
    }
  }

  const getBannerClass = (index) => {
    if (index === currentBannerIndex) {
      return "middleBanner";
    } else if (index === currentBannerIndex - 1){
      return "leftBanner";
    } else if (index === currentBannerIndex + 1) {
      return "rightBanner"
    } else {
      return "";
    }
  }

  const onClickBanner = (index) => {
    if (index === currentBannerIndex - 1){
      changeBanner("left")
    } else if (index === currentBannerIndex + 1) {
      changeBanner("right")
    } 
  }

  // const printStuff = () => {
  //   console.log(indexOffset, xPos, currentBannerIndex, currentBanner);
  // }

  return (
    <div id="carousel" className="w-full h-full">
      <div id="banners" className="flex flex-row justify-center w-full gap-x-32" style={{ transition: "ease 0.3s", transform: `translateX(calc(${xPos}% - ${xPosGap}rem)) translate(-50%, -50%)` }}>
        {banners.map((banner, index) => {
          return (
            <img key={index} onClick={() => onClickBanner(index)} className={`${getBannerClass(index)} banner w-[70%]`} src={banner.img} />
          )
        })}

      </div>
      <div id="carouselButtons" className="flex flex-row gap-x-20">
        <button onClick={() => changeBanner("left")}><img src={LeftButton} /></button>
        <button onClick={() => changeBanner("right")}><img src={RightButton} /></button>
      </div>

        
        <div className=" play">
          <button id="playButton" className="mainButton bg-gradient-to-r from-[#ffc4ec] to-[#9e5bff] gap-3 border-black border-[2px] w-72 rounded-[25px] flex flex-row p-2 justify-center items-center" >
            <span className="normalText">1x</span><img className="left-2" src={blackTicket} />
          </button>
          </div>
      {/* <div onClick={() => (printStuff())} className="please z-30"> asdasd</div> */}
    </div>
  )
}

export default Carousel;