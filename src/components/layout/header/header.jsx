import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector("section");
      console.log("Scroll position:", window.scrollY); // Log scroll position
      if (window.scrollY > 0) {
        section.classList.add("scrolled");
        console.log("Added scrolled class");
      } else {
        section.classList.remove("scrolled");
        console.log("Removed scrolled class");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // إزالة الحدث عند إلغاء تحميل المكون
    };
  }, []);

  return (
    <header>
      <nav>
        <div className="logo-class">
          <Link to="/">
            <img
              src="/assets/images/logo.png"
              alt="not found"
              width={100}
              height={70}
            />
          </Link>
        </div>
        <div className="links-contact-top">
          <div className="link-phone">
            <div className="nav-icone-back">
              <svg className="svgicon phone-icon">
                <use xlinkHref="#phone-icon" />
              </svg>
            </div>
            <a href="">
              <div className="conatc-nav">
                <p>اتصل بنا</p>
                <h6>1558820103(20+)</h6>
              </div>
            </a>
          </div>
          <div className="link-mail">
            <div className="nav-icone-back">
              <svg className="svgicon email-icon">
                <use xlinkHref="#email-icon" />
              </svg>
            </div>
            <a href="">
              <div className="conatc-nav">
                <h6>Mail</h6>
                <p> info@primedios.com</p>
              </div>
            </a>
          </div>
          <div className="link-location">
            <div className="nav-icone-back">
              <svg className="svgicon loc-icon">
                <use xlinkHref="#loc-icon" />
              </svg>
            </div>
            <a href="" style={{ width: "10rem" }}>
              <div className="conatc-nav">
                <h6>مقر الرئيسي : </h6>
                <p> Egypt , Cairo</p>
              </div>
            </a>
          </div>
        </div>
      </nav>
      <section style={{ display: "flex" }}>
        <div className="link-route">
          <ul className="linkes-ul">
            <li>
              <Link to="/">الرئيسية</Link>
            </li>
            <li>
              <Link to="/about">من نحن</Link>
            </li>
            <li>
              <span>
                <Link to="/services">سابقة الاعمال</Link>
              </span>
              {/* <svg className="svgicon angle-icon">
                <use xlinkHref="#angle-icon" />
              </svg>
              <ul className="dropdown">
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul> */}
            </li>
            {/* <li>
              <span>
                <Link to="/">تسويق الكتروني</Link>
              </span>
              <svg className="svgicon angle-icon">
                <use xlinkHref="#angle-icon" />
              </svg>
              <ul className="dropdown">
                <li></li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            </li> */}
            {/* <li>
              <span>
                <Link to="/">التوظيف</Link>
              </span>
              <svg className="svgicon angle-icon">
                <use xlinkHref="#angle-icon" />
              </svg>
              <ul className="dropdown">
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            </li> */}
            <li>
              <Link to="/contact">تواصل معنا</Link>
            </li>
          </ul>
        </div>
        <div className="icone-header-social">
          <div className="social">
            {[
              {
                label: "Facebook",
                icon: "facebook-icon",
                background: "#1877F2",
                href: "https://www.facebook.com/primedios/",
              },
              {
                label: "LinkedIn",
                icon: "linkedin-icon",
                background: "#0077B5",
                href: "https://www.linkedin.com/company/primedios/",
              },
              {
                label: "Instagram",
                icon: "instagram-icon",
                background:
                  "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
                href: "https://www.instagram.com/primedios/",
              },
              // {
              //   label: "Twitter",
              //   icon: "twitter-icon",
              //   background: "#1DA1F2",
              //   href: "",
              // },
              {
                label: "TikTok",
                icon: "tiktok-icon",
                background: "#000000",
                href: "https://www.tiktok.com/@primedios",
              },
              // {
              //   label: "YouTube",
              //   icon: "youtube-icon",
              //   background: "#FF0000",
              //   href: "/",
              // },
              // {
              //   label: "Pinterest",
              //   icon: "pinterest-icon",
              //   background: "#E60023",
              //   href: "/",
              // },
            ].map((social, index) => (
              <a
                className="social x"
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <svg
                  className={`svgicon ${social.icon}`}
                  style={{ fill: "black", marginInline: "10px" }}
                >
                  <use xlinkHref={`#${social.icon}`} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <button className="icon-menu" onClick={() => setShowModal(true)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <rect x="3" y="6" width="18" height="2" fill="black" />
              <rect x="3" y="11" width="18" height="2" fill="black" />
              <rect x="3" y="16" width="18" height="2" fill="black" />
            </svg>
          </button>

          {showModal && (
            <div className="fixed">
              <ul className={showModal ? "modal" : "modal element-close"}>
                <li>
                  <button
                    className="icon-x"
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </button>
                </li>
                <li onClick={() => setShowModal(false)}>
                  <Link to="/">الصفحه الرئيسية</Link>
                </li>
                <li onClick={() => setShowModal(false)}>
                  <Link to="/about">من نحن</Link>
                </li>
                <li onClick={() => setShowModal(false)}>
                  <Link to="services">سابقة الاعمال</Link>
                </li>
                <li onClick={() => setShowModal(false)}>
                  <Link to="/contact">تواصل معنا</Link>
                </li>
                <div className="dropdown-con">{/* Language Dropdown */}</div>
              </ul>
            </div>
          )}
        </div>
      </section>
    </header>
  );
};

export default Header;
