import React from "react";
import "./sub-about.css";
const SubAbout = () => {
  return (
    <div className="sub-about">
      <div className="container  flex">
        <div className="sub-about-text-right">
          <h2>نبذة عن بريميدوس </h2>
          <p>
            بريميدوس أفضل شركة تصميم مواقع، ودا لأننا عندنا خبرة كبيرة في المجال
            ده وبنقدم خدماتنا من 15 سنة، وخلال الفترة دي عملنا عدد كبير من
            المواقع الإلكترونية والمتاجر الإلكترونية، وعندنا أكبر سابقة أعمال في
            مصر.
          </p>
          <p>
            كمان بنقدم تصميم مواقع إلكترونية متكاملة، زي تصميم الجرافيك وتطوير
            البرمجيات، بالإضافة إلى التسويق الإلكتروني وتحسين محركات البحث (SEO)
            وتصميم الواجهة الأمامية (Front-end) والتخطيط الاستراتيجي للمواقع
            الإلكترونية
          </p>
          <p>
            عندنا فريق من المصممين والمطورين عندهم خبرة عالية في تصميم وتطوير
            المواقع، ولأننا أحسن شركة تصميم مواقع في مصر، بنسعى دايمًا لتقديم
            أفضل الخدمات لعملائنا.
          </p>
          <div className="sub-about-btn ">
            <button
              className="btn"
              onClick={() => (window.location.href = "/about")}
            >
              عرض المزيد
            </button>
          </div>
        </div>
        <div className="sub-about-img-left">
          <img
            src="/assets/images/about-1.png"
            alt="not found"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default SubAbout;
