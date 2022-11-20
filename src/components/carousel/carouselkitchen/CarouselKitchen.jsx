import React from "react";
import "./carouselkitchen.css";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import kitchen1 from "../../../assets/bucatarie/1.jpeg";
import kitchen2 from "../../../assets/bucatarie/2.jpeg";
import kitchen3 from "../../../assets/bucatarie/3.jpeg";
import kitchen4 from "../../../assets/bucatarie/4.jpeg";
import kitchen5 from "../../../assets/bucatarie/5.jpeg";
import kitchen6 from "../../../assets/bucatarie/6.jpeg";
import kitchen7 from "../../../assets/bucatarie/7.jpeg";
import kitchen8 from "../../../assets/bucatarie/8.jpeg";
import kitchen9 from "../../../assets/bucatarie/9.jpeg";
import kitchen10 from "../../../assets/bucatarie/10.jpeg";
import kitchen11 from "../../../assets/bucatarie/11.jpeg";
import kitchen12 from "../../../assets/bucatarie/12.jpeg";
import kitchen13 from "../../../assets/bucatarie/13.jpeg";

const data = [
  {
    avatar: kitchen1,
  },
  {
    avatar: kitchen2,
  },
  {
    avatar: kitchen3,
  },
  {
    avatar: kitchen4,
  },
  {
    avatar: kitchen5,
  },
  {
    avatar: kitchen6,
  },
  {
    avatar: kitchen7,
  },
  {
    avatar: kitchen8,
  },
  {
    avatar: kitchen9,
  },
  {
    avatar: kitchen10,
  },
  {
    avatar: kitchen11,
  },
  {
    avatar: kitchen12,
  },
  {
    avatar: kitchen13,
  },
];

const CarouselKitchen = () => {
  return (
    <Swiper
      className="swiper__kitchen"
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
            <SwiperSlide key={index} className="testimonial__kitchen">
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

export default CarouselKitchen;
