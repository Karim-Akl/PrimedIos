import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide , useSwiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider-camp.css";


const SliderCamp = () => {
  const { i18n } = useTranslation();
  const swiperRef = useRef(null);

  const brands = [
    {
      id: 1,
      title: "جرافيك",
      img: "/assets/images/2024-03-23-65feb16b13e9d.png",
    },
    {
      id: 2,
      title: "سوشيال ميديا",
      img: "/assets/images/logo-wb-2048x998.png",
    },
    {
      id: 3,
      title: "ألوان",
      img: "/assets/images/bblash-logo-copy.png",
    },
    {
      id: 87,
      title: "ألوان",
      img: "/assets/images/bblash-logo-copy.png",
    },
    {
      id: 80,
      title: "ألوان",
      img: "/assets/images/bblash-logo-copy.png",
    },
    {
      id: 7,
      title: "ألوان",
      img: "/assets/images/bblash-logo-copy.png",
    },
    {
      id: 9,
      title: "ألوان",
      img: "/assets/images/bblash-logo-copy.png",
    },
    {
      id: 4,
      title: "ألوان",
      img: "/assets/images/bblash-logo-copy.png",
    },
    {
      id: 7,
      title: "ألوان",
      img: "/assets/images/bblash-logo-copy.png",
    },
    {
      id: 5,
      title: "ألوان",
      img: "/assets/images/bblash-logo-copy.png",
    },
    // Add more items as needed
  ];

  // useEffect(() => {
  //   if (swiperRef.current && swiperRef.current.swiper) {
  //     const swiperInstance = swiperRef.current.swiper;
  //     swiperInstance.navigation.init();
  //     swiperInstance.navigation.update();
  //   }
  // }, []);

  return (
    <div className="bg-class-sliders" style={{ position: "relative" }}>
      <h2>عملائنا الكرام</h2>
      <Swiper
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => (swiperRef.current =  {swiper} )}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={200}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 3000 }}
        // pagination={{ clickable: true }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="brand-1">
              <Link to={`/brand-detil/${brand.id}`}>
                <img
                  src={brand.img}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/images/logo-wb-2048x998.png"; // Fallback to default image
                  }}
                  alt={brand.title}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div className="slider-nav">
        <button  className="prev-slide" onClick={() => swiperRef.current?.swiper.slidePrev()}>
        <svg className="btn-next btn-next-black">
            <use xlinkHref="#arrow-right"></use>
          </svg>
        </button>
        <button className="next-slide" onClick={() => swiperRef.current?.swiper.slideNext()}>
  
          <svg className="btn-prev btn-prev-black">
            <use xlinkHref="#arrow-left"></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SliderCamp;


