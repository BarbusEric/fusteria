import React from "react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import pic1 from "../../assets/1.jpeg";
import pic2 from "../../assets/2.jpeg";
import pic3 from "../../assets/3.jpeg";
import "./carousel.css";

const data = [
  {
    avatar: pic1,
  },
  {
    avatar: pic2,
  },
  {
    avatar: pic3,
  },
];
const CarouselComponent = () => {
  return (
    <Swiper
      className="swiper"
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
    >
      <div className="container testimonials__container">
        {data.map(({ avatar }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
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

export default CarouselComponent;
