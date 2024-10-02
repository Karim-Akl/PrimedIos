import React, { useState, useEffect } from "react";
import "./footer.css";
import "../../../styles/ar-style.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Footer = () => {
  const { t } = useTranslation();
  const [socialLinks, setSocialLinks] = useState({});
  const { i18n } = useTranslation();
  return (

      <footer>
        <div className="footer bgimagelazyload" data-src="/1footer.png">
          <div className="container">
            <div className="ftrwrap flexrow">
              {/* Useful Links */}
              <div className="fotrwidget">
                <div className="fancytitle-light">
                  {t("footer.usefulLinks.title")}
                </div>
                <ul className="fotrlinks">
                  <li>
                    <a href="/">
                      <svg className="svgicon dotcircle-icon">
                        <use xlinkHref="#dotcircle-icon" />
                      </svg>
                      {t("footer.usefulLinks.items.0")}
                    </a>
                  </li>
                  <li>
                    <a href="/about">
                      <svg className="svgicon dotcircle-icon">
                        <use xlinkHref="#dotcircle-icon" />
                      </svg>
                      {t("footer.usefulLinks.items.1")}
                    </a>
                  </li>
                  <li>
                    <a href="/contact">
                      <svg className="svgicon dotcircle-icon">
                        <use xlinkHref="#dotcircle-icon" />
                      </svg>
                      {t("footer.usefulLinks.items.4")}
                    </a>
                  </li>
                </ul>
              </div>
              {/* Our Services */}
              <div className="fotrwidget">
                <div className="fancytitle-light">
                  {t("footer.ourServices.title")}
                </div>
                <ul className="fotrlinks">
                  <li>
                    <Link to="/brand-detil/11">
                      <svg className="svgicon dotcircle-icon">
                        <use xlinkHref="#dotcircle-icon" />
                      </svg>
                      {t("footer.ourServices.items.0")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/brand-detil/20">
                      <svg className="svgicon dotcircle-icon">
                        <use xlinkHref="#dotcircle-icon" />
                      </svg>
                      {t("footer.ourServices.items.1")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/brand-detil/4">
                      <svg className="svgicon dotcircle-icon">
                        <use xlinkHref="#dotcircle-icon" />
                      </svg>
                      {t("footer.ourServices.items.3")}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div className="fotrwidget">
                <div className="fancytitle-light">
                  {t("footer.support.title")}
                </div>
                <p>
                  <svg className="svgicon loc-icon">
                    <use xlinkHref="#loc-icon" />
                  </svg>
                  <a aria-label="Location" rel="noreferrer" href="/contact">
                    jg-f-fgj
                  </a>
                </p>
                <p>
                  <svg className="svgicon phone-icon">
                    <use xlinkHref="#phone-icon" />
                  </svg>
                  <a
                    aria-label="Phone Number"
                    href={`tel:5324`}
                    className="footer-phone"
                  >
                    -fgjghg
                  </a>
                </p>
                <p>
                  <svg className="svgicon whatsapp-icon">
                    <use xlinkHref="#whatsapp-icon" />
                  </svg>
                  <a
                    className="footer-phone"
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noreferrer"
                    href={`https://api.whatsapp.com/send?phone=&text=Hi, I'm contacting you through MONZAcars.ae I'd like to inquire about a car listed on your website`}
                  >12345678</a>
                </p>
                <p>
                  <svg className="svgicon email-icon">
                    <use xlinkHref="#email-icon" />
                  </svg>
                  <a aria-label="Email" href="" className="footer-phone">
                    ncc+vbnc+vbn
                  </a>
                </p>
              </div>

              {/* Social Media Links */}
              <div className="fotrwidget socialmobile">
                <div className="fancytitle-light">{t("footer.followUs")}</div>
                <div className="social">
                  {[
                    {
                      label: "Facebook",
                      icon: "facebook-icon",
                      background: "#1877F2",
                      href: socialLinks.contact_facebook,
                    },
                    {
                      label: "LinkedIn",
                      icon: "linkedin-icon",
                      background: "#0077B5",
                      href: socialLinks.contact_linkedin,
                    },
                    {
                      label: "Instagram",
                      icon: "instagram-icon",
                      background:
                        "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
                      href: socialLinks.contact_instagram,
                    },
                    {
                      label: "Twitter",
                      icon: "twitter-icon",
                      background: "#1DA1F2",
                      href: socialLinks.contact_twitter,
                    },
                    {
                      label: "TikTok",
                      icon: "tiktok-icon",
                      background: "#000000",
                      href: socialLinks.contact_tiktok,
                    },
                    {
                      label: "YouTube",
                      icon: "youtube-icon",
                      background: "#FF0000",
                      href: socialLinks.contact_youtube,
                    },
                    {
                      label: "Pinterest",
                      icon: "pinterest-icon",
                      background: "#E60023",
                      href: socialLinks.contact_pinterest,
                    },
                  ].map((social, index) => (
                    <a
                      className="social x"
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      style={{ background: social.background, color: "#fff" }}
                    >
                      <svg
                        className={`svgicon ${social.icon}`}
                        style={{ fill: "white" }}
                      >
                        <use xlinkHref={`#${social.icon}`} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              {/* Copyright */}
              <div className="coprwrap ">
                <p>© 2024 {t("footer.allRightsReserved")}</p>
                <span style={{ marginInline: "8px" }}>
                  {t("footer.designDevelopedBy")}
                  <a
                    style={{ marginInline: "12px" }}
                    aria-label="Developers"
                    target="_blank"
                    rel="noreferrer"
                    href="https://moneyleek.online"
                  >
                    {t("footer.moneyLeek")}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

  );
};

export default Footer;
