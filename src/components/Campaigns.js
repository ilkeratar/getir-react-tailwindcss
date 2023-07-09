import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Banners from "api/banners.json";

function NextButton ({ onClick, className }) {
	return (
		<button className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
			<IoIosArrowForward size={22} />
		</button>
	)
}
function PrevButton ({ onClick, className }) {
	return (
		<button className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
			<IoIosArrowBack size={22} />
		</button>
	)
}

function Campaigns() {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    setBanners(Banners);
  }, [])
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextButton />,
		prevArrow: <PrevButton />,
  };
  return (
    <div className="container mx-auto">
      <h3 className="text-sm font-semibold mb-3">Kategoriler</h3>
      <Slider className="-mx-2" {...settings}>
        {banners.length && banners.map((banner,index)=>{
          return(
            <div key={banner.id} className="px-2">
              <img src={banner.image} className="rounded-lg"/>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Campaigns;
