import React from "react";
import Slider from "react-slick";
import Card1 from "../../assets/Card1.jpg";
import Card2 from "../../assets/Card2.jpg";
import Card3 from "../../assets/Card3.jpg";
import Card4 from "../../assets/Card4.jpg";
import Card5 from "../../assets/Card5.jpg";
import Card6 from "../../assets/Card6.jpg";
import Card7 from "../../assets/Card7.jpg";
import Card8 from "../../assets/Card8.jpg";
const Emegtei = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const data = [
    {
      key: 1,
      title: "Өвлийн спорт",
      img: Card1,
    },
    {
      key: 2,
      title: "Гадуур хувцас",
      img: Card2,
    },
    {
      key: 3,
      title: "Өвлийн гутал",
      img: Card3,
    },
    {
      key: 4,
      title: "Агааржуулагч",
      img: Card4,
    },
    {
      key: 5,
      title: "Хүүхдийн дулаан хувцас",
      img: Card5,
    },
    {
      key: 6,
      title: "Малгай",
      img: Card6,
    },
    {
      key: 7,
      title: "Витамин",
      img: Card7,
    },
    {
      key: 8,
      title: "Витамин",
      img: Card8,
    },
  ];
  return (
    <div>
      <Slider {...settings}>
        <div className="Season">
          <div className="text-center mb-[20px] text-base">
            <h1 className="text-base">Улирлын онцох эмэгтэй</h1>
          </div>
          <div className="Zurag">
            <Slider {...settings}>
              {data.map((row) => (
                <div key={row.key}>
                  <img src={row.img} alt="/" />
                  <p className="text-center">{row.title}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default Emegtei;
