// src/components/Products.jsx
import React from "react";
import "../styles/products.css";
import { useI18n } from "../i18n";

export default function Products() {
  const { t } = useI18n();

  const productBlocks = [
    {
      id: "set1",
      label: t("products.sets.set1.label"),
      name: t("products.sets.set1.name"),
      subtitle: t("products.sets.set1.subtitle"),
      image: "/img/products/umbrella-set-1.jpg",
      description: t("products.sets.set1.description"),
      bullets: t("products.sets.set1.bullets"),
    },
    {
      id: "set2",
      label: t("products.sets.set2.label"),
      name: t("products.sets.set2.name"),
      subtitle: t("products.sets.set2.subtitle"),
      image: "/img/products/umbrella-set-2.jpg",
      description: t("products.sets.set2.description"),
      bullets: t("products.sets.set2.bullets"),
    },
    {
      id: "set3",
      label: t("products.sets.set3.label"),
      name: t("products.sets.set3.name"),
      subtitle: t("products.sets.set3.subtitle"),
      image: "/img/products/umbrella-set-3.jpg",
      description: t("products.sets.set3.description"),
      bullets: t("products.sets.set3.bullets"),
    },
  ];

  return (
    <section id="products" className="products section-anim">
      <div className="products-inner">

        <div className="products-head">
          <span className="products-tag">{t("products.tag")}</span>
          <h2 className="products-title">{t("products.title")}</h2>
          <p className="products-text">{t("products.text")}</p>
        </div>

        <div className="products-list">
          {productBlocks.map((block, index) => (
            <article
              key={block.id}
              className={
                "products-row" + (index % 2 === 1 ? " products-row--reverse" : "")
              }
            >
              <div className="products-photo-col">
                <div className="products-photo-card">
                  <div className="products-photo-badge">{block.label}</div>
                  <img src={block.image} alt={block.name} className="products-photo" />
                </div>
              </div>

              <div className="products-text-col">
                <h3 className="product-name">{block.name}</h3>
                <p className="product-subtitle">{block.subtitle}</p>
                <p className="product-description">{block.description}</p>

                <ul className="product-bullets">
                  {block.bullets?.map((item, i) => (
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
