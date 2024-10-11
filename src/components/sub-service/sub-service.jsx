import React from "react";
import "./sub-service.css";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const SubService = () => {
  const { t } = useTranslation();
  const slides = [
    {
      id: 1,
      title: "برمجة وتطوير",
      image_url: "/assets/images/03w.jpg",
    },
    {
      id: 2,
      title: "برمجة وتطوير",
      image_url: "/assets/images/06w.jpg",
    },
    {
      id: 3,
      title: "برمجة وتطوير",
      image_url: "/assets/images/06w.jpg",
    },
    {
      id: 3,
      title: "برمجة وتطوير",
      image_url: "/assets/images/06w.jpg",
    },
    {
      id: 3,
      title: "برمجة وتطوير",
      image_url: "/assets/images/06w.jpg",
    },
    {
      id: 3,
      title: "برمجة وتطوير",
      image_url: "/assets/images/06w.jpg",
    },
  ];
  return (
    <div className="sub-service ">
      <div className="container flex ">
        <div className="sub-service-text-top flex">
          <h2>الخدمات المقدمة</h2>
          <div>
            <h3>عالم كامل بين ايديك</h3>
            <p>
              بتتنوع خدماتنا في ثري هاند علشان تلبي كل احتياجاتك وتساعدك على
              النجاح وفيها بنوفرلك
            </p>
          </div>
        </div>

        <div className="sub-service-text-bottom   ">
          <div className="flex  sec-1  ">
            <div className="sub-service-img">
              <img src="/assets/images/sdvsdkv@2x.png" alt="" />
            </div>
            <h2>برمجة وتطوير</h2>
            <p>
              تطوير حقيقي مش مجرد أكواد بنركز مجهودنا على برمجة التطبيقات بكل
              الخصائص اللي تفيدك وبرمجة المواقع بأكثر شكل .{" "}
            </p>
          </div>
          <div className="flex  sec-2  ">
            <div className="sub-service-img">
              <img src="/assets/images/sdcsjucicl@2x.png" alt="" />
            </div>
            <h2>تصميم جرافيك</h2>
            <p>
              خبرة فنان .. مش مجرد ألوان بنحول كل الأفكار والأحلام لإبداع تقدر
              تشوفه بنفسك في تصميم الهوية البصرية أو تصميمات السوشيال ميديا
            </p>
          </div>
          <div className="flex  sec-3 ">
            <div className="sub-service-img">
              <img src="/assets/images/isdcs@2x.png" alt="" />
            </div>
            <h2>تسويق الكتروني</h2>
            <p>
              نتايج حقيقية مش مجرد أرقام بنقدملك كل حلول التسويق الإلكتروني
              المتكاملة على منصات التواصل الاجتماعي ومحركات البحث
            </p>
          </div>
        </div>

        <div className="sub-service-section-2">
          <h2>برمجة وتصميم وتطوير</h2>
          <p>
            شركتنا متخصصة في برمجة وتصميم المواقع، وبنقدم خدماتنا لعملائنا في كل
            القطاعات والمجالات
          </p>
          <div className="sub-service-btn">
            <button
              className="btn"
              onClick={() => (window.location.href = "/services")}
            >
              عرض المزيد
            </button>
            <button
              className="btn"
              onClick={() => (window.location.href = "/services")}
            >
              عرض المزيد
            </button>
          </div>
        </div>
      </div>

      <div className="sub-service-section-3 ">
        <div
          style={{
            width: "70%",
            textAlign: "center",
            margin: "auto",
            transform: "translateY(-30%)",
          }}
        >
          <img
            src="/assets/images/المزيد.png"
            alt=""
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ width: "90%", textAlign: "center", margin: "auto" ,transform: "translateY(-40%)"}}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={25}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000 }}
          >
            <div
              className=""
              style={{ width: "90%", textAlign: "center", margin: "auto" }}
            >
              <div className="blogwrap flex">
                {slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div key={slide.id} className="post-slide">
                      <Link to={`/services/${slide.id}`}>
                          <div className="post-img">
                            <img
                              loading="lazy"
                              src={slide.image_url || "/default-image.jpg"}
                              width={200}
                              alt={slide.title || "Blog Post"}
                              title={slide.title || "Blog Post"}
                            />
                          </div>
                        {/* <div className="post-review">
                          <h3 className="post-title">
                            {" "}
                            {slide.title || "Blog Post"}
                          </h3>
                          <a
                            aria-label="Read More Blog Details"
                            href="#!"
                            className="read"
                          >
                            <div> المزيد</div>
                          </a>
                        </div> */}
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SubService;
