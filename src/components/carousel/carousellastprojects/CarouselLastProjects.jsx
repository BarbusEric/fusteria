import React from "react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import pic1 from "../../../assets/ultimeleproiecte/1.jpeg";
import pic2 from "../../../assets/ultimeleproiecte/2.jpeg";
import pic3 from "../../../assets/ultimeleproiecte/3.jpeg";
import pic4 from "../../../assets/ultimeleproiecte/4.jpeg";
import pic5 from "../../../assets/ultimeleproiecte/5.jpeg";
import pic6 from "../../../assets/ultimeleproiecte/6.jpeg";
import pic7 from "../../../assets/ultimeleproiecte/7.jpeg";
import "./carousellastprojects.css";

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
  {
    avatar: pic4,
  },
  {
    avatar: pic5,
  },
  {
    avatar: pic6,
  },
  {
    avatar: pic7,
  },
];
const CarouselLastProjects = () => {
  return (
    <Swiper
      className="swiper__lastprojects"
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
    >
      <div className="container testimonials__container">
        {data.map(({ avatar }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial__lastprojects">
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

export default CarouselLastProjects;
