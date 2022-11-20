import React from "react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "./carouselparquet.css";
import parquet1 from "../../../assets/parchet/1.jpeg";
import parquet2 from "../../../assets/parchet/2.jpeg";
import parquet3 from "../../../assets/parchet/3.jpeg";
import parquet4 from "../../../assets/parchet/4.jpeg";
import parquet5 from "../../../assets/parchet/5.jpeg";
import parquet6 from "../../../assets/parchet/6.jpeg";

const data = [
  {
    avatar: parquet1,
  },
  {
    avatar: parquet2,
  },
  {
    avatar: parquet3,
  },
  {
    avatar: parquet4,
  },
  {
    avatar: parquet5,
  },
  {
    avatar: parquet6,
  },
];

const CarouselParquet = () => {
  return (
    <Swiper
      className="swiper__parquet"
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
            <SwiperSlide key={index} className="testimonial__parquet">
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

export default CarouselParquet;
