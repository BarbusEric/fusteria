import React from "react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "./carouselclosets.css";
import closet1 from "../../../assets/dulapuri/1.jpeg";
import closet2 from "../../../assets/dulapuri/2.jpeg";
import closet3 from "../../../assets/dulapuri/3.jpeg";
import closet4 from "../../../assets/dulapuri/4.jpeg";
import closet5 from "../../../assets/dulapuri/5.jpeg";
import closet6 from "../../../assets/dulapuri/6.jpeg";
import closet7 from "../../../assets/dulapuri/7.jpeg";

const data = [
  {
    avatar: closet1,
  },
  {
    avatar: closet2,
  },
  {
    avatar: closet3,
  },
  {
    avatar: closet4,
  },
  {
    avatar: closet5,
  },
  {
    avatar: closet6,
  },
  {
    avatar: closet7,
  },
];

const CarouselClosets = () => {
  return (
    <Swiper
      className="swiper__closets"
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
            <SwiperSlide key={index} className="testimonial__closets">
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

export default CarouselClosets;
