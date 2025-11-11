import React, { useEffect, useState } from "react";
import './styles/variables.css';
import './styles/layout.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/products.css';
import './styles/about-footer.css';
import './styles/animations.css';

function App() {
  const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
    const sections = ["hero", "products", "about", "contacts"];
    const offset = 160; // высота хедера + запас

    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "hero";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const sectionTop = el.offsetTop - offset;
        const sectionBottom = sectionTop + el.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          current = id;
        }
      });

      // Обновляем только если реально изменилась секция
      setActiveSection((prev) => (prev !== current ? current : prev));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // сразу подсветить нужный пункт при загрузке

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <a href="#hero" className="logo">
            <img
              src="/umbrella-logo.png"
              alt="Umbrella logo"
              className="logo-img"
            />
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
              <div className="hero-frame-label">
                UMBRELLA // PERFORMANCE SERIES V1
              </div>

              <div className="hero-device">
                <div className="device-ring"></div>
                <div className="device-core">
                  <div className="device-title">PRE-WORKOUT</div>
                  <div className="device-sub">FOCUS • POWER • PUMP</div>
                </div>
              </div>

              <div className="hero-metrics">
                <div className="metric">
                  <div className="metric-label">FOCUS</div>
                  <div className="metric-bar">
                    <div className="metric-bar-fill level-90"></div>
                  </div>
                </div>
                <div className="metric">
                  <div className="metric-label">POWER</div>
                  <div className="metric-bar">
                    <div className="metric-bar-fill level-100"></div>
                  </div>
                </div>
                <div className="metric">
                  <div className="metric-label">PURITY</div>
                  <div className="metric-bar">
                    <div className="metric-bar-fill level-95"></div>
                  </div>
                </div>
              </div>

              <div className="hero-frame-glow" />
            </div>
          </div>
        </div>
      </section>

            {/* PRODUCTS */}
      <section id="products" className="section products">
        <div className="section-inner">
          <div className="products-header">
            <h2 className="section-title">Линейка Umbrella</h2>
            <p className="section-subtitle">
              Целенаправленные формулы под разные задачи: мощный старт, чистая энергия,
              восстановление и ежедневная поддержка. Всё — в едином стиле Umbrella.
            </p>
          </div>

          <div className="products-grid">
            {/* 1. Главный преп (флагман) */}
            <div className="product-card product-card-main">
              <div className="product-tag">FLAGSHIP</div>
              <h3 className="product-title">Umbrella PULSE // PRE-WORKOUT</h3>
              <p className="product-text">
                Жёсткий фокус, контролируемая агрессия, памп. Формула под тех, кто выходит
                не "потренироваться", а доминировать. Без сахара, без воды, только рабочие компоненты.
              </p>
              <ul className="product-specs">
                <li>Фокус • Энергия • Памп</li>
                <li>Высокие дозировки активов</li>
                <li>Поддержка ЦНС без "мертвичины" после</li>
              </ul>
              <div className="product-status">*Конкретный состав подтянем с сайта заказчика</div>
            </div>

            {/* 2. Восстановление */}
            <div className="product-card">
              <div className="product-tag">RECOVERY</div>
              <h3 className="product-title">Umbrella RESTORE</h3>
              <p className="product-text">
                Комплекс для восстановления после тяжёлых тренировок.
                Сон, мышцы, суставы, ЦНС — собрали в одну систему.
              </p>
              <ul className="product-specs">
                <li>BCAA/EAA + электролиты</li>
                <li>Поддержка мышечного восстановления</li>
                <li>Опции вкусов / без вкуса</li>
              </ul>
            </div>

            {/* 3. Дейли */}
            <div className="product-card">
              <div className="product-tag">DAILY</div>
              <h3 className="product-title">Umbrella DAILY CORE</h3>
              <p className="product-text">
                Базовый комплекс для тех, кто живёт в нагрузке:
                иммунитет, энергия, гормональный фон, общее состояние.
              </p>
              <ul className="product-specs">
                <li>Витамины + минералы</li>
                <li>Адекватные дозировки, без "пустышек"</li>
                <li>Под строгий ежедневный приём</li>
              </ul>
            </div>

            {/* 4. Фэтбёрнер / спец-линейка */}
            <div className="product-card">
              <div className="product-tag">SPECIAL</div>
              <h3 className="product-title">Umbrella SHRED / NIGHT</h3>
              <p className="product-text">
                Формулы под сушку и контроль аппетита. Дневной и ночной режим.
                Акцент на прозрачный состав и реальные эффекты.
              </p>
              <ul className="product-specs">
                <li>Термогенный комплекс</li>
                <li>Контроль аппетита</li>
                <li>Ночные формулы без разбитости</li>
              </ul>
            </div>
          </div>

          <div className="products-note">
            Полные составы, вкусы, фото и артикулы возьмём с сайта заказчика и подставим сюда —
            структура уже готова под живые товары.
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
