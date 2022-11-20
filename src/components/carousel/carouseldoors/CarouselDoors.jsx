import React from "react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "./carouseldoors.css";
import carouseldoor1 from "../../../assets/usi/1.jpeg";
import carouseldoor2 from "../../../assets/usi/2.jpeg";
import carouseldoor3 from "../../../assets/usi/3.jpeg";
import carouseldoor4 from "../../../assets/usi/4.jpeg";
import carouseldoor5 from "../../../assets/usi/5.jpeg";
import carouseldoor6 from "../../../assets/usi/6.jpeg";

const data = [
  {
    avatar: carouseldoor1,
  },
  {
    avatar: carouseldoor2,
  },
  {
    avatar: carouseldoor3,
  },
  {
    avatar: carouseldoor4,
  },
  {
    avatar: carouseldoor5,
  },
  {
    avatar: carouseldoor6,
  },
];

const CarouselDoors = () => {
  return (
    <Swiper
      className="swiper__doors"
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <div className="container testimonials__container">
        {data.map(({ avatar }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial__doors">
              <div className="client__avatar">
                <img src={avatar} alt="pic" />
              </div>
            </SwiperSlide>
          );
        })}
      </div>
    </Swiper>
  );
};

export default CarouselDoors;
