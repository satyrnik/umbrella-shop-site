// src/components/Hero.jsx
import React from "react";
import "../styles/hero.css";
import { useI18n } from "../i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section id="hero" className="hero section-anim">
      {/* затемняющий/красный градиент поверх фона */}
      <div className="hero-overlay" />

      <div className="hero-inner">
        {/* Основной контент слева (как в CSS .hero-content) */}
        <div className="hero-content">
          {/* Бейдж-сабтайтл — .hero-pill */}
          <div className="hero-pill">
            {t("hero.tag")}
          </div>

          {/* Заголовок — .hero-title + красное слово UMBRELLA */}
          <h1 className="hero-title">
            <span className="hero-title-main">
              {t("hero.titleMain")}
              <span className="hero-red">Umbrella</span>
              {t("hero.titleTail")}
            </span>
          </h1>

          {/* Основный текст — .hero-text (под заголовком) */}
          <p className="hero-text">
            {t("hero.text")}
          </p>

          {/* Кнопки — .hero-actions + .hero-cta-main / .hero-cta-ghost */}
          <div className="hero-actions">
            <a href="#products" className="hero-cta-main">
              {t("hero.ctaPrimary")}
            </a>

            <a href="#about" className="hero-cta-ghost">
              {t("hero.ctaSecondary")}
            </a>
          </div>

          {/* Примечание внизу — .hero-note */}
          <p className="hero-note">
            {t("hero.note")}
          </p>
        </div>
      </div>
    </section>
  );
}
