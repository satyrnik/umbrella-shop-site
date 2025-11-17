// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* затемняющий градиент поверх фона */}
      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-pill">
            Umbrella Pharmaceuticals • Research Division
          </span>

          <h1 className="hero-title">
            Laboratory-grade <span className="hero-red">UMBRELLA</span> protocols
            for elite performance and recovery
          </h1>

          <p className="hero-description">
            Closed pharmaceutical R&amp;D, peptide and hormone protocols built to
            Umbrella Labs quality standards. Only verified compounds, strict
            batch control, and full documentation for every vial.
          </p>

          <div className="hero-actions">
            <a href="#products" className="hero-cta-main">
              View products
            </a>

            <a href="#about" className="hero-cta-ghost">
              About company
            </a>
          </div>

          <p className="hero-note">
            For research use only. Not intended as a medicinal product.
            Available exclusively to qualified professionals.
          </p>
        </div>
      </div>
    </section>
  );
}
