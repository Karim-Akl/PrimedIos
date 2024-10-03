import React from "react";
import "./about.css";
const About = () => {
  return (
    <section className="about-class">
      <div className="top-about-class-wrapper">
        <div className="container">
          <h2>عن ماني ليك </h2>
          <p>
            تأسست شركة ثرى هاند منذ عام 2008 على يد نخبة من المتخصصين، شركة
            مصرية مرخصة تعمل فى مجال تصميم المواقع وإنتاج البرمجيات و تمتلك
            مكانة مميزة فى السوق المحلي والعالمي{" "}
          </p>
        </div>
        <div className="bottom-about-class-wrapper">
          <div>
            <img src="/assets/images/about-1.png" alt="" />
          </div>
          <div>
            <h2>الشركة عن </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
