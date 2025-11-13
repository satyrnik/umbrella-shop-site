import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <img
          src="/umbrella-logo.png"
          alt="Umbrella Pharmaceuticals logo"
          className="hero-logo"
        />

        <h1 className="hero-title">
          <span className="hero-title-main">UMBRELLA</span>
          <span className="hero-title-sub">PHARMACEUTICALS</span>
        </h1>

        <p className="hero-tagline">
          Advanced Peptide &amp; Hormone Research
        </p>

        <a href="#products" className="hero-cta">
          Explore Products
        </a>
      </div>
    </section>
  );
}
