import React from "react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "./carouselbathroom.css";
import bathroom1 from "../../../assets/baie/1.jpeg";
import bathroom2 from "../../../assets/baie/2.jpeg";
import bathroom3 from "../../../assets/baie/3.jpeg";
import bathroom4 from "../../../assets/baie/4.jpeg";
import bathroom5 from "../../../assets/baie/5.jpeg";
import bathroom6 from "../../../assets/baie/6.jpeg";
import bathroom7 from "../../../assets/baie/7.jpeg";
import bathroom8 from "../../../assets/baie/8.jpeg";

const data = [
  {
    avatar: bathroom1,
  },
  {
    avatar: bathroom2,
  },
  {
    avatar: bathroom3,
  },
  {
    avatar: bathroom4,
  },
  {
    avatar: bathroom5,
  },
  {
    avatar: bathroom6,
  },
  {
    avatar: bathroom7,
  },
  {
    avatar: bathroom8,
  },
];

const CarouselBathroom = () => {
  return (
    <Swiper
      className="swiper__bathroom"
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
            <SwiperSlide key={index} className="testimonial__bathroom">
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

export default CarouselBathroom;
