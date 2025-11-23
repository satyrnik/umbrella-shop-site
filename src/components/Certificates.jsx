// src/components/Certificates.jsx
import React from "react";
import "../styles/certificates.css";
import { useI18n } from "../i18n";

export default function Certificates() {
  const { t } = useI18n();

  return (
    <section className="certificates" id="certificates">
      <div className="certificates-inner">

        <div className="certificates-left">
          <span className="certificates-kicker">{t("certificates.kicker")}</span>

          <h2 className="certificates-title">
            {t("certificates.title")}
          </h2>

          <p className="certificates-subtitle">
            {t("certificates.subtitle")}
          </p>

          <ul className="certificates-list">
            <li>{t("certificates.list.0")}</li>
            <li>{t("certificates.list.1")}</li>
            <li>{t("certificates.list.2")}</li>
            <li>{t("certificates.list.3")}</li>
          </ul>
        </div>


        <div className="certificates-right">

          <article className="cert-card">
            <div className="cert-card-ribbon">{t("certificates.card1.ribbon")}</div>
            <div className="cert-card-header">
              <span className="cert-card-label">BPC-157</span>
              <span className="cert-card-id">Lot #BPC-24-017</span>
            </div>
            <div className="cert-card-body">
              <p>{t("certificates.card1.p1")}</p>
              <p>{t("certificates.card1.p2")}</p>
              <p>{t("certificates.card1.p3")}</p>
            </div>
            <div className="cert-card-footer">
              <span className="cert-card-link">{t("certificates.card1.link")}</span>
            </div>
          </article>


          <article className="cert-card">
            <div className="cert-card-ribbon">{t("certificates.card2.ribbon")}</div>
            <div className="cert-card-header">
              <span className="cert-card-label">Semaglutide</span>
              <span className="cert-card-id">Lot #SEM-25-004</span>
            </div>
            <div className="cert-card-body">
              <p>{t("certificates.card2.p1")}</p>
              <p>{t("certificates.card2.p2")}</p>
              <p>{t("certificates.card2.p3")}</p>
            </div>
            <div className="cert-card-footer">
              <span className="cert-card-link">{t("certificates.card2.link")}</span>
            </div>
          </article>


          <article className="cert-card cert-card--wide">
            <div className="cert-holo-strip" />
            <h3 className="cert-card-title">{t("certificates.card3.title")}</h3>

            <p className="cert-card-text">{t("certificates.card3.text")}</p>

            <div className="cert-badges-row">
              <span className="cert-badge">{t("certificates.card3.badges.0")}</span>
              <span className="cert-badge">{t("certificates.card3.badges.1")}</span>
              <span className="cert-badge">{t("certificates.card3.badges.2")}</span>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}
