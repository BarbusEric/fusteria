import React from "react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "./carouselmiscellaneous.css";
import miscellaneous1 from "../../../assets/miscellaneous/1.jpeg";
import miscellaneous2 from "../../../assets/miscellaneous/2.jpeg";
import miscellaneous3 from "../../../assets/miscellaneous/3.jpeg";
import miscellaneous4 from "../../../assets/miscellaneous/4.jpeg";
import miscellaneous5 from "../../../assets/miscellaneous/5.jpeg";

const data = [
  {
    avatar: miscellaneous1,
  },
  {
    avatar: miscellaneous2,
  },
  {
    avatar: miscellaneous3,
  },
  {
    avatar: miscellaneous4,
  },
  {
    avatar: miscellaneous5,
  },
];

const CarouselMiscellaneous = () => {
  return (
    <Swiper
      className="swiper__miscellaneous"
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
            <SwiperSlide key={index} className="testimonial__miscellaneous">
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

export default CarouselMiscellaneous;
