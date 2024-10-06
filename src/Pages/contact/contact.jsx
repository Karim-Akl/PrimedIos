import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <section>
      <div className="contact">
        <div className="top-contact">
          <h2>تواصل معانا</h2>
          <div className="contact-span">
            <a href="/">
              <span>الرئيسية</span>
            </a>
            <a href="">
              <svg className="btn-prev btn-prev-black">
                <use xlinkHref="#arrow-left"></use>
              </svg>
            </a>
            <a href="">
              <span>اتصل بنا</span>
            </a>
          </div>
        </div>
        <div className="container">

        <div className="bottom-contact">
          <h2>بريميدوس</h2>
          <p>
            تعتبر شركة Money Leek من الشركات الرائدة في مجال التسويق الرقمي
            وتصميم المواقع الإلكترونية وتطوير التطبيقات. وتتميز الشركة بفريق عمل
            محترف ومتخصص يسعى دائمًا لتحقيق أعلى مستويات الجودة والابتكار في
            خدماتها.
          </p>
        </div>
      </div>

        <div className="contact-info flex ">
          <div className="contact-flag ">
            <div>
              <img src="/assets/images/flag.svg" alt="" width={60} />
            </div>
          <div className="flag-info">
            <h3> القاهره </h3>
            <p>21 ش البحر</p>
          </div>
          </div>
          <div className="contact-mail ">
            <div>
              <img
                src="/assets/images/message.svg"
                alt=""
                width={60}
              />
            </div>
            <div className="mail-info">
              <h3>info@Primedios.online</h3>
              <p>الدعم عبر الإنترنت</p>
            </div>
          </div>
          <div className="contact-phone ">
            <div>
              <img
                src="/assets/images/1456266303_contact-09.svg"
                alt=""
                width={60}

              />
            </div>
            <div className="phone-info">
              <h3>01220663807</h3>
              <p>السبت - الجمعة 10 صباحًا - 6 مساءً</p>
            </div>
          </div>
        </div>

        <div className="container ">
      
        <div className="contact-form ">
          <div className="form-title">
            <h2>هل لديك أي أسئلة؟</h2>
            <p>يرجى الاتصال بنا باستخدام النموذج وسنقوم بالرد عليك في أقرب وقت ممكن.</p>
          </div>
          <div className="form-info">
            <form>
              <div className="flex">
                <input  type="text" placeholder="لنك  الويب سايت " />
                <input type="text" placeholder="الاسم" />
              </div>
              <div className="flex">

                <input type="email" placeholder="البريد الألكتروني" />


                <input type="text" placeholder="رقم الهاتف" />
              </div>
              <div className="flex">
                <textarea
                  name="" id="" cols="20" rows="10" placeholder="الرسالة"  />
              </div>
              <div className="flex but-form">
                <button type="submit"><span> ارسال</span> <span className="semicircle"></span></button>
              </div>
            </form>
          </div>
        </div>

        </div>
        
      </div>
      
    </section>
  );
};

export default Contact;
