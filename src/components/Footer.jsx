// src/components/Footer.jsx
import React from "react";
import "../styles/footer.css";
import { useI18n } from "../i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer" id="about">
      <div className="footer-inner">

        {/* BRAND */}
        <div className="footer-brand">
          <img
            src="/umbrella-logo.png"
            alt="Umbrella Logo"
            className="footer-logo"
          />

          <div className="footer-brand-text">
            <div className="footer-title">
              <span className="footer-title-red">UMBRELLA</span> SHOP
            </div>
            <p className="footer-slogan">
              {t("footer.slogan")}
            </p>
          </div>
        </div>


        {/* CONTACTS */}
        <div className="footer-contacts">
          <h3>{t("footer.contacts.title")}</h3>

          <ul>
            <li>
              <span className="icon-text">📧</span>
              <a href="mailto:info@umbrella-shop.com">
                info@umbrella-shop.com
              </a>
            </li>

            <li>
              <span className="icon-text">💬</span>
              <a href="https://t.me/" target="_blank" rel="noreferrer">
                {t("footer.contacts.telegram")}
              </a>
            </li>

            <li>
              <span className="icon-text">☎️</span>
              <a href="tel:+380000000000">
                +38 (000) 000-00-00
              </a>
            </li>
          </ul>
        </div>


        {/* SOCIAL */}
        <div className="footer-socials">
          <h3>{t("footer.social.title")}</h3>

          <ul>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <span className="icon"><img src="/icons/inst.svg" /></span>
                Instagram
              </a>
            </li>

            <li>
              <a href="https://t.me/" target="_blank" rel="noreferrer">
                <span className="icon"><img src="/icons/tg.svg" /></span>
                Telegram
              </a>
            </li>

            <li>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <span className="icon"><img src="/icons/yt.svg" /></span>
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t("footer.bottom")}</p>
      </div>
    </footer>
  );
}
