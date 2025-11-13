import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Главная — витрина">
      <div className="hero-inner">
        {/* Сетка из трёх банок */}
        <div className="hero-gallery" aria-label="Топовые продукты">
          <figure className="prod-card">
            <img src="/img/jars/jar1.png" alt="BPC-157 · 5 mg vial" />
            <a href="#products" className="pill">Купить</a>
          </figure>

          <figure className="prod-card">
            <img src="/img/jars/jar2.png" alt="TB-500 · 5 mg vial" />
            <a href="#products" className="pill">Купить</a>
          </figure>

          <figure className="prod-card">
            <img src="/img/jars/jar3.png" alt="IGF-1 LR3 · 1 mg vial" />
            <a href="#products" className="pill">Купить</a>
          </figure>
        </div>

        {/* Копирайт под банками (минимальный, как в твоём CSS) */}
        <div className="hero-copy">
          <h1 className="hero-title">
            Лабораторное <span>качество</span>. Реальные результаты.
          </h1>
          <p className="hero-sub">
            Фокус на чистоте и стабильности формул
          </p>
        </div>
      </div>
    </section>
  );
}
