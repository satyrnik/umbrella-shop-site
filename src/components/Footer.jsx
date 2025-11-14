import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-inner">

        {/* === Бренд === */}
        <div className="footer-brand">
          <img
            src="/umbrella-logo.png"
            alt="Umbrella Logo"
            className="footer-logo"
          />

          <div className="footer-brand-text">
            <div className="footer-title">UMBRELLA SHOP</div>
            <p className="footer-slogan">
              Pharmaceutical-grade performance compounds & research solutions.
            </p>
          </div>
        </div>

        {/* === Контакты === */}
        <div className="footer-contacts">
          <h3>Contacts</h3>
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
                @umbrella_support
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

        {/* === Социальные сети === */}
        <div className="footer-socials">
          <h3>Follow us</h3>
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
        <p>© {new Date().getFullYear()} Umbrella Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}
