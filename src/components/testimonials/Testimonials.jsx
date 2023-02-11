import React from "react";
import "./Testimonial.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section_title">My clients say</h2>
      <span className="section_subtitle">Testimonial</span>

      <Swiper
        className="testimonial_container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}>
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial_card" key={id}>
              <img src={image} alt="T1" className="testimonial_img" />
              <h3 className="testimonial_name">{title}</h3>
              <p className="testimonial_description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
