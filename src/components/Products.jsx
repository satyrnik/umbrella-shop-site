import React from "react";
import "../styles/products.css";

const products = [
  {
    id: "bpc157",
    name: "BPC-157",
    line: "Tissue Repair",
    dose: "6 mg",
    image: "/img/products/BPC-157.png",
  },
  {
    id: "terzepatide",
    name: "Terzepatide",
    line: "Cellular Energy & Aht-",
    dose: "5 mg",
    image: "/img/products/terzepatide.png",
  },
  {
    id: "nad",
    name: "NAD+",
    line: "Cellular Energy | Anri-",
    dose: "5 mg",
    image: "/img/products/nad+.png",
  },
  {
    id: "semaglutide",
    name: "Semaglutide",
    line: "",
    dose: "(5.07 mg)",
    image: "/img/products/semaglutice.png",
  },
  {
    id: "hgh-fragment",
    name: "HGH Fragment",
    line: "",
    dose: "176–191 mg",
    image: "/img/products/hgh-fragment.png",
  },
  {
    id: "recombinant-hgh",
    name: "Recombinant HGH",
    line: "Growth Hormone",
    dose: "Support",
    image: "/img/products/recombinant.png",
  },
];

export default function Products() {
  return (
    <section id="products" className="products">
      <div className="products-inner">
        <div className="products-about">
          <h2 className="products-about-title">ABOUT</h2>
          <p className="products-about-text">
            Umbrella Pharmaceuticals specializes in advanced peptide hormone,
            and metabolic research products. Every compound is formulated to
            meet the highest purity and precision.
          </p>
        </div>

        <div className="products-grid">
          {products.map((p) => (
            <article key={p.id} className="product-card">
              <div className="product-image-wrap">
                <img
                  src={p.image}
                  alt={p.name}
                  className="product-image"
                />
              </div>

              <h3 className="product-name">{p.name}</h3>

              {(p.line || p.dose) && (
                <p className="product-line">
                  {p.line && <span>{p.line}</span>}
                  {p.line && p.dose && <br />}
                  {p.dose && <span>{p.dose}</span>}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
