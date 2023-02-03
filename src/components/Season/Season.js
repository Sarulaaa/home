import React from "react";
import Slider from "react-slick";
import Zurag1 from "../../assets/Zurag1.webp"
import Zurag2 from "../../assets/Zurag2.webp"
import Zurag3 from "../../assets/Zurag3.webp"
import Zurag4 from "../../assets/Zurag4.webp"
import Zurag5 from "../../assets/Zurag5.webp"
import Zurag6 from "../../assets/Zurag6.webp"
import Zurag7 from "../../assets/Zurag7.webp"
import "./Season.css"
const Season = () =>{
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };
     const data = [
       {
         key: 1,
         title: "Өвлийн спорт",
         img: Zurag1
       },
       {
         key: 2,
         title: "Гадуур хувцас",
         img: Zurag2,
       },
       {
         key: 3,
         title: "Өвлийн гутал",
         img: Zurag3,
       },
       {
         key: 4,
         title: "Агааржуулагч",
         img: Zurag4,
       },
       {
         key: 5,
         title: "Хүүхдийн дулаан хувцас",
         img: Zurag5,
       },
       {
         key: 6,
         title: "Малгай",
         img: Zurag6,
       },
       {
         key: 7,
         title: "Витамин",
         img: Zurag7,
       },
     ];
    return (
      <div className="Season">
        <div className="text-center mb-[20px] text-base"  >
            <h1 className="text-base">Улирлын онцлох</h1>

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
    );
};
export default Season