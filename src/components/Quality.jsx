// src/sections/Quality.jsx
import React from "react";
import "../styles/quality.css";
import { useI18n } from "../i18n";

export default function Quality() {
  const { t } = useI18n();

  return (
    <section className="quality" id="quality">
      <div className="quality-inner">

        <div className="quality-left">
          <span className="quality-kicker">{t("quality.kicker")}</span>

          <h2 className="quality-title">
            {t("quality.title")}
          </h2>

          <p className="quality-subtitle">
            {t("quality.subtitle")}
          </p>

          <div className="quality-badges">
            <div className="quality-badge">
              <span className="quality-badge-label">{t("quality.badge1.label")}</span>
              <span className="quality-badge-sub">{t("quality.badge1.sub")}</span>
            </div>

            <div className="quality-badge">
              <span className="quality-badge-label">{t("quality.badge2.label")}</span>
              <span className="quality-badge-sub">{t("quality.badge2.sub")}</span>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="quality-right">

          <article className="quality-card">
            <div className="quality-holo-ring quality-holo-ring--top" />
            <div className="quality-holo-line quality-holo-line--left" />

            <h3 className="quality-card-title">{t("quality.card1.title")}</h3>
            <p className="quality-card-text">{t("quality.card1.text")}</p>
          </article>


          <article className="quality-card">
            <div className="quality-holo-ring quality-holo-ring--bottom" />
            <div className="quality-holo-line quality-holo-line--right" />

            <h3 className="quality-card-title">{t("quality.card2.title")}</h3>
            <p className="quality-card-text">{t("quality.card2.text")}</p>
          </article>


          <article className="quality-card quality-card--wide">
            <div className="quality-holo-orbit" />
            <div className="quality-holo-grid" />

            <h3 className="quality-card-title">{t("quality.card3.title")}</h3>

            <p className="quality-card-text">
              {t("quality.card3.text")}
            </p>

            <ul className="quality-list">
              {t("quality.card3.bullets").map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>

        </div>

      </div>
    </section>
  );
}
