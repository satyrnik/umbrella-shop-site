// src/components/Certificates.jsx
import React from "react";
import "../styles/certificates.css";

export default function Certificates() {
  return (
    <section className="certificates" id="certificates">
      <div className="certificates-inner">
        {/* ЛЕВАЯ КОЛОНКА — ТЕКСТ */}
        <div className="certificates-left">
          <span className="certificates-kicker">Documentation</span>
          <h2 className="certificates-title">
            Certificates &amp; lab reports for every batch
          </h2>
          <p className="certificates-subtitle">
            Each production lot is backed by analytical reports and internal
            documentation, confirming identity, purity and consistency.
          </p>

          <ul className="certificates-list">
            <li>Certificate of Analysis (CoA) per batch</li>
            <li>HPLC chromatograms confirming purity</li>
            <li>MS profiles for identity verification</li>
            <li>Internal QC logs and release forms</li>
          </ul>
        </div>

        {/* ПРАВАЯ КОЛОНКА — КАРТОЧКИ "ДОКУМЕНТОВ" */}
        <div className="certificates-right">
          <article className="cert-card">
            <div className="cert-card-ribbon">Batch CoA</div>
            <div className="cert-card-header">
              <span className="cert-card-label">BPC-157</span>
              <span className="cert-card-id">Lot #BPC-24-017</span>
            </div>
            <div className="cert-card-body">
              <p>Purity: 99.2% (HPLC)</p>
              <p>Identity: MS confirmed</p>
              <p>Solvent content: &lt; 0.5%</p>
            </div>
            <div className="cert-card-footer">
              <span className="cert-card-link">View sample report</span>
            </div>
          </article>

          <article className="cert-card">
            <div className="cert-card-ribbon">HPLC report</div>
            <div className="cert-card-header">
              <span className="cert-card-label">Semaglutide</span>
              <span className="cert-card-id">Lot #SEM-25-004</span>
            </div>
            <div className="cert-card-body">
              <p>Purity: 98.7% (HPLC)</p>
              <p>Retention time: 8.42 min</p>
              <p>Impurities: &lt; 1.0%</p>
            </div>
            <div className="cert-card-footer">
              <span className="cert-card-link">View chromatogram</span>
            </div>
          </article>

          <article className="cert-card cert-card--wide">
            <div className="cert-holo-strip" />
            <h3 className="cert-card-title">GMP-inspired workflow</h3>
            <p className="cert-card-text">
              Internal documentation tracks every critical step: synthesis,
              purification, filtration, vialing and final release.
            </p>
            <div className="cert-badges-row">
              <span className="cert-badge">QC checklist</span>
              <span className="cert-badge">Temperature logs</span>
              <span className="cert-badge">Signed release</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
