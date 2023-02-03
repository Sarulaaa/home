import React from "react";
import Slider from "react-slick";
import Banner1 from "../../assets/Banner1.webp"
import Banner2 from "../../assets/Banner2.webp"
import Banner3 from "../../assets/Banner3.webp"

const Banner = () =>{
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const data = [
      {
        key:1,
        img: Banner1,
      },
      {
        key:1,
        img: Banner2,
      },
      {
        key:1,
        img: Banner3,
      }
    ]
    return (
      <div className="w-full h-[300px]">
        <Slider>
          {
            data.map((row)=>(
              <div key={row.key}>
                <img src={row.img} alt="/"/>

              </div>
            ))
          }

         
        </Slider>
      </div>
    );
};
export default Banner