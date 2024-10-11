import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./about.css";

const brands = [
  {
    id: 1,
    title: "جرافيك",
    img: "/assets/images/Karim-akl.jpeg",
    name: "كريم عقل ",
  },
  {
    id: 2,
    title: "سوشيال ميديا",
    img: "/assets/images/Karim-akl.jpeg",

    name: "كريم عقل ",
  },
  {
    id: 3,
    title: "جرافيك",
    img: "/assets/images/Karim-akl.jpeg",

    name: "كريم عقل ",
  },
  {
    id: 87,
    title: "جرافيك",
    img: "/assets/images/Karim-akl.jpeg",

    name: "كريم عقل ",
  },
  {
    id: 80,
    title: "جرافيك",
    img: "/assets/images/Karim-akl.jpeg",

    name: "كريم عقل ",
  },
  {
    id: 7,
    title: "جرافيك",
    img: "/assets/images/Karim-akl.jpeg",

    name: "كريم عقل ",
  },
];
const About = () => {
  return (
    <div>
      <section className="about-class-page">
        <div className="top-about-class-page">
          <div className="container">
            <h2>عن بريميدوس </h2>
            <p>
              تأسست شركة بريميدوس منذ عام 2008 على يد نخبة من المتخصصين، شركة
              مصرية مرخصة تعمل فى مجال تصميم المواقع وإنتاج البرمجيات و تمتلك
              مكانة مميزة فى السوق المحلي والعالمي{" "}
            </p>
          </div>
        </div>
        <div className="bottom-about-class-page">
          <div className="img-about-class-page">
            <img src="/assets/images/about-1-scaled-1.jpg" alt="" width={500} />
          </div>
          <div className="text-about-class-page">
            <div>
              <h2>الشركة عن </h2>
              <p>
                حيث وصل عدد عملائنا فى مصر الى أكثر من 6000 شركة تعمل فى جميع
                المجالات مثل السياحة والاستيراد والتصدير والتوريدات والعقارات
                والشركات العاملة فى متاجر البيع الالكترونى وغيرها من المجالات
                المختلفة، لدينا عملاء نعتز بهم من مختلف الدول. يضم فريق عمل شركة
                بريميدوس عدد كبير يتعدى الـ 15 مصمم ومبرمج لديهم خبرة كبيرة
                كافية في
              </p>
              <p>
                تصميم وتطوير مواقع الانترنت، الشركة لها خبرة طويلة تمتد لأكثر من
                اثني عشر عاما في تنفيذ مشروعات العملاء فى كافة المجالات مثل
                السياحة - الاستيراد والتصدير - والتوريدات - مراكز التدريب
                والاستشارات - المدارس - الهيئات الحكومية - وغيرها ولذلك يعتبر
                فريق عمل متكامل يُبدع في إنشاء أجمل التصاميم، وتطوير أرقى
                المنتجات لخدمتك له خبرة فى
              </p>
            </div>
            <div>
              <img src="/assets/images/0ps.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="container more-about">
        <div className="top-more-about">
          <div></div>
          <h2>المزيد عن الشركة</h2>
          <p>
            المزيد عن الشركة قبل كل شىء نضمن لك في شركتنا سبيل محترف وآمن فى
            تنفيذ مشروعك بالإضافة إلى ذلك كما تريد بافضل المزايا العصرية
            والأدوات لعل هذه الخبرة تستطيع من خلالها تقديم عمل احترافي وخالي من
            الاخطاء البرمجية، نعمل على إظهار موقعك أو اي كان مشروعك في محركات
            البحث و تصدر الصفحة الأولى، نسعى إلى تقديم أفضل خدمات الدعم الفنى.
            نعلم أن قيمة الوقت كقيمة المال، لذلك لدينا التزام تام بالمواعيد، كما
            نتفاعل باستمرار مع العملاء، نعمل على توفير تقارير شهرية حول مردود
            الحملات التي نديرها على نشاطاتهم، نبني مواقعنا على افضل برامج ادارة
            محتوى.
          </p>
        </div>
        <div className="bottom-more-about">
          <div>
            <img src="/assets/images/2.png" alt="" width={500} />
          </div>
          <div>
            <h2>العمل في بريميدوس</h2>
            <p>
              كما تعمل بريميدوس افضل شركة تصميم مواقع في مصر بأحدث تقنيات
              التصميم والبرمجة، وأيضاً يكون التصميم متجاوب مع جميع الأجهزة مثل
              الموبايل والتابلت والاجهزة اللوحية، كما تقوم الشركة ارشفة المواقع
              على أشهر محركات البحث مثل ياهو وجوجل، كما نعمل على تحليل الموقع
              والكلمات الرئيسية المستهدفة وعمل حملات التسويق الالكتروني متوافقة
              مع معايير جوجل لاستهداف الصفحة الأولي و حملات البريد الالكتروني
              ورسائل الهاتف الموجهة، نعمل على تقديم خدمات الاستضافة بأسعار
              مناسبة وجودة عالية وشهادة أمان SSL، تسجيل اسم الدومين، التسويق عبر
              السوشيال ميديا، تصميم اقوى مواقع التجارة الالكترونية، تصميم
              البراند، كما نعمل على معالجة المدفوعات أونلاين، تصميم وبرمجة
              تطبيقات الجوال، نسعى إلى تحقيق أهداف العميل، كما أن هدفنا راحة
              العملاء من الممكن التعاقد اونلاين وذلك يمكنك من خلال صفحة تعاقد
              اونلاين دون بذل جهد والحضور لمقر الشركة.
            </p>
            <button> التواصل واتساب </button>
          </div>
        </div>
      </div>

      <div className="bottom-about-person-team">
        <div className="container">
          <h2>فريق العمل</h2>
          <p>
            فريق عمل شركة بريميدوس متميز فى تحليل احتياجات العميل وبارع فى تحويل
            متطلباته الى مخرجات ذات تصميمات عاليه وجودة عالمية
          </p>
          <div style={{ display: "flex", marginBlock: "20px" }}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={3} // Default for larger screens
              loop={true}
              // autoplay={{ delay: 3000 }}
              breakpoints={{
                // when window width is <= 768px (e.g., mobile devices)
                768: {
                  slidesPerView: 1, // Show 1 image on small screens
                },
                // when window width is > 768px (e.g., tablet and up)
                1024: {
                  slidesPerView: 2, // Example: 2 slides for tablet
                },
                // Larger screens (desktop)
                1200: {
                  slidesPerView: 4, // Keep 4 slides for desktops
                },
              }}
            >
              {brands.map((brand, index) => (
                <SwiperSlide key={index}>
                  <div className="team-detil">
                    <img src={brand.img} alt={brand.title} />
                    <div className="team-detil-text">
                      <p>{brand.name}</p>
                      <p>{brand.title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
