// src/components/Products.jsx
import React from "react";
import "../styles/products.css";

const productBlocks = [
  {
    id: "set-1",
    label: "FLAGSHIP LINE",
    name: "Umbrella Core Stack",
    subtitle: "BPC-157 • NAD+ • HGH Fragment",
    image: "/img/products/umbrella-set-1.jpg", // first photo
    description:
      "The core Umbrella Pharmaceuticals stack — proven protocols for recovery, productivity and structural protection after heavy training and stress.",
    bullets: [
      "Original Umbrella Pharmaceuticals production",
      "Every batch is tested for purity, sterility and accurate dosing",
      "Solid base for long-term cycles and recovery programs",
    ],
  },
  {
    id: "set-2",
    label: "PEPTIDE & HORMONE LAB",
    name: "Advanced Peptide Series",
    subtitle: "Elite peptide and hormone formulations",
    image: "/img/products/umbrella-set-2.jpg", // second photo
    description:
      "A deeper peptide and hormone line for those who want maximum performance from their protocols. Everything needed for growth, repair and physique recomposition.",
    bullets: [
      "Clean active ingredients with true pharma-grade quality",
      "Stable and predictable results when used in structured protocols",
      "Designed for athletes and high-performance clients, not for marketing hype",
    ],
  },
  {
    id: "set-3",
    label: "METABOLIC CONTROL",
    name: "Weight & Energy Protocols",
    subtitle: "Semaglutide, Terzepatide & metabolic support",
    image: "/img/products/umbrella-set-3.jpg", // third photo
    description:
      "Targeted metabolic solutions for appetite control, bodyweight management and sustainable energy. For those who need control over every variable.",
    bullets: [
      "Modern compounds for appetite and weight control",
      "Energy support without dirty stimulants or random blends",
      "Built around real-world performance protocols and lab discipline",
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="products section-anim">
      <div className="products-inner">
        {/* TOP HEAD BLOCK */}
        <div className="products-head">
          <span className="products-tag">PRODUCTS</span>
          <h2 className="products-title">
            UMBRELLA PHARMACEUTICALS · RESEARCH COMPOUNDS
          </h2>
          <p className="products-text">
            Umbrella Pharmaceuticals specializes in advanced peptide, hormone
            and metabolic research compounds. Every batch is engineered as a
            laboratory tool — with focus on purity, precise dosing and
            consistent results.
          </p>
        </div>

        {/* CHESS-LAYOUT BLOCKS */}
        <div className="products-list">
          {productBlocks.map((block, index) => (
            <article
              key={block.id}
              className={
                "products-row" + (index % 2 === 1 ? " products-row--reverse" : "")
              }
            >
              {/* IMAGE COLUMN */}
              <div className="products-photo-col">
                <div className="products-photo-card">
                  <div className="products-photo-badge">{block.label}</div>
                  <img
                    src={block.image}
                    alt={block.name}
                    className="products-photo"
                  />
                </div>
              </div>

              {/* TEXT COLUMN */}
              <div className="products-text-col">
                <h3 className="product-name">{block.name}</h3>
                <p className="product-subtitle">{block.subtitle}</p>
                <p className="product-description">{block.description}</p>
                <ul className="product-bullets">
                  {block.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
