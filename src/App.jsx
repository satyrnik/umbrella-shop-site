import React, { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Products from "./components/Products";
import Quality from "./components/Quality";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";

// стили
import "./styles/header.css";
import "./styles/sections.css";
import "./styles/hero.css";
import "./styles/quality.css";
import "./styles/certificates.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ids = ["hero", "products", "quality", "certificates", "about"];

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const links = Array.from(document.querySelectorAll(".nav .nav-link"));

    // базовый класс для анимации секций
    sections.forEach((section) => {
      section.classList.add("section-anim");
    });

    const setActive = (id) => {
      if (!id) return;
      links.forEach((a) => a.classList.remove("active"));
      const link = links.find((a) => a.getAttribute("href") === `#${id}`);
      if (link) link.classList.add("active");
    };

    // IntersectionObserver — только анимация появления
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    sections.forEach((s) => io.observe(s));

    // живой header + логика активного пункта меню по скроллу
    const headerEl = document.getElementById("site-header");

    const handleScroll = () => {
      if (headerEl) {
        if (window.scrollY > 10) {
          headerEl.classList.add("header-scrolled");
        } else {
          headerEl.classList.remove("header-scrolled");
        }
      }

      const headerOffset = headerEl ? headerEl.offsetHeight + 12 : 0;

      let currentId = null;
      let bestDelta = Infinity;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();

        if (rect.bottom <= headerOffset || rect.top >= window.innerHeight) {
          return;
        }

        const delta = Math.abs(rect.top - headerOffset);

        if (delta < bestDelta) {
          bestDelta = delta;
          currentId = sec.id;
        }
      });

      if (currentId) {
        setActive(currentId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // если зашли сразу по якорю (#products и т.п.)
    const initialHash = window.location.hash.replace("#", "");
    if (initialHash) {
      const target = document.getElementById(initialHash);
      if (target) {
        target.classList.add("section-visible");
        setActive(initialHash);
      }
    }

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    // закрываем бургер после выбора пункта
    setMenuOpen(false);
  };

  return (
    <>
      <header
        id="site-header"
        className={`header ${menuOpen ? "header--menu-open" : ""}`}
      >
        <div className="header-inner">
          <a href="#hero" className="logo" aria-label="Umbrella Shop">
            <img
              src="/umbrella-logo.png"
              alt="Umbrella logo"
              className="logo-img"
            />
            <span className="logo-title">
              <span className="logo-red">UMBRELLA</span>&nbsp;SHOP
            </span>
          </a>

          {/* Бургер для мобильных */}
          <button
            type="button"
            className={`nav-toggle ${menuOpen ? "nav-toggle--open" : ""}`}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="nav-toggle-line" />
            <span className="nav-toggle-line" />
            <span className="nav-toggle-line" />
          </button>

          <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
            <a href="#hero" className="nav-link" onClick={handleNavClick}>
              Main
            </a>
            <a href="#products" className="nav-link" onClick={handleNavClick}>
              Products
            </a>
            <a href="#quality" className="nav-link" onClick={handleNavClick}>
              Quality
            </a>
            <a
              href="#certificates"
              className="nav-link"
              onClick={handleNavClick}
            >
              Certificates
            </a>
            <a href="#about" className="nav-link" onClick={handleNavClick}>
              About us
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Products />
        <Quality />
        <Certificates />
      </main>

      <Footer />
    </>
  );
}
