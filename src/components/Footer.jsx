import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        {/* === Левая часть: логотип + бренд === */}
        <div className="footer-brand">
          <img
            src="/umbrella-logo.png"  // ✅ логотип из public/
            alt="Umbrella Logo"
            className="footer-logo"
          />
          <div className="footer-brand-text">
            <div className="footer-title">UMBRELLA&nbsp;PERFORMANCE</div>
            <p className="footer-slogan">
              Pharmaceutical-grade research compounds.
            </p>
          </div>
        </div>

        {/* === Центральная часть: контакты === */}
        <div className="footer-contacts">
          <h3>Contacts</h3>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:support@umbrella-labs.com">
                support@umbrella-labs.com
              </a>
            </li>
            <li>
              Phone: <a href="tel:+18001234567">+1 (800) 123-4567</a>
            </li>
            <li>Address: 1200 BioTech Ave, Miami, FL, USA</li>
          </ul>
        </div>

        {/* === Правая часть: соцсети === */}
        <div className="footer-socials">
          <h3>Follow us</h3>
          <ul>
            <li>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://x.com/" target="_blank" rel="noreferrer">
                X (Twitter)
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Нижняя строка */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Umbrella Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
