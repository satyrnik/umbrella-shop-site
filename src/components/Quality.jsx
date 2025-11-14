// src/sections/Quality.jsx
import React from "react";
import "../styles/quality.css"; // поправь путь, если у тебя другая структура

export default function Quality() {
  return (
    <section className="quality" id="quality">
      <div className="quality-inner">
        {/* Левый блок — текст + описание */}
        <div className="quality-left">
          <span className="quality-kicker">Quality &amp; Safety</span>
          <h2 className="quality-title">
            Laboratory-grade quality with red-line control
          </h2>
          <p className="quality-subtitle">
            Each vial is produced under strict laboratory conditions, with every
            batch passing advanced testing before release.
          </p>

          <div className="quality-badges">
            <div className="quality-badge">
              <span className="quality-badge-label">99%+ purity</span>
              <span className="quality-badge-sub">HPLC verified</span>
            </div>
            <div className="quality-badge">
              <span className="quality-badge-label">Multi-step QC</span>
              <span className="quality-badge-sub">Every lot checked</span>
            </div>
          </div>
        </div>

        {/* Правый блок — карточки с “голограммами” */}
        <div className="quality-right">
          <article className="quality-card">
            <div className="quality-holo-ring quality-holo-ring--top" />
            <div className="quality-holo-line quality-holo-line--left" />

            <h3 className="quality-card-title">Sterile environment</h3>
            <p className="quality-card-text">
              Vials are filled and sealed in a controlled clean-room environment
              with aseptic procedures.
            </p>
          </article>

          <article className="quality-card">
            <div className="quality-holo-ring quality-holo-ring--bottom" />
            <div className="quality-holo-line quality-holo-line--right" />

            <h3 className="quality-card-title">99%+ purity</h3>
            <p className="quality-card-text">
              Each batch is screened using HPLC and MS to confirm maximum
              peptide purity and identity.
            </p>
          </article>

          <article className="quality-card quality-card--wide">
            <div className="quality-holo-orbit" />
            <div className="quality-holo-grid" />

            <h3 className="quality-card-title">
              Red-line holographic tracking
            </h3>
            <p className="quality-card-text">
              Every vial is linked to an internal batch ID, enabling precise
              tracking across production, testing and release.
            </p>
            <ul className="quality-list">
              <li>Unique batch identifier</li>
              <li>Timestamped production stages</li>
              <li>Archived lab reports per lot</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
