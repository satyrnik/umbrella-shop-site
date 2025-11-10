import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

useEffect(() => {
  const sections = ["hero", "products", "about", "contacts"];
  const offset = 140; // чтобы не перекрывало хедером

  const handleScroll = () => {
    const scrollY = window.scrollY;
    let current = "hero";

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.offsetTop - offset;
      if (scrollY >= top) {
        current = id;
      }
    });

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
      <div className="page">
        {/* HEADER */}
        <header className="header">
          <div className="header-inner">
            <a href="#hero" className="logo">
              <img src="/umbrella-logo.png" alt="Umbrella logo" className="logo-img"/>
              <span className="logo-title">UMBRELLA</span>
            </a>

            <nav className="nav">
              <a
                  href="#hero"
                  className={`nav-link ${activeSection === "hero" ? "active" : ""}`}
              >
                Главная
              </a>
              <a
                  href="#products"
                  className={`nav-link ${activeSection === "products" ? "active" : ""}`}
              >
                Товары
              </a>
              <a
                  href="#about"
                  className={`nav-link ${activeSection === "about" ? "active" : ""}`}
              >
                О нас
              </a>
              <a
                  href="#contacts"
                  className={`nav-link ${activeSection === "contacts" ? "active" : ""}`}
              >
                Контакты
              </a>
            </nav>
          </div>
        </header>

        {/* HERO */}
        <section id="hero" className="hero">
          <div className="hero-inner">
            <div className="hero-left">
              <div className="hero-label">
                Umbrella Performance Protocol
              </div>

              <h1>
                CONTROLLED
                <span> POWER</span>
              </h1>

              <p>
                Премиальные спортивные добавки для тех, кто не играет
                в фитнес. Научно выверенные формулы, сильные дозировки,
                чистый состав и дизайн, который подчёркивает статус.
                Umbrella — выбор тех, кто выходит доминировать.
              </p>

              <div className="hero-actions">
                <a href="#products" className="hero-btn hero-btn-primary">
                  Смотреть линейку
                </a>
                <a href="#about" className="hero-btn hero-btn-ghost">
                  Почему Umbrella
                </a>
              </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="hero-stat-label">Формулы под результат</span>
                  <span className="hero-stat-value">Clinical Focus</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-label">Чистый состав</span>
                  <span className="hero-stat-value">No Trash</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-label">Для тех, кто доминирует</span>
                  <span className="hero-stat-value">Alpha Choice</span>
                </div>
              </div>
            </div>

            <div className="hero-right">
              <div className="hero-frame">
                <div className="hero-frame-label">MAIN VISUAL // UMBRELLA SERIES</div>
                <div className="hero-frame-placeholder">
                  <span>Зона под ключевой визуал.</span>
                  <span>Атлет, силуэты, лабораторный свет.</span>
                  <span>Визуал усиливает идею: контроль, сила, статус.</span>
                </div>
                <div className="hero-frame-glow"/>
              </div>
            </div>
          </div>
        </section>


        {/* PRODUCTS */}
        <section id="products" className="section section-dark">
          <div className="section-inner">
            <h2 className="section-title">Наши продукты</h2>
            <p className="section-subtitle">
              Здесь будут реальные позиции заказчика: препы, витамины, комплексы.
            </p>

            <div className="products-grid">
              {/* Карточки-заглушки. Потом заменим на реальные товары */}
              <div className="product-card">
                <div className="product-label">PRE-WORKOUT</div>
                <h3>Umbrella Pulse</h3>
                <p>
                  Взрывная концентрация и энергия. Оформим под реальный продукт,
                  когда получим данные.
                </p>
              </div>

              <div className="product-card">
                <div className="product-label">RECOVERY</div>
                <h3>Umbrella Restore</h3>
                <p>
                  Восстановление после нагрузки. Сейчас заглушка — дальше подставим
                  реальные описания.
                </p>
              </div>

              <div className="product-card">
                <div className="product-label">VITAMINS</div>
                <h3>Umbrella Daily</h3>
                <p>
                  Базовая поддержка. Названия и тексты будут переписаны под клиента.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section section-light">
          <div className="section-inner">
            <h2 className="section-title">О бренде</h2>
            <p className="section-text">
              Здесь мы расскажем историю проекта: лабораторный подход,
              контроль качества, ориентация на результат. Текст адаптируем под
              реального заказчика, когда он даст вводные. Сейчас — чистый каркас.
            </p>
          </div>
        </section>

        {/* CONTACTS / FOOTER */}
        <footer id="contacts" className="footer">
          <div className="section-inner footer-inner">
            <div>
              <h3 className="footer-title">Контакты</h3>
              <p>Email: info@umbrella-shop.com</p>
              <p>Telegram: @umbrella_support</p>
              <p>Instagram: @umbrella.shop</p>
            </div>
            <div className="footer-right">
              <p className="footer-note">
                Адрес, реквизиты и реальные контакты подставим после согласования с заказчиком.
              </p>
              <p className="footer-copy">
                © {new Date().getFullYear()} Umbrella Shop. Все права защищены.
              </p>
            </div>
          </div>
        </footer>
      </div>
  );
}

export default App;